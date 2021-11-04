import styled from "styled-components";

export const Heading3 = styled.h3`
  text-transform: uppercase;
  color: white;
  font-family: var(--fontHeading);
  font-weight: 400;
  font-size: clamp(
    1.5rem,
    calc(1.5rem + ((1vw - 0.234375rem) * 3.0047)),
    3.5rem
  );
  padding-top: 0.5rem;
  padding-bottom: 1rem;
`;
export const Heading4 = styled.h4`
  text-transform: uppercase;
  color: var(--lightBlue);
  font-family: var(--fontHeading);
  font-weight: 400;
  font-size: clamp(1rem, calc(1rem + ((1vw - 0.234375rem) * 1.5023)), 2rem);
`;
