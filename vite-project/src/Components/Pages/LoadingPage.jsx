import {
  TextErrorAndLoading,
  Image,
} from "../../Components/Common//CommonStyled";
import { ThemeHook } from "../../hooks/useThemeHook";
import { Modal } from "./SighInStyle";

export default function LoadingPage() {
  const { changeTheme } = ThemeHook();

  return (
    <Modal>
      <Image src="/images/zhdun.png" />
      <TextErrorAndLoading $changeTheme={changeTheme}>
        Downloading, wait...
      </TextErrorAndLoading>
    </Modal>
  );
}
