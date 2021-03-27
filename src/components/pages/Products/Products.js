import React from 'react'
import Section from '../Section';
import { homeObjThree, homeObjTwo } from './Data'
import Pricing from '../Pricing';

export default function Products() {
  return (
    <>
      <Section {...homeObjThree}></Section>
      <Section {...homeObjTwo}></Section>
      <Pricing />
    </>
  )
}

