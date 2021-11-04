import styled from "styled-components";
import CrewText from "./CrewText";
import DATA from "../../../public/data.json";
import PageNav from "../Shared/PageNav";
import bgMobile from "/assets/crew/background-crew-mobile.jpg";
import bgTablet from "/assets/crew/background-crew-tablet.jpg";
import bgDesktop from "/assets/crew/background-crew-desktop.jpg";
import CircleTabs from "./CircleTabs";
import { useEffect, useState } from "react";

const Crew: React.FC = () => {
  const [selected, setSelected] = useState(0);
  const CREW = DATA.crew[selected];

  const selectedHandler = (clickedTab: number) => {
    setSelected(clickedTab);
  };

  useEffect(() => {
    const autoChange = setInterval(() => {
      if (selected === 3) setSelected(0);
      if (selected < 3) setSelected((prev) => prev + 1);
    }, 10000);

    return () => {
      clearInterval(autoChange);
    };
  }, [selected]);

  return (
    <Container>
      <PageNav pageNum={"02"} title={"MEET YOUR CREW"} />
      <Picture>
        <img src={CREW.images.png} />
      </Picture>
      <Content>
        <CircleTabs onSelect={selectedHandler} selectedTab={selected} />
        <CrewText name={CREW.name} role={CREW.role} desc={CREW.bio} />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  width: 100vw;
  min-height: 100vh;
  padding-top: 12vh;
  padding-inline: var(--paddingInline, 1.5rem);

  background: url(${bgMobile}) center top no-repeat;

  @media screen and (min-width: 376px) {
    background: url(${bgTablet}) center top no-repeat;
  }
  @media screen and (min-width: 769px) {
    background: url(${bgDesktop}) center top no-repeat;
  }
  @media screen and (min-width: 768px) {
    padding-top: 8rem;
    gap: 3rem;
  }
  @media screen and (min-width: 1025px) {
    --paddingInline: 10rem;
    gap: 8rem;
    padding-top: 13rem;
    align-items: flex-start;
    padding-bottom: 4rem;
  }
`;
const Picture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid #383b4b;
  img {
    width: 175px;
  }
  @media screen and (min-width: 768px) {
    order: 1;
    border: none;
    img {
      width: 400px;
    }
  }
  @media screen and (min-width: 1025px) {
    justify-content: flex-end;
    position: absolute;
    right: calc(var(--paddingInline) - 1rem);
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;
  }
  @media screen and (min-width: 1025px) {
    position: relative;
    z-index: 2;
    gap: 5rem;
    align-items: flex-start;
  }
`;

export default Crew;
