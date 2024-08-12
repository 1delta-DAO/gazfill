'use client';

import { useState } from "react";
import { ViewSelector } from "./ViewSelector"

const views = ['Orderbook', 'Trades'];

export const OrderbookPanel: React.FC = () => {

  const [view, setView] = useState<string>(views[0]);

  return (
    <div className="flex flex-col w-1/2 h-full bg-zinc-950 p-2 rounded-md">
      <ViewSelector views={['Orderbook', 'Trades']} setView={setView} selectedView={view} />
    </div>
  )
}