import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Trending from "./components/Trending";
import SearchGif from "./components/SearchGif";
import Error from "./components/Error";
import Home from "./components/Home";
import GifView from "./components/GifView";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/trending">
          <Trending />
        </Route>
        <Route exact path="/search">
          <SearchGif />
        </Route>
        <Route path="/gifs/:id" children={<GifView />}></Route>
        <Route path="/*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
