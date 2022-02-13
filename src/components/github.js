// import axios from "axios";
import { useEffect, useState } from "react";

const langImages = {
  JavaScript:
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
  HTML: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  CSS: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  SCSS: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
  SASS: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
  Rust: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg",
  "C++":
    "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
  C: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
  Python:
    "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  GLSL: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Opengl-logo.svg",
  Java: "https://upload.wikimedia.org/wikipedia/de/e/e1/Java-Logo.svg",
};

function GithubInfo(props) {
  let [profilePic, setProfilePic] = useState("");
  let [profileUrl, setProfileUrl] = useState("");
  let [projInfo, setProjInfo] = useState("");
  let [projLangs, setProjLangs] = useState([]);

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
        // console.log(langList);
        setProjLangs(langList);
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
        // console.log(recentProj);
        // console.log(recentProj.html_url);
        // console.log(recentProj.description);
        // console.log(recentProj.languages_url);
        // console.log(recentProj.pushed_at);
        setProjInfo({
          name: recentProj.name,
          url: recentProj.html_url,
          desc: recentProj.description,
          push_date: recentProj.pushed_at,
        });
        return recentProj.languages_url;
      })
      .then((projLangs) => {
        fetchProjLangs(projLangs);
      });
  };

  const fetchData = () => {
    let reposUrl;
    fetch(apiLink)
      .then((res) => res.json())
      .then((res) => {
        setProfilePic(res.avatar_url);
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
    <div id='github-page'>
      <img src={profilePic} />
      <h2>I'm currently working on:</h2>
      <div id='github-project-name-box'>
        <a href={projInfo.url} id='github-project-name'>{projInfo.name}</a>
      </div>
      <p>built with</p>
      <div id='code-projs-langs'>
        {projLangs.map((lang) =>
          langImages[lang] ? (
            <img src={langImages[lang]} key={lang} className='code-proj-lang-img'/>
          ) : (
            <p className="code-proj-lang-name">{lang}</p>
          )
        )}
      </div>
      <a href={profileUrl}>View my other projects!</a>
    </div>
  );
}

export default GithubInfo;
