import ReactDOM from "react-dom/client";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConverterPage from "./pages/Converter";
import CurrentExchangeRatesPage from "./pages/CurrentExchangeRates";
import Header from "./components/Header";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ConverterPage />}></Route>
        <Route path="/rates" element={<CurrentExchangeRatesPage />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
