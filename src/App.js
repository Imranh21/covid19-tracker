import CountryList from "./components/countries/CountryList";
import Global from "./components/global/Global";
import Header from "./components/header/Header";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Global />
      <CountryList />
    </div>
  );
}
