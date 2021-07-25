import Home from "./Components/Home";
import styled from "styled-components";
import NewChat from "./Components/NewChat";

const Main = styled.div`
  max-width: 550px;
  min-width: 480px;
  width: 100%;
  margin: 0 auto;
`;

function App() {
  return (
    <Main>
      <Home />
      <NewChat />
    </Main>
  );
}

export default App;
