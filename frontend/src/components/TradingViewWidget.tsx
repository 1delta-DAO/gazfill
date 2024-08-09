'use client';

import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
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
          "support_host": "https://www.tradingview.com"
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
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }} />
  );
}

export default memo(TradingViewWidget);