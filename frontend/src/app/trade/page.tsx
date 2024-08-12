import Chart from "@/components/Chart";
import { OrderbookAndTrades } from "@/components/OrderbookAndTrades";
import { TradePanel } from "@/components/TradePanel";

export default function Trade() {

  return (
    <>
      <div className="flex w-full h-[700px] bg-zinc-900 gap-2 rounded-lg">
        {/* LEFT SIDE */}
        <div className="flex flex-col w-7/12 gap-2">
          {/* CHART INFO */}
          <div className="flex w-full h-[50px] bg-zinc-950 px-4 py-2 rounded-md items-center justify-between">
            <div className="flex gap-2">
              <div className="flex">
                <div className="avatar">
                  <div className="w-6 rounded-xl">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" />
                  </div>
                </div>
                <div className="avatar -ml-2">
                  <div className="w-6 rounded-xl">
                    <img src="https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=032" />
                  </div>
                </div>
              </div>
              <span>BTC-USDC</span>
            </div>
            <div className="flex gap-4">
              <span>$60,350.68</span>
            </div>
          </div>
          <Chart />
          {/* TABLE */}
          <div className="flex h-[150px] bg-zinc-950 px-4 py-2 rounded-md">
            Table
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex w-5/12 gap-2">
          <OrderbookAndTrades />
          <TradePanel />
        </div>
      </div>
    </>
  )
}