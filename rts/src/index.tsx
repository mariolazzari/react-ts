import ReactDOM from "react-dom";
import GusetList from "./state/GusetList";
import UserSearch from "./state/UserSearch";

const App = () => {
  return (
    <div>
      <GusetList />
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
