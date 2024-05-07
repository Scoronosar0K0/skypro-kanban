import {
  Image,
  TextErrorAndLoading,
} from "../../Components/Common/CommonStyled";
import { ThemeHook } from "../../hooks/useThemeHook";

import { Modal } from "./SighInStyle";

export default function LoadingCards() {
  const { changeTheme } = ThemeHook();
  return (
    <Modal>
      <Image src="/images/zhdun.png" />
      <TextErrorAndLoading $changeTheme={changeTheme}>
        Downloading tasks, wait...
      </TextErrorAndLoading>
    </Modal>
  );
}
