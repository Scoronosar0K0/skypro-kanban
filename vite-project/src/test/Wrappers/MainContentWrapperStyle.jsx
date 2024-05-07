import styled from "styled-components";
import { BreakPoints } from "../Common/BreakPoints";

const Main = styled.main`
  width: 100%;
  background-color: ${(props) => (props.$changeTheme ? "#151419" : "#eaeef6")};
`;

const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media screen and (max-width: ${BreakPoints.xl}px) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
`;

const MainContentWrapper = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: ${BreakPoints.xl}px) {
    display: block;
  }
`;

export { Main, MainBlock, MainContentWrapper };
