import React from 'react'
import Section from '../Section';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data'

function Home() {
  return (
    <>
      <Section {...homeObjOne}></Section>
      <Section {...homeObjTwo}></Section>
      <Section {...homeObjThree}></Section>
      <Section {...homeObjFour}></Section>
    </>
  )
}

export default Home
