import React from 'react';

import './styles/locomotive-scroll.css'

import ScrollContainer from './components/scroll';
import Page from './components/page'
import SectionTitle from './components/title';

import SynthwaveScene from './components/graphics/synthwave'

function App() {

  return (
    <ScrollContainer className="overscroll-none">
      {/* <Page>
        <SectionTitle text="Rishav Chakravarty" />
      </Page>

      <Page>
        <SectionTitle text="About Me" />
      </Page> */}

      <Page>
        <SynthwaveScene className="w-full h-full bg-red-500"/>
      </Page>
    </ScrollContainer>
  );
}

export default App;
