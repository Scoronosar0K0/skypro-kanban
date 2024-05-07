import { TextErrorAndLoading } from "../../Components/Common/CommonStyled";
import { Modal } from "./SighInStyle";

export default function LoadingCardsError() {
  return (
    <Modal>
      <TextErrorAndLoading>
        Не удалось загрузить данные, попробуйте позже
      </TextErrorAndLoading>
    </Modal>
  );
}
