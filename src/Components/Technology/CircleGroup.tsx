import styled, { css } from "styled-components";

interface Props {
  onSelect: (tabidx: number) => void;
  selectedTab: number;
}

interface Active {
  tabActive: boolean;
}
const CircleGroup: React.FC<Props> = ({ onSelect, selectedTab }) => {
  const selectHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLDivElement) {
      onSelect(Number(e.target.dataset.id));
    }
  };

  return (
    <Container>
      <TextCircle
        data-id={0}
        tabActive={selectedTab === 0}
        onClick={selectHandler}
      >
        1
      </TextCircle>
      <TextCircle
        data-id={1}
        tabActive={selectedTab === 1}
        onClick={selectHandler}
      >
        2
      </TextCircle>
      <TextCircle
        data-id={2}
        tabActive={selectedTab === 2}
        onClick={selectHandler}
      >
        3
      </TextCircle>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  padding-top: 2.0625rem;
  padding-bottom: 1.0625rem;
  @media screen and (min-width: 769px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const TextCircle = styled.div<Active>`
  cursor: pointer;
  font-family: var(--bellefair);
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  border-radius: 50%;
  line-height: 0;

  background-color: transparent;
  color: white;
  border: 1px solid white;
  &:hover {
    background-color: rgba(255, 255, 255, 0.17);
  }

  ${({ tabActive }) =>
    tabActive &&
    css`
      background-color: white;
      color: black;
    `}
  @media screen and (min-width: 768px) {
    width: 60px;
    font-size: 1.5rem;
  }
  @media screen and (min-width: 1025px) {
    width: 80px;
    font-size: 2rem;
  }
`;

export default CircleGroup;
