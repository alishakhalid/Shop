import "./App.css";
import Navigate from "./Navigate";
import LoginContextProvider from "./Context/LoginContext";
import SearchProvider from "./Context/SeacrhContext";

function App() {
  return (
    <LoginContextProvider>
      <SearchProvider>
        <Navigate />
      </SearchProvider>
    </LoginContextProvider>
  );
}

export default App;
