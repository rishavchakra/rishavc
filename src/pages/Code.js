import './Code.scss'

import GithubInfo from '../components/code/github';

function Code() {
  return <div className="App" id='code-page'>
    <div id='code-name-page'>
      <h1 className="code-name-title">Rishav's Code</h1>
    </div>

    <section id='code-intro'>

    </section>

    <section id='code-projects'>
      <h1 className="code-section-title">Projects</h1>

    </section>

    <section id='code-current'>
      <GithubInfo />
    </section>

    <section id='code-work'>

    </section>
  </div>;
}

export default Code;
