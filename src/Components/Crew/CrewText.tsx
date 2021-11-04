import styled from "styled-components";
import { Heading3, Heading4 as Role } from "../Shared/Heading";

interface Props {
  name: string;
  desc: string;
  role: string;
}

const CrewText: React.FC<Props> = ({ name, desc, role }) => {
  return (
    <Container>
      <Role>{role}</Role>
      <Heading3>{name}</Heading3>
      <p>{desc}</p>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  p {
    max-width: 55ch;
    padding-bottom: 3rem;
  }
  @media screen and (min-width: 1025px) {
    text-align: left;
    align-items: flex-start;
    p {
      padding-bottom: 0;
    }
  }
`;

export default CrewText;
