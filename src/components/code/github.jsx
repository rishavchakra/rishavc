import {useEffect, useState} from "react";

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

function GithubInfo() {
  let [profilePic, setProfilePic] = useState("");
  let [profileUrl, setProfileUrl] = useState("");
  let [projInfo, setProjInfo] = useState("");
  let [projLangs, setProjLangs] = useState([]);

  const apiLink = "https://api.github.com/users/rishavchakra";

  const fetchGithubData = async () => {
    const reposUrl = await fetch(apiLink)
      .then((res) => res.json())
      .then((res) => {
        setProfilePic(res.avatar_url)
        setProfileUrl(res.html_url)
        return res.repos_url
      })

    const projUrls = await fetch(reposUrl)
      .then((res) => res.json())
      .then((res) => {
        let projUrlList = []
        res.forEach((proj) => {
          projUrlList.push(proj.url)
        })
        return projUrlList
      })

    const projCommitUrls = await fetch(reposUrl)
      .then((res) => res.json())
      .then((res) => {
        let projUrlList = []
        res.forEach((proj) => {
          projUrlList.push(proj.commits_url.substring(0, proj.commits_url.indexOf('{')))
        })
        return projUrlList
      })

    const getDate = async (projCommitUrl) => {
      const date = await fetch(projCommitUrl)
        .then((res) => res.json())
        .then((res) => new Date(res[0].commit.author.date))
      return date
    }

    const projDates = await Promise.all(
      projCommitUrls.map((projUrl) => getDate(projUrl))
    )

    let recentDate = new Date('2000')
    let recentInd = 0
    projDates.forEach((projDate, index) => {
      if (projDate > recentDate) {
        recentDate = projDate
        recentInd = index
      }
    })

    const projInfo = await fetch(projUrls[recentInd])
      .then((res) => res.json())
      .then((projInfo) => {
        return {
          name: projInfo.name,
          url: projInfo.html_url,
          desc: projInfo.description,
          push_date: projInfo.pushed_at,
          langs_url: projInfo.languages_url
        }
      })

    const projLangs = await fetch(projInfo.langs_url)
      .then((res) => res.json())
      .then((langs) =>
        Object.entries(langs).sort((a, b) => b[1] - a[1])
        .map((langinfo) => langinfo[0])
      )

    setProjLangs(projLangs)
    setProjInfo(projInfo)

  };

  // Initialize the app by fetching all data
  useEffect(() => {
    fetchGithubData()
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
            <img src={langImages[lang]} key={lang} className='code-proj-lang-img' />
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
