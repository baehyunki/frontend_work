import "./App.css";
import styled from "styled-components";
const Flex = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
`;
const ChildBox = styled.div`
  flex: 1 1 100px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.bg ? props.bg : "var(--oc-blue-0)")};
  border-radius: 1rem;
`;
function App() {
  return (
    <>
      <h1>Flex</h1>
      <ul>
        <li>
          주축(X 축)을 기반으로 자식 요소들을 배치한다. (가로로 나열한다.){" "}
        </li>
        <li>
          flex는 자식요소(1차요소)들만 정렬한다. 더 깊이 들어간 2차, 3차 자손
          요소들은 정렬에 영향을 주지 않는다.
        </li>
      </ul>
      <Flex>
        <ChildBox bg={"var(--oc-blue-0)"}>child</ChildBox>
        <ChildBox bg={"var(--oc-blue-1)"}>child</ChildBox>
        <ChildBox bg={"var(--oc-blue-2)"}>child</ChildBox>
        <ChildBox bg={"var(--oc-blue-3)"}>child</ChildBox>
      </Flex>
    </>
  );
}

export default App;
