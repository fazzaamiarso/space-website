import styled from "styled-components";
import DATA from "../../../public/data.json";
import bgMobile from "/assets/technology/background-technology-mobile.jpg";
import bgTablet from "/assets/technology/background-technology-tablet.jpg";
import bgDesktop from "/assets/technology/background-technology-desktop.jpg";
import PageNav from "../Shared/PageNav";
import { Heading3 } from "../Shared/Heading";
import CircleGroup from "./CircleGroup";
import React, { useEffect, useLayoutEffect, useState } from "react";
import debounce from "lodash/debounce";

const Tech: React.FC = () => {
  const [selected, setSelected] = useState(0);
  const TECH = DATA.technology[selected];

  const selecTab = (tabIdx: number) => setSelected(tabIdx);

  const [pictureState, setPictureState] = useState("");

  useEffect(() => {
    const changePictureState = debounce(() => {
      if (window.innerWidth < 769) setPictureState(TECH.images.landscape);
      if (window.innerWidth >= 769) setPictureState(TECH.images.portrait);
    }, 100);

    const events = ["load", "resize"];
    events.forEach((e) => {
      window.addEventListener(e, changePictureState);
    });

    changePictureState();

    return () =>
      events.forEach((e) => {
        window.removeEventListener(e, changePictureState);
      });
  }, [window.innerWidth, selected]);

  return (
    <Container>
      <PageNav pageNum={"03"} title={"SPACE LAUNCH 101"} />
      <Main>
        <Picture>
          <img src={pictureState} />
        </Picture>
        <Content>
          <CircleGroup onSelect={selecTab} selectedTab={selected} />
          <Text>
            <SubHead>THE TERMINOLOGY...</SubHead>
            <Heading3>{TECH.name}</Heading3>
            <p>{TECH.description}</p>
          </Text>
        </Content>
      </Main>
    </Container>
  );
};

const Container = styled.section`
  padding-top: 5.5rem;
  padding-bottom: 3rem;
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  background: url(${bgMobile}) center top no-repeat;

  @media screen and (min-width: 376px) {
    background: url(${bgTablet}) center top no-repeat;
  }
  @media screen and (min-width: 769px) {
    background: url(${bgDesktop}) center top no-repeat;
  }
  @media screen and (min-width: 768px) {
    padding-left: 2.3rem;
  }
  @media screen and (min-width: 1025px) {
    padding-top: 13rem;
    padding-left: 5rem;
    & > :first-child {
      padding-inline: 0;
    }
  }
`;
const Picture = styled.div`
  @media screen and (min-width: 769px) {
    position: relative;
    right: -5%;
  }
`;
const Main = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 3rem;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 3rem;
  }
`;
const SubHead = styled.div`
  color: var(--lightBlue);
  letter-spacing: 2.7px;
`;
const Text = styled.div`
  text-align: center;
  padding-inline: 1.5rem;
  p {
    max-width: 60ch;
  }
  @media screen and (min-width: 768px) {
    text-align: left;
    p {
      max-width: 50ch;
    }
  }
`;

export default Tech;
