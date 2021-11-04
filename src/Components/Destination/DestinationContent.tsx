import styled from "styled-components";

interface Props {
  children?: JSX.Element;
  name: string;
  desc: string;
  distance: string;
  travel: string;
}

const DestinationContent: React.FC<Props> = ({
  children,
  name,
  desc,
  travel,
  distance,
}) => {
  return (
    <Content>
      {children}
      <Text>
        <h2>{name}</h2>
        <p>{desc}</p>
      </Text>
      <Details>
        <Data>
          <h6>AVG. DISTANCE</h6>
          <h5>{distance}</h5>
        </Data>
        <Data>
          <h6>EST. TRAVEL TIME</h6>
          <h5>{travel}</h5>
        </Data>
      </Details>
    </Content>
  );
};

const Content = styled.div`
  padding-inline: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Text = styled.div`
  text-align: center;
  padding-bottom: 2rem;
  h2 {
    font-weight: 400;
    font-family: var(--fontHeading);
    color: white;
    font-size: clamp(56px, calc(3.5rem + ((1vw - 3.75px) * 4.1315)), 100px);
  }
  p {
    max-width: 60ch;
    font-size: clamp(
      0.9375rem,
      calc(0.9375rem + ((1vw - 0.234375rem) * 0.2817)),
      1.125rem
    );
    line-height: 25px;
  }
  @media screen and (min-width: 1025px) {
    text-align: left;
    padding-bottom: 3.3rem;
  }
`;
const Details = styled.div`
  width: 100%;
  padding-block: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  border-top: 1px solid #383b4b;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
  @media screen and (min-width: 1025px) {
    justify-content: flex-start;
    gap: 5.5rem;
  }
`;
const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  h5 {
    font-weight: 400;
    color: white;
    font-family: var(--fontHeading);
    font-size: 1.75rem;
    text-transform: uppercase;
  }
  h6 {
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--lightBlue);
    letter-spacing: 2.75px;
  }
  @media screen and (min-width: 1025px) {
    align-items: flex-start;
  }
`;

export default DestinationContent;
