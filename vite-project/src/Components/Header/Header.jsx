import { useState } from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../Pages/appRoutes";
import {
  StyledHeader,
  HeaderBlock,
  HeaderNav,
  HeaderBtnMainNew,
  HeaderUser,
  HeaderLogo,
} from "./HeaderStyle";
import { Container } from "../Common/CommonStyled";
import { UserHook } from "../../hooks/useUserHook";
import { ThemeHook } from "../../hooks/useThemeHook";
import { HeaderPopUser } from "../HeaderPopUser/HeaderPopUser";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = UserHook();

  function openMenu() {
    setIsOpen((previous) => !previous);
  }

  const getUser = JSON.parse(user);
  const { changeTheme } = ThemeHook();

  return (
    <StyledHeader $changeTheme={changeTheme}>
      <Container>
        <HeaderBlock>
          <HeaderLogo>
            <Link to={AppRoutes.HOME}>
              <img
                src={changeTheme ? "/images/logo_dark.png" : "/images/logo.png"}
                alt="logo"
              />
            </Link>
          </HeaderLogo>
          <HeaderNav>
            <HeaderBtnMainNew>
              <Link to={AppRoutes.NEW_CARD}>Создать новую задачу</Link>
            </HeaderBtnMainNew>
            <HeaderUser $changeTheme={changeTheme} onClick={openMenu}>
              {getUser.name}
            </HeaderUser>
            {isOpen && (
              <HeaderPopUser login={getUser.login} name={getUser.name} />
            )}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </StyledHeader>
  );
}
