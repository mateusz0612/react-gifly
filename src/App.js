import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GifList from "./components/GifList";
import SearchGif from "./components/SearchGif";
import Error from "./components/Error";
import Home from "./components/Home";

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/trending">
            <GifList />
          </Route>
          <Route exact path="/search">
            <SearchGif />
          </Route>
          <Route exact path="/*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
