interface GithubProfileData {
  avatar_url: string;
  html_url: string;
  repos_url: string;
}

interface GithubRepoData {
  url: string;
  commits_url: string;
}

interface GithubCommitData {
  author: {
    date: string;
  };
}

interface GithubProjCommitData {
  commits: GithubCommitData[];
}

type GithubReposData = GithubRepoData[]

interface GithubProjData {
  name: string;
  url: string;
  desc: string;
  push_date: string;
  lang_url: string;
}

interface GithubProjLangs {
  langs: GithubLang[];
}

interface GithubLang {}

export type {
  GithubProfileData,
  GithubRepoData,
  GithubCommitData,
  GithubProjCommitData,
  GithubReposData,
  GithubProjData,
  GithubProjLangs,
};
