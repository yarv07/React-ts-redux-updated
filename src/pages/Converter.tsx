import { useState } from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../store/store";
import { useDispatch } from "react-redux";
import { fetchConverterRates } from "../store/reducers/converterSlice";
import "../styles/styles.css";

function ConverterPage() {
  const dispatch = useDispatch<any>();

  const dataState = useSelector((state: RootStore) => state.converter);

  const [amount, setAmount] = useState<number>(1);
  const [currencyFrom, setCurrencyFrom] = useState<string>("");
  const [currencyTo, setCurrencyTo] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const slicedValue = event.target.value.split(" ");

    setAmount(parseInt(slicedValue[0]));
    setCurrencyFrom(slicedValue[1]);
    setCurrencyTo(slicedValue[slicedValue.length - 1]);
  };

  const handleSubmit = async () => {
    const payload = {
      amount,
      currencyFrom,
      currencyTo,
    };

    dispatch(fetchConverterRates(payload));
  };

  return (
    <>
      <div className="containers">
        <input className="input" type="text" onChange={handleChange} />

        <button className="btn" onClick={handleSubmit}>
          Result
        </button>

        <div className="result-text">
          {Number(dataState.converter?.result || 0).toFixed(2)}
        </div>
      </div>
    </>
  );
}

export default ConverterPage;
