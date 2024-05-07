import PageWrapper from "./Components/Wrappers/PageWrapper.jsx";
import PopExit from "./Components/Pages/PopExit.jsx";
import PopNewCard from "./Components/Pops/PopNewCard.jsx";
import PopBrowse from "./Components/Pages/PopBrowse.jsx";
import MainContentWrapper from "./Components/Wrappers/MainContantWrapper.jsx";
import { GlobalStyle } from "./Components/Common/GlobalStyle.js";
import { AppRoutes } from "./Components/Pages/appRoutes.jsx";
import { Routes, Route } from "react-router-dom";
import Error404 from "./Components/Pages/Error.jsx";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.jsx";
import SingInPage from "./Components/Pages/SingIn.jsx";
import SingUpPage from "./Components/Pages/SignUp.jsx";
import EditTaskPage from "./Components/Pages/EditTaskPage.jsx";

function App() {
  return (
    <PageWrapper>
      <GlobalStyle />

      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path={AppRoutes.HOME} element={<MainContentWrapper />}>
            <Route path={AppRoutes.NEW_CARD} element={<PopNewCard />} />
            <Route path={AppRoutes.EXIT} element={<PopExit />} />
            <Route path={AppRoutes.CARD} element={<PopBrowse />} />
            <Route path={AppRoutes.EDIT_CARD} element={<EditTaskPage />} />
          </Route>
        </Route>

        <Route path={AppRoutes.SIGNIN} element={<SingInPage />} />
        <Route path={AppRoutes.SINGUP} element={<SingUpPage />} />
        <Route path={AppRoutes.NOT_FOUND} element={<Error404 />} />
      </Routes>
    </PageWrapper>
  );
}

export default App;
