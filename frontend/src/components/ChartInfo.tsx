

export const ChartInfo = () => {

  return (
    <div className="flex w-full bg-zinc-950 px-4 py-2 rounded-md items-center justify-between">
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
  )
}