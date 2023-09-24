// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json

import axios from "axios";
import { useState } from "react";

export default function App() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState(0);
  const [ok, setOk] = useState(false);
  const [val, setVal] = useState(0);
  function handle() {
    if (amount <= 0) {
      alert("Enter Amount greater than 0");
      return;
    }
    if (from === "") {
      alert("From Currency cannot be empty.");
      return;
    }
    if (to === "") {
      alert("To Currency cannot be empty.");
      return;
    }
    axios
      .get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`
      )
      .then((res) => {
        setVal(amount * res.data[to]);
        setOk(true);
      })
      .catch((err) => {
        alert("Some Error occured :( Please check Entered Entry");
        console.log(err);
      });
  }
  return (
    <>
      <h1 className="text-center mt-10 mx-56 text-red-600 font-bold text-4xl border-8 p-2 bg-slate-300 rounded-xl">
        Welcome to currency Converter
      </h1>
      <div className="border-2 rounded-2xl m-10">
        <div className="flex justify-evenly mt-10 ">
          <div>
            <div>Enter Amount</div>
            <input
              className="border-2 rounded-xl border-black-500 px-4 py-1"
              type="number"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </div>
          <div>
            <div>From</div>
            <input
              className="border-2 rounded-xl border-black-500 px-4 py-1"
              type="text"
              onChange={(e) => {
                setFrom(e.target.value);
              }}
            />
          </div>
          <div>
            <div>To</div>
            <input
              className="border-2 rounded-xl border-black-500 px-4 py-1"
              type="text"
              onChange={(e) => {
                setTo(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="text-center mt-4 flex  mx-16">
          <div>
            <button
              className="border-2 rounded-xl border-black-500 px-16 py-1 mx-40 bg-pink-500"
              onClick={(e) => handle()}
            >
              Convert
            </button>
          </div>
          <div>
            {!ok ? (
              <span className="text-xl font-semibold mx-40">
                For conversion please click on convert button
              </span>
            ) : (
              <span className="text-xl font-semibold mx-40">
                {amount} {from} = {val} {to}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
