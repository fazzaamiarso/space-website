import styled from "styled-components";

interface Props {
  onSelect: (tabidx: number) => void;
  selectedTab: number;
}

interface Active {
  tabActive: boolean;
}
const CircleTabs: React.FC<Props> = ({ onSelect, selectedTab }) => {
  const selectTab = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLDivElement) {
      onSelect(Number(e.target.dataset.tabIndex));
    }
  };

  return (
    <Container>
      <Circle
        data-tab-index={0}
        tabActive={selectedTab === 0}
        onClick={selectTab}
      />
      <Circle
        data-tab-index={1}
        tabActive={selectedTab === 1}
        onClick={selectTab}
      />
      <Circle
        data-tab-index={2}
        tabActive={selectedTab === 2}
        onClick={selectTab}
      />
      <Circle
        data-tab-index={3}
        tabActive={selectedTab === 3}
        onClick={selectTab}
      />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100px;
  @media screen and (min-width: 1025px) {
    width: 150px;
  }
`;
const Circle = styled.div<Active>`
  cursor: pointer;
  aspect-ratio: 1;
  width: 10px;
  border-radius: 50%;
  background-color: ${({ tabActive }) =>
    tabActive ? "white" : "rgba(255, 255, 255, 0.17)"};

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  @media screen and (min-width: 1025px) {
    width: 15px;
  }
`;

export default CircleTabs;
