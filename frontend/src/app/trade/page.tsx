import Chart from "@/components/Chart";
import { ChartInfo } from "@/components/ChartInfo";
import { InfoTable } from "@/components/InfoTable";
import { OrderbookAndTrades } from "@/components/OrderbookAndTrades";
import { TradePanel } from "@/components/TradePanel";

export default function Trade() {

  return (
    <div className="flex w-full bg-zinc-800 gap-2 rounded-lg">
      <div className="flex flex-col w-7/12 gap-2">
        <ChartInfo />
        <Chart />
        <InfoTable />         
      </div>
      <div className="flex w-5/12 gap-2">
        <OrderbookAndTrades />
        <TradePanel />
      </div>
    </div>
  )
}