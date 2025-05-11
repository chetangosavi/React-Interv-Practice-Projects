/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import tenureDuration from "./utils/constants.js";

const EmiMain = () => {
  const [cost, setCost] = useState(0);
  const [intrest, setIntrest] = useState(10);
  const [fee, setFee] = useState(1);
  const [downpayment, setDownpayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);

  function calculateEmi(dp) {
    //Formula - [P*R*(1+R)^N]/[(1+R)^N-1]
    if (!cost) return;

    const loanAmount = cost - dp; // P
    const rateOfIntrest = intrest / 100; // R
    const loanDuration = tenure / 12; // N

    const finalEmi =
      (loanAmount * rateOfIntrest * (1 + rateOfIntrest) ** loanDuration) /
      ((1 + rateOfIntrest) ** loanDuration - 1);

    return Number(finalEmi / 12).toFixed(0);
  }

  function calculateDP(emi) {
    if (!cost) return;
    const downpaymentPercentage = 100 - (emi / calculateEmi(0)) * 100;
    return Number((downpaymentPercentage / 100) * cost).toFixed(0);
  }

  useEffect(() => {
    if (!(cost > 0)) {
      setDownpayment(0);
      setEmi(0);
      return;
    }

    const updatedEmi = calculateEmi(downpayment);
    setEmi(updatedEmi);
  }, [tenure, cost, intrest, downpayment]);

  function updateEmi(e) {
    if (!cost) return;
    const dp = Number(e.target.value);
    setDownpayment(dp.toFixed(0));

    // calculate emi and update it
    const updatedEmi = calculateEmi(dp);
    setEmi(updatedEmi);
  }

  function updateDownpayment(e) {
    if (!cost) return;
    const emiSliderAmount = Number(e.target.value);
    setEmi(emiSliderAmount.toFixed(0));

    // calculate downpayment and update
    const dp = calculateDP(emiSliderAmount);
    setDownpayment(dp);
  }

  return (
    <div className="main-conatiner mt-5">
      <div className=" w-1/2 m-auto calci-container bg-slate-300 p-10 ">
        <span className="font-bold text-center text-4xl">EMI Calculator</span>
        <p className="">Calculate Equated Monthly Installment (EMI) for Loan</p>

        <div className="mt-6">
          <span className="font-semibold ">Total Cost of assets</span>
          <input
            className="w-full p-2 rounded-lg bg-gray-200 mt-2 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            type="number"
            name="totalAmount"
            id="totalAmount"
            value={cost}
            onChange={(e) => setCost(Number(e.target.value))}
            placeholder="Total Cost of Assets"
          />
        </div>
        <div className="mt-4">
          <span className="font-semibold">Intrest Rate (in %)</span>
          <input
            className="w-full p-2 rounded-lg bg-gray-200 mt-2 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            type="number"
            name="intrest"
            id="intrest"
            value={intrest}
            onChange={(e) => setIntrest(e.target.value)}
            placeholder="Intrest in %"
          />
        </div>

        <div className="mt-4 flex flex-col">
          <span className="font-semibold">Processing Fees (in %)</span>
          <span className="text-sm">
            Total Processing Fees - {(cost * (fee / 100)).toFixed(0)}
          </span>
          <input
            className="w-full p-2 rounded-lg bg-gray-200 mt-2 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            type="number"
            name="fees"
            id="fees"
            value={fee}
            onChange={(e) => setFee(e.target.value)}
            placeholder="Processing Fees"
          />
        </div>

        <div className="mt-4 flex flex-col ">
          <span className="font-semibold">Downpayment</span>
          <span className="text-sm">
            Total Downpayment -{" "}
            {(Number(downpayment) + cost * (fee / 100)).toFixed(0)}
          </span>
          <input
            name="downpayment-slider"
            className="mt-2"
            type="range"
            min={0}
            max={cost}
            value={downpayment}
            onChange={updateEmi}
          />
          <div className="flex justify-between">
            <label>0%</label>
            <b>{downpayment}</b>
            <label>100%</label>
          </div>
        </div>

        <div className="mt-4 flex flex-col ">
          <span className="font-semibold">Loan per Month</span>
          <span className="text-sm">
            Total EMI - {(emi * tenure).toFixed(0)}
          </span>
          <input
            className="mt-2"
            type="range"
            min={calculateEmi(cost)}
            max={calculateEmi(0)}
            value={emi}
            onChange={updateDownpayment}
          />

          <div className="flex justify-between">
            <label>{calculateEmi(cost)}</label>
            <b>{emi}</b>
            <label>{calculateEmi(0)}</label>
          </div>
        </div>

        <div className="mt-4 flex flex-col ">
          <span className="font-semibold">Tenure in (Months)</span>
          <div className="flex justify-between mt-2">
            {tenureDuration &&
              tenureDuration.map((elm, index) => {
                return (
                  <button
                    onClick={() => setTenure(elm)}
                    className={`${
                      elm === tenure ? "bg-green-400" : ""
                    } bg-blue-400 px-6 py-2 text-white rounded-lg font-semibold`}
                    key={index}
                  >
                    {elm}
                  </button>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmiMain;
