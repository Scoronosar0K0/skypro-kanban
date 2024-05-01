/* eslint-disable react/no-unknown-property */
import "./App.css";
import MainRender from "./components/Main/Main";
import HeaderRender from "./components/Header/Header";
import PopBrowse from "./components/Pop/PopBrowse";
import PopNewCard from "./components/Pop/PopNewCard";
import PopUser from "./components/Pop/PopUser";

function App() {
  return (
    <>
      <div className="wrapper">
        <PopUser />

        <PopNewCard />

        <PopBrowse />

        <HeaderRender />

        <MainRender />
      </div>
      <script src="js/script.js"></script>
    </>
  );
}

export default App;
