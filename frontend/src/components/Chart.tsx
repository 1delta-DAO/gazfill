'use client';

import React, { useEffect, useRef, memo } from 'react';

function Chart() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": false,
          "symbol": "BINANCE:BTCUSDC",
          "interval": "240",
          "timezone": "Europe/Rome",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "backgroundColor": "#09090b",
          "gridColor": "#09090b",
          "hide_top_toolbar": true,
          "allow_symbol_change": false,
          "calendar": false,
          "support_host": "https://www.tradingview.com",
          "width": "101%"
        }`;
      if (container.current) {
        container.current.appendChild(script);
      }
      return () => {
        if (container.current) {
          container.current.removeChild(script);
        }
      }
    },
    []
  );

  return (
    <div className="flex w-full h-[500px] bg-zinc-950 rounded-md overflow-hidden">
      <div className='h-[102%] w-full relative -top-[4px] -left-[4px]'>
        <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }} />
      </div>
    </div>
  );
}

export default memo(Chart);