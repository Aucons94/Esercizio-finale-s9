import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import TvShows from "./components/TvShows";
import FilmsRow from "./components/FilmsRow";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <MyNav />
      <TvShows />
      <FilmsRow query="star%20wars" />
      <FilmsRow query="harry%20potter" />
      <FilmsRow query="marvel" />
      <Footer />
    </>
  );
}

export default App;
