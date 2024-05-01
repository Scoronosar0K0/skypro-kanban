/* eslint-disable no-unused-vars */
import Column from "../Column/Column";
import Card from "../Cards/Card";
function MainRender() {
  return (
    <>
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <div className="main__column column">
              <Column ColumnTitle={"Без статуса"} />
              <div className="cards">
                <Card
                  CardTheme={"Web Design"}
                  CardTitle={"Название задачи"}
                  CardDate={"30.10.23"}
                  CardColor={"_orange"}
                />

                <Card
                  CardTheme={"Research"}
                  CardTitle={"Название задачи"}
                  CardDate={"30.10.23"}
                  CardColor={"_green"}
                ></Card>

                <Card
                  CardTheme={"Web Design"}
                  CardTitle={"Название задачи"}
                  CardDate={"30.10.23"}
                  CardColor={"_orange"}
                />

                <Card
                  CardTheme={"Copywriting"}
                  CardTitle={"Название задачи"}
                  CardDate={"30.10.23"}
                  CardColor={"_purple"}
                />

                <Card
                  CardTheme={"Web Design"}
                  CardTitle={"Название задачи"}
                  CardDate={"30.10.23"}
                  CardColor={"_orange"}
                />
              </div>
            </div>
            <div className="main__column">
              <Column ColumnTitle={"Нужно сделать"} />
              <Card
                CardTheme={"Research"}
                CardTitle={"Название задачи"}
                CardDate={"30.10.23"}
                CardColor={"_green"}
              ></Card>
            </div>
            <div className="main__column">
              <Column ColumnTitle={"В работе"} />
              <div className="cards">
                <Card
                  CardTheme={"Research"}
                  CardTitle={"Название задачи"}
                  CardDate={"30.10.23"}
                  CardColor={"_green"}
                />
                <Card
                  CardTheme={"Copywriting"}
                  CardTitle={"Название задачи"}
                  CardDate={"30.10.23"}
                  CardColor={"_purple"}
                />
                <Card
                  CardTheme={"Web Design"}
                  CardTitle={"Название задачи"}
                  CardDate={"30.10.23"}
                  CardColor={"_orange"}
                />
              </div>
            </div>
            <div className="main__column">
              <Column ColumnTitle={"Тестирование"} />
              <div className="cards">
                <Card
                  CardTheme={"Research"}
                  CardTitle={"Название задачи"}
                  CardDate={"30.10.23"}
                  CardColor={"_green"}
                />
              </div>
            </div>
            <div className="main__column">
              <Column ColumnTitle={"Готово"} />
              <div className="cards">
                <Card
                  CardTheme={"Research"}
                  CardTitle={"Название задачи"}
                  CardDate={"30.10.23"}
                  CardColor={"_green"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainRender;
