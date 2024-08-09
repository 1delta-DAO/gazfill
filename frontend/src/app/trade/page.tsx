

export default function Trade() {

  return (
    <>
      <div className="flex w-full h-[700px] bg-zinc-800 gap-1 p-1 rounded-lg">
        {/* LEFT SIDE */}
        <div className="flex flex-col w-7/12 gap-1">
          {/* CHART INFO */}
          <div className="flex w-full h-[50px] bg-zinc-950 p-2 rounded-md">
            Chart Info
          </div>
          {/* CHART */}
          <div className="flex w-full h-[500px] bg-zinc-950 p-2 rounded-md">
            Chart
          </div>
          {/* TABLE */}
          <div className="flex h-[150px] bg-zinc-950 p-2 rounded-md">
            Table
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex w-5/12 gap-1">
          {/* ORDERBOOK / TRADES */}
          <div className="flex w-1/2 h-full bg-zinc-950 p-2 rounded-md">
            Orderbook
          </div>
          {/* TRADE PANEL */}
          <div className="flex w-1/2 h-full bg-zinc-950 p-2 rounded-md">
            Trade Panel
          </div>
        </div>
      </div>
    </>
  )
}