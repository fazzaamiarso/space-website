import styled from "styled-components";
import bgMobile from "/assets/home/background-home-mobile.jpg";
import bgTablet from "/assets/home/background-home-tablet.jpg";
import bgDesktop from "/assets/home/background-home-desktop.jpg";
import { useHistory } from "react-router";

const HomePage: React.FC = () => {
  let history = useHistory();

  const exploreHandler = () => {
    history.push("/destination");
  };

  return (
    <Container>
      <Text>
        <span>SO, YOU WANT TO TRAVEL TO</span>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </Text>
      <Explore onClick={exploreHandler}>EXPLORE</Explore>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  padding-top: 15vh;
  padding-inline: 1.5rem;

  width: 100vw;
  height: 100vh;
  background: url(${bgMobile}) center no-repeat;
  @media screen and (min-width: 375px) {
    background: url(${bgTablet}) center no-repeat;
  }
  @media screen and (min-width: 769px) {
    background: url(${bgDesktop}) no-repeat right;
    flex-direction: row;
    justify-content: space-around;
  }
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  span {
    font-size: clamp(16px, calc(1rem + ((1vw - 3.75px) * 1.1268)), 28px);
    letter-spacing: 0.3rem;
    color: var(--lightBlue);
  }
  h1 {
    padding-block: 1rem;
    font-family: var(--fontHeading);
    font-weight: 400;
    font-size: clamp(
      6.25rem,
      calc(6.25rem + ((1vw - 0.234375rem) * 12.7226)),
      9.375rem
    );
    color: white;
  }
  p {
    font-size: clamp(
      0.9375rem,
      calc(0.9375rem + ((1vw - 0.234375rem) * 0.2817)),
      1.125rem
    );
    max-width: 50ch;
  }
  @media screen and (min-width: 769px) {
    text-align: left;
    align-items: flex-start;
  }
`;
const Explore = styled.div`
  font-family: var(--fontHeading);
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
  width: 150px;
  aspect-ratio: 1;
  transition: box-shadow 0.21s;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 0 50px rgba(255, 255, 255, 0.1);
  }
  @media screen and (min-width: 769px) {
    font-size: 2rem;
    width: 274px;
  }
`;

export default HomePage;
