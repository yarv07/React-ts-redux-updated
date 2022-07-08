import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRates } from "../store/reducers/ratesSlice";
import { RootStore } from "../store/store";
import { RatesPayload } from "../store/models";
import "../styles/styles.css";

function CurrentExchangeRatesPage() {
  const dispatch = useDispatch<any>();

  const ratesData = useSelector((state: RootStore) => state.rates.data);

  const isObjectEmpty = Object.keys(ratesData).length === 0;
  const ratesDataKeys = !isObjectEmpty ? Object.keys(ratesData?.rates) : [];

  useEffect(() => {
    dispatch(fetchRates("UAH"));
  }, []);

  const [baseCurrency, setBaseCurrency] = useState("UAH");

  const handleOnChange = (e: any) => {
    const value = e.target.value;

    dispatch(fetchRates(value));
    setBaseCurrency(value);
  };

  const selectRatesList = () => {
    return ratesDataKeys?.map((key: string) => (
      <option value={key} key={key}>
        {key}
      </option>
    ));
  };

  const ulRatesList = () =>
    ratesDataKeys?.map((key: string) => (
      <li className="li" key={key}>
        to {key} ={" "}
        {Number(ratesData.rates[key as keyof RatesPayload]).toFixed(2)}
      </li>
    ));

  return (
    <div>
      <div className="containers">
        <select
          className="select"
          value={baseCurrency}
          onChange={handleOnChange}
        >
          {selectRatesList()}
        </select>

        <ul>{ulRatesList()}</ul>
      </div>
    </div>
  );
}

export default CurrentExchangeRatesPage;
