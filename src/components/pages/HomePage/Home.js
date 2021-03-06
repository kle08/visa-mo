import React from 'react'
import Section from '../Section';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data'
import Pricing from '../Pricing';

function Home() {
  return (
    <>
      <Section {...homeObjOne}></Section>
      <Section {...homeObjTwo}></Section>
      <Section {...homeObjThree}></Section>
      <Section {...homeObjFour}></Section>
      <Pricing />
    </>
  )
}

export default Home
