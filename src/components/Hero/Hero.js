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
        I am Govind - Full Stack Dev/ML Dev/Game Dev/Web Pentester
        </SectionText>
        <Button onClick={props.handleClick} href="#contact">Contact Me</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
