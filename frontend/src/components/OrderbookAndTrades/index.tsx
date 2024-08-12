'use client';

import { useState } from "react";
import { ViewSelector } from "@/components/ViewSelector";
import { OrderbookTable } from "./OrderbookPanel/OrderbookTable";

const views = ['Orderbook', 'Trades'];

export const OrderbookAndTrades: React.FC = () => {

  const [view, setView] = useState<string>(views[0]);

  return (
    <div className="flex flex-col w-1/2 h-full bg-zinc-950 p-2 rounded-md gap-2">
      <ViewSelector views={['Orderbook', 'Trades']} setView={setView} selectedView={view} />
      <div className="flex h-full w-full border-2 border-zinc-900 p-2 rounded-md">
        {
          view === 'Orderbook' &&
          <OrderbookTable />
        }
        {
          view === 'Trades' &&
          "Trades"
        }
      </div>
    </div>
  )
}