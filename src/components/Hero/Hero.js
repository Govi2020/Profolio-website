import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        I am a passionate full stack/machine learning/game/cyber security expert,Who is Avalable to Work😃
        </SectionText>
        <Button onClick={props.handleClick} href="#contact">Contact Me</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;