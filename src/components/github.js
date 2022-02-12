import axios from "axios";
import { useEffect, useState } from "react";

function GithubInfo(props) {
  let [profile, setProfile] = useState("");
  let [profileUrl, setProfileUrl] = useState("");

  const apiLink = "https://api.github.com/users/rishavchakra";

  const fetchProjLangs = (projLangUrl) => {
    fetch(projLangUrl)
      .then((langs) => langs.json())
      .then((langs) => {
        let langList = [];
        for (const lang in langs) {
          langList.push(lang);
        }
        return langList;
      })
      .then((langList) => {
		  	// TODO: Update the list of languages in the project
        console.log(langList);
      });
  };
  const fetchRecentRepoData = (reposUrl) => {
    fetch(reposUrl)
      .then((res) => res.json())
      .then((res) => {
        // Get the most recent entry
        let latestDate = new Date("2000");
        let recentProj = res[0];
        res.forEach((element) => {
          // 'updated_at'
          let date = element.updated_at;
          date = new Date(date.substring(0, date.indexOf("T")));

          if (date > latestDate) {
            latestDate = date;
            recentProj = element;
          }
        });
        return recentProj;
      })
      .then((recentProj) => {
		//   TODO: Update the project's information from this
        console.log(recentProj);
        console.log(recentProj.html_url);
        console.log(recentProj.description);
        console.log(recentProj.languages_url);
        console.log(recentProj.pushed_at);
        return recentProj.languages_url;
      })
      .then((projLangs) => {
		  fetchProjLangs(projLangs)
	  });
  };

  const fetchData = () => {
    let reposUrl;
    fetch(apiLink)
      .then((res) => res.json())
      .then((res) => {
        setProfile(res.avatar_url);
        setProfileUrl(res.html_url);
        reposUrl = res.repos_url;
        return reposUrl;
      })
      .then((reposUrl) => {
        fetchRecentRepoData(reposUrl);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <img src={profile} />
      <p>{profileUrl}</p>
    </div>
  );
}

export default GithubInfo;
