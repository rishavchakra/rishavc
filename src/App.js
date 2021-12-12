import React, { useRef } from 'react';

import locomotiveScroll from 'locomotive-scroll';
import './styles/locomotive-scroll.css'

import ScrollContainer from './components/scroll';
import Page from './components/page'
import SectionTitle from './components/title';

function App() {

  return (
    <ScrollContainer>
      <Page>
        <SectionTitle text="Rishav Chakravarty" />
      </Page>
      <Page>
        <h1>bop</h1>
      </Page>
    </ScrollContainer>
  );
}

export default App;
