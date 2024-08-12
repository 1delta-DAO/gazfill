'use client';

import { useState } from "react";
import { ViewSelector } from "../ViewSelector";

export const TradePanel = () => {
  
  const views = ['Buy', 'Sell'];
  const [view, setView] = useState<string>(views[0]);

  return (
    <div className="flex flex-col w-1/2 h-full bg-zinc-950 p-2 rounded-md gap-2">
      <ViewSelector views={views} setView={setView} selectedView={view} />
    </div>
  )
}