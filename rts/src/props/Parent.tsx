import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log("clicked")}>
      <h2>clhild</h2>
    </ChildAsFC>
  );
};

export default Parent;
