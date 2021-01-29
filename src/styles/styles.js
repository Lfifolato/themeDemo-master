import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: ${(props) => props.theme.color};
`;

export const AppLink = styled.a`
  color: ${(props) => props.theme.linkColor};
`;
