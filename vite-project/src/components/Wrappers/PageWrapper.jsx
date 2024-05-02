import { Wrapper } from "./WrapperStyle";
export default function PageWrapper({ children }) {
  return (
    <Wrapper>
      {/* pop-up start */}
      {children}
      {/* pop-up end*/}
    </Wrapper>
  );
}
