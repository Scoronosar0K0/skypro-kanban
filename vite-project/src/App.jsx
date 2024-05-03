import "./App.css";
import PageWrapper from "./Components/Wrappers/PageWrapper.jsx";
import PopExit from "./Components/Pages/PopExit.jsx";
import PopNewCard from "./Components/Pops/PopNewCard.jsx";
import PopBrowse from "./Components/Pages/PopBrowse.jsx";
import MainContentWrapper from "./Components/Wrappers/MainContantWrapper.jsx";
import Header from "./Components/Header/Header.jsx";
import { useState, useEffect } from "react";
import { cardList } from "../data.js";
import { GlobalStyle } from "./Components/Common/GlobalStyle.js";
import { AppRoutes } from "./Components/Pages/appRoutes.jsx";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Error404 } from "./Components/Pages/Error.jsx";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.jsx";
import SingInPage from "./Components/Pages/SingIn.jsx";
import SingUpPage from "./Components/Pages/SignUp.jsx";
import { LoadingPage } from "./Components/Pages/Load.jsx";

function App() {
  const navigate = useNavigate();
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  function addCard() {
    const newCard = {
      id: cards.length + 1,
      theme: "Web Design",
      title: "Название задачи",
      date: "30.10.23",
      status: "Без статуса",
      colorTheme: "_orange",
    };
    setCards([...cards, newCard]);
  }
  function getIsAuth() {
    localStorage.setItem("token", "12345");
    setIsAuth(localStorage.getItem("token"));
    navigate(AppRoutes.HOME);
  }

  function exit() {
    localStorage.removeItem("token");
    setIsAuth(false);
  }

  return (
    <PageWrapper>
      <GlobalStyle />
      <PopNewCard />
      <Header addCard={addCard} />
      {isLoading ? (
        <LoadingPage />
      ) : (
        <Routes>
          <Route
            path={AppRoutes.HOME}
            element={
              <PrivateRoute isAuth={isAuth}>
                <MainContentWrapper cards={cards} />
              </PrivateRoute>
            }
          >
            <Route
              path={AppRoutes.EXIT}
              element={
                <PrivateRoute isAuth={isAuth}>
                  <PopExit exit={exit} />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoutes.CARD}
              element={
                <PrivateRoute isAuth={isAuth}>
                  <PopBrowse />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path={AppRoutes.SIGNIN}
            element={<SingInPage getIsAuth={getIsAuth} />}
          />
          <Route path={AppRoutes.SINGUP} element={<SingUpPage />} />

          <Route path="*" element={<Error404 />} />
        </Routes>
      )}
    </PageWrapper>
  );
}

export default App;
