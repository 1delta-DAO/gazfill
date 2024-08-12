'use client';

import { useState } from "react";
import { ViewSelector } from "@/components/ViewSelector";
import { OrderbookPanel } from "./OrderbookPanel";
import { TradesPanel } from "./TradesPanel";

export const OrderbookAndTrades: React.FC = () => {
  
  const views = ['Orderbook', 'Trades'];
  const [view, setView] = useState<string>(views[0]);

  return (
    <div className="flex flex-col w-1/2 h-full bg-zinc-950 p-4 rounded-md gap-4">
      <ViewSelector views={views} setView={setView} selectedView={view} />
      {
        view === 'Orderbook' &&
        <OrderbookPanel />
      }
      {
        view === 'Trades' &&
        <TradesPanel />
      }
    </div>
  )
}