'use client';

import { useEffect, useState } from "react";
import { ViewSelector } from "../ViewSelector";
import { transition } from "../utils";

export const TradePanel = () => {
  
  const views = ['Buy', 'Sell'];
  const [view, setView] = useState<string>(views[0]);
  const isBuy = view === 'Buy';

  const orderTypes = ['Limit', 'Market'];
  const [orderType, setOrderType] = useState<string>(orderTypes[0]);
  const isLimit = orderType === 'Limit';

  const [orderPrice, setOrderPrice] = useState<number>(0.0);
  const [btcSize, setBtcSize] = useState<number>(0.0);
  const [usdcSize, setUsdcSize] = useState<number>(0.0);
  const [sliderSize, setSliderSize] = useState<number>(0);

  const available = view === 'Buy' ? 7531 : 0.1247721

  const handleMax = () => {
    if (isBuy) {
      setUsdcSize(available);
    } else {
      setBtcSize(available);
    }
  }

  const BTC_PRICE = 60350;

  useEffect(() => {
    const newValue = btcSize * BTC_PRICE;
    if (newValue !== usdcSize) {
      setUsdcSize(newValue);
    }
  }, [btcSize]);

  useEffect(() => {
    const newValue = usdcSize / BTC_PRICE;
    if (newValue !== btcSize) {
      setBtcSize(newValue);
    }
  }, [usdcSize]);

  // on slider change, update size
  useEffect(() => {
    const newValue = sliderSize * available * 0.01;
    if (isBuy) {
      setUsdcSize(newValue);
    } else {
      setBtcSize(newValue);
    }
  }, [sliderSize]);

  return (
    <div className="flex flex-col w-1/2 h-full bg-zinc-950 p-4 rounded-md gap-4">
      <ViewSelector views={views} setView={setView} selectedView={view} />
      <div className="flex flex-col w-full h-full gap-4">
        {/* TYPE / PRICE */}
        <div className="flex gap-2">
          <div className="flex flex-col w-full gap-1">
            <span className="text-xs">Type</span>
            <select
              className={`select select-bordered w-full max-w-xs bg-zinc-950 border-2 border-zinc-900 outline-none focus:outline-none ${transition}`}
              onChange={(e) => setOrderType(e.target.value)}
            >
              {
                orderTypes.map((type, index) => {
                  return (
                    <option key={index}>{type}</option>
                  )
                })
              }
            </select>
          </div>
          <div className="flex flex-col w-full gap-1">
            <span className="text-xs">Price</span>
            <input
              type="number"
              placeholder="0.00"
              className={`input input-bordered w-full max-w-xs bg-zinc-950 border-2 border-zinc-900 outline-none focus:outline-none ${transition}`}
              onChange={(e) => setOrderPrice(parseFloat(e.target.value))}
              value={isLimit ? orderPrice || "" : BTC_PRICE}
              disabled={!isLimit}
            />
          </div>
        </div>
        {/* SIZE */}
        <div className="flex flex-col gap-1 w-full">
          <div className="flex w-full justify-between">
            <span className="text-xs">Size</span>
            <button
              className="btn btn-xs h-auto min-h-0"
              onClick={handleMax}
            >
              MAX
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <label className={`input input-bordered flex items-center gap-2 w-full bg-zinc-950 border-2 border-zinc-900 outline-none focus:outline-none ${transition}`}>
              <input type="number" className="w-full" placeholder="0.00" value={btcSize || ""} onChange={(e) => setBtcSize(parseFloat(e.target.value))} />
              <div className="flex w-[40%] justify-end">
                <span className="badge">BTC</span>
              </div>
            </label>
            <label className={`input input-bordered flex items-center gap-2 w-full bg-zinc-950 border-2 border-zinc-900 outline-none focus:outline-none ${transition}`}>
              <input type="number" className="w-full" placeholder="0.00" value={usdcSize || ""} onChange={(e) => setUsdcSize(parseFloat(e.target.value))} />
              <div className="flex w-[40%] justify-end">
                <span className="badge">USDC</span>
              </div>
            </label>
          </div>
        </div>
        {/* AVAILABLE */}
        <div className="flex w-full justify-between text-xs">
          <span className="">Available</span>
          <span>{available} {isBuy ? "USDC" : "BTC"}</span>
        </div>
        {/* SLIDER */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderSize}
          onChange={(e) => setSliderSize(parseFloat(e.target.value))}
          className="range range-xs"
        />

        {/* ORDER SUMMARY */}

        {/* BUY/SELL BUTTON */}
        <button className={`btn w-full ${isBuy ? "btn-success" : "btn-error"}`}>
          {isBuy ? "Buy" : "Sell"}
        </button>
      </div>
    </div>
  )
}