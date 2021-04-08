import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GifList from "./components/GifList";
import SearchGif from "./components/SearchGif";

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/trending">
            <GifList />
          </Route>
          <Route exact path="/search">
            <SearchGif />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
