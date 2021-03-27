import React from 'react'
import Section from '../Section';
import { homeObjOne, homeObjThree } from './Data'
import Pricing from '../Pricing';

function SignUp() {
  return (
    <>
      <Section {...homeObjOne}></Section>

      <Section {...homeObjThree}></Section>
      <Pricing />
    </>
  )
}

export default SignUp;
