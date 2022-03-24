import {useState} from "react"

const langTypes = [
    'web',
    'general',
    'systems'
]

const langs = {
    'web': [
        'Javascript',
        'ReactJS',
        'HTML',
        'CSS',
        'SASS'
    ],
    'general': [
        'Java',
        'Python'
    ],
    'systems': [
        'Rust',
        'C/C++',
        'GLSL'
    ]
}

// Component represents a single language item
function CodeLang(props) {
    return <div className='code-lang-item'>
        <p>{props.lang}</p>
    </div>
}

// Component represents a group of similar language items
function CodeLangGroup(props) {
    return <div className='code-lang-group'>
        <h3>{props.langtype}</h3>
        {langs[props.langtype].map((lang) => <CodeLang lang={lang} key={lang}/> )}
    </div>
}

// Component represents whole section of code languages
function CodeLanguages() {
    const [curLangType, setCurLangType] = useState('web')
    const [curTypeNum, setCurTypeNum] = useState(0)

    const nextLangType = () => {
        const nextLangNum = (curTypeNum + 1) % langTypes.length
        setCurTypeNum(nextLangNum)
        setCurLangType(langTypes[nextLangNum])
    }

    const prevLangType = () => {
        const prevLangNum = (curTypeNum + 2) % langTypes.length
        setCurTypeNum(prevLangNum)
        setCurLangType(langTypes[prevLangNum])
    }

    return <div>
        <button onClick={prevLangType}>Prev</button>
        <button onClick={nextLangType}>Next</button>
        <CodeLangGroup langtype={curLangType}/>
    </div>
}

export default CodeLanguages

