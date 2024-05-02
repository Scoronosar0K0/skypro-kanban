import Column from "../Columns/MainColumn.jsx";
import { statusList } from "../../../data.js";
import { Container } from "../Common/CommonStyled.js";
import { Main, MainBlock, MainContent } from "./MainContentWrapperStyle.jsx";

export default function MainContentWrapper({ cards }) {
  return (
    <Main>
      <Container>
        <MainBlock>
          <MainContent>
            {statusList.map((status) => (
              <Column
                key={status}
                title={status}
                cardList={cards.filter((card) => card.status === status)}
              />
            ))}
          </MainContent>
        </MainBlock>
      </Container>
    </Main>
  );
}
