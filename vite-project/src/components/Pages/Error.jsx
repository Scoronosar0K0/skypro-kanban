import { Link } from "react-router-dom";
import { AppRoutes } from "./appRoutes";
import { Modal } from "./SighInStyle";

export function Error404() {
  return (
    <Modal>
      Упс... Похоже запрашиваемой страницы не существует, пожалуйста вернитесь
      на <Link to={AppRoutes.HOME}>Главную страницу</Link>
    </Modal>
  );
}
