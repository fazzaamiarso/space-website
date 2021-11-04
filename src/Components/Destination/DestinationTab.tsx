import styled from "styled-components";

interface Props {
  onSelect: (tabidx: number) => void;
  selectedTab: number;
  destinationsList: string[];
}
interface TabItem {
  isActive: boolean;
  key: number;
}

const DestinationTab: React.FC<Props> = ({
  onSelect,
  selectedTab,
  destinationsList,
}) => {
  const selectTab = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLLIElement) {
      onSelect(Number(e.target.dataset.id));
    } else {
      return;
    }
  };

  return (
    <Container>
      {destinationsList.map((dest: string, idx: number) => {
        return (
          <TabItem
            data-id={idx}
            key={idx}
            isActive={idx === selectedTab}
            onClick={selectTab}
          >
            {dest}
          </TabItem>
        );
      })}
    </Container>
  );
};
const Container = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 1.625rem;
  margin-bottom: 1.25rem;
  @media screen and (min-width: 1025px) {
    align-self: flex-start;
  }
`;
const TabItem = styled.li<TabItem>`
  cursor: pointer;
  color: var(--lightBlue);
  text-transform: uppercase;
  letter-spacing: 2.3px;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid
    ${({ isActive }) => (isActive ? "white" : "transparent")};
  &:hover {
    border-bottom: 3px solid rgba(255, 255, 255, 0.5);
  }
`;

export default DestinationTab;
