import styled from "styled-components";

interface Props {
  pageNum: string;
  title: string;
}

const PageNav: React.FC<Props> = ({ pageNum, title }) => {
  return (
    <Title>
      <span>{pageNum}</span>
      {title}
    </Title>
  );
};
const Title = styled.div`
  color: white;
  font-size: clamp(1rem, calc(1rem + ((1vw - 0.234375rem) * 1.1268)), 1.75rem);
  letter-spacing: 2.7px;
  span {
    margin-right: 1rem;
    color: rgba(255, 255, 255, 0.25);
  }
  @media screen and (min-width: 768px) {
    align-self: flex-start;
  }
`;

export default PageNav;
