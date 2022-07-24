<script setup lang="ts">
import type {
  GithubProfileData,
  GithubReposData,
  GithubRepoData,
  GithubProjCommitData,
  GithubProjData,
  GithubProjLangs,
} from "./github";
const apiLink = "https://api.github.com/users/rishavchakra";
</script>

<template>
  <div>
    <p>Github stuff</p>
    <p>{{ profileUrl }}</p>
    <img src="{{ profilePic }}" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      profilePic: "",
      profileUrl: "",
      projInfo: {} as GithubProjData,
      projLangs: [] as string[],
    };
  },

  computed: {},

  methods: {
    async fetchProfileData() {
      return fetch("https://api.github.com/users/rishavchakra", {
        method: "GET",
        headers: { Accept: "application/json" },
      })
        .then((res) => res.json())
        .then((res) => res as GithubProfileData);
    },

    async fetchReposData(profile_data: GithubProfileData) {
      return fetch(profile_data.repos_url, {
        method: "GET",
        headers: { Accept: "application/json" },
      })
        .then((res) => res.json())
        .then((res) => res as GithubReposData);
    },

    async fetchRepoCommitDate(repoData: GithubRepoData) {
      return fetch(repoData.commits_url, {
        method: "GET",
        headers: { Accept: "application/json" },
      })
        .then((res) => res.json())
        .then((res) => res as GithubProjCommitData)
        .then((res) => new Date(res.commits[0].author.date)); // Grab the date of the latest commit
    },

    async fetchProjInfo(repoData: GithubRepoData) {
      return fetch(repoData.url, {
        method: "GET",
        headers: { Accept: "application/json" },
      })
        .then((res) => res.json())
        .then((res) => res as GithubProjData);
    },

    async fetchProjLangs(projData: GithubProjData) {
      return fetch(projData.lang_url, {
        method: "GET",
        headers: { Accept: "application/json" },
      })
        .then((res) => res.json())
        .then((res) => res as GithubProjLangs);
    },
  },

  async mounted() {
    const profileData = await this.fetchProfileData();
    console.log(profileData);
    this.profilePic = profileData.avatar_url;
    this.profileUrl = profileData.html_url;

    const reposData = await this.fetchReposData(profileData);
    console.log(reposData);

    const projDates = await Promise.all(
      reposData.map((proj) => {
        console.log(proj);
        return this.fetchRepoCommitDate(proj);
      })
    );
    let recentDate = new Date("2000"); // Arbitrary date before all commits
    let recentInd = 0;
    projDates.forEach((projDate, index) => {
      if (projDate > recentDate) {
        recentDate = projDate;
        recentInd = index;
      }
    });

    const recentProjData = await this.fetchProjInfo(reposData[recentInd]);
    this.projInfo = recentProjData;
  },
});
</script>
