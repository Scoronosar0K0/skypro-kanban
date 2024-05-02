import styled from "styled-components";
import { themeStyles } from "../Common/ThemeStyle";
import { ThemeP } from "../Theme/ThemeP";

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $themeColor }) =>
    themeStyles[$themeColor]?.backgroundColor || "#b4fdd1"};
  ${ThemeP} {
    color: ${({ $themeColor }) => themeStyles[$themeColor]?.color || "#06b16e"};
  }
`;
