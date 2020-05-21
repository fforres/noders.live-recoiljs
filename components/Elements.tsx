import styled from "styled-components";

export const Page = styled.div`
  color: ${({ theme }) => theme.colors.white};
  background-image: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primary} 25%,
    ${({ theme }) => theme.colors.secondary} 75%
  );
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  padding: ${({ theme }) => theme.spacing.px8};
  overflow: auto;
`;

export const Box = styled.div<any>`
  /* border-style: solid; */
  border-color: ${({ theme }) => theme.colors.silver};
  border-width: ${({ theme }) => theme.spacing.px1};
  margin: ${({ theme }) => theme.spacing.px1};
  padding: ${({ theme }) => theme.spacing.px4};
`;
