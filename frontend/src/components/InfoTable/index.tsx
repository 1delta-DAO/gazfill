'use client';

import { useState } from "react";
import { formatDollarAmount } from "../utils";
import { ViewSelector } from "../ViewSelector";

interface Order {
  date: string;
  type: string;
  amount: number;
  filled: number;
  price: number;
}

const OrderRow: React.FC<Order> = ({ date, type, amount, filled, price }) => {

  return (
    <tr>
      <td className="w-1/6">{date}</td>
      <td className="w-1/6">
        <span className={`${type === 'Buy' ? 'text-green-500' : 'text-red-500'}`}>
          {type}
        </span>
      </td>
      <td className="w-1/6">{amount} BTC</td>
      <td className="w-1/6">{filled} BTC</td>
      <td className="w-1/6">{formatDollarAmount(price)}</td>
      <td className="text-right w-1/6">
        <button className="btn btn-xs btn-base-100">Cancel</button>
      </td>
    </tr>
  )
}

export const InfoTable = () => {

  const tabs = [
    "Orders",
    "Assets",
    "History"
  ]

  const [tab, setTab] = useState<string>(tabs[0]);

  return (
    <div className="flex flex-col bg-zinc-950 p-4 rounded-md gap-2">
      <ViewSelector views={tabs} selectedView={tab} setView={setTab} />
      {tab === "Orders" ? <div className="overflow-x-auto w-full">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Filled</th>
              <th>Price</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <OrderRow date="2021-10-01" type="Buy" amount={0.1} filled={0.1} price={60000} />
            <OrderRow date="2021-10-02" type="Sell" amount={0.1} filled={0.1} price={61000} />
            <OrderRow date="2021-10-03" type="Buy" amount={0.1} filled={0.1} price={62000} />
            <OrderRow date="2021-10-04" type="Sell" amount={0.1} filled={0.1} price={63000} />
          </tbody>
        </table>
      </div> : "No Data"}
    </div>
  )
}