import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
    Container,
    Div1,
    Div2,
    Div3,
    NavLink,
    SocialIcons,
} from "./HeaderStyles";

const Header = () => (
    <Container>
        <Div1>
            <Link href="/">
                <a
                    style={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                    }}
                >
                    <DiCssdeck size="3rem" /> <span>Govi2020</span>
                </a>
            </Link>
        </Div1>
        <Div2>
            <li>
                <Link href="#projects">
                    <NavLink>Projects</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#tech">
                    <NavLink>Technologies</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#about">
                    <NavLink>About</NavLink>
                    
                </Link>
            </li>
        </Div2>
        <Div3>
            <SocialIcons href="https://github.com/Govi2020">
                <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/govind-a-060602212/">
                <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://twitter.com/Govi30262783">
                <AiFillTwitterCircle size="3rem" />
            </SocialIcons>
        </Div3>
    </Container>
);

export default Header;
