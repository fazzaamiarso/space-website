import styled from "styled-components";
import DATA from "../../../public/data.json";
import bgMobile from "/assets/destination/background-destination-mobile.jpg";
import bgTablet from "/assets/destination/background-destination-tablet.jpg";
import bgDesktop from "/assets/destination/background-destination-desktop.jpg";
import PageNav from "../Shared/PageNav";
import DestinationContent from "./DestinationContent";
import DestinationTab from "./DestinationTab";
import { useState } from "react";

const DESTINATION_LIST = DATA.destinations;

const Destination: React.FC = () => {
  const [selected, setSelected] = useState(0);
  const DESTINATION = DATA.destinations[selected];

  const selectHandler = (tabIdx: number) => {
    setSelected(tabIdx);
  };
  return (
    <Container>
      <PageNav pageNum={"01"} title={"PICK YOUR DESTINATION"} />
      <Main>
        <Picture>
          <img src={DESTINATION.images.png} />
        </Picture>
        <Content
          name={DESTINATION.name}
          desc={DESTINATION.description}
          distance={DESTINATION.distance}
          travel={DESTINATION.travel}
        >
          <DestinationTab
            destinationsList={DESTINATION_LIST.map((dest) => dest.name)}
            onSelect={selectHandler}
            selectedTab={selected}
          />
        </Content>
      </Main>
    </Container>
  );
};

const Container = styled.section`
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100vw;
  min-height: 100vh;

  background: url(${bgMobile}) center top no-repeat;

  @media screen and (min-width: 376px) {
    background: url(${bgTablet}) center top no-repeat;
  }
  @media screen and (min-width: 769px) {
    background: url(${bgDesktop}) center top no-repeat;
  }
  @media screen and (min-width: 768px) {
    padding-top: 8.5rem;
    padding-bottom: 5rem;
    padding-inline: 2.5rem;
  }
  @media screen and (min-width: 1025px) {
    padding-top: 15rem;
    padding-inline: 8rem;
  }
`;
const Picture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1.75rem;
  img {
    width: 170px;
  }
  @media screen and (min-width: 768px) {
    img {
      width: 300px;
    }
  }
  @media screen and (min-width: 1025px) {
    padding-top: 4rem;
    img {
      width: 445px;
    }
  }
`;
const Main = styled.main`
  @media screen and (min-width: 1025px) {
    display: flex;
    align-items: center;
    gap: 10rem;
  }
`;
const Content = styled(DestinationContent)``;

export default Destination;
