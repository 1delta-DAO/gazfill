
interface TradeRowProp {
  price: string;
  amount: string;
  time: string;
}

const TradeRow: React.FC<TradeRowProp> = ({ price, amount, time }) => {
  return (
    <tr>
      <td className="w-[33%]">{price}</td>
      <td className="w-[33%]">{amount}</td>
      <td className="text-right w-[33%]">{time}</td>
    </tr>
  )
}

export const TradesPanel = () => {

  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-xs ">
        <thead>
          <tr>
            <th>Price</th>
            <th>Amount</th>
            <th className="text-right">Time</th>
          </tr>
        </thead>
        <tbody>
          <TradeRow price="60,350.68" amount="0.0001" time="12:00:00" />
          <TradeRow price="60,350.68" amount="0.0001" time="12:00:00" />
          <TradeRow price="60,350.68" amount="0.0001" time="12:00:00" />
          <TradeRow price="60,350.68" amount="0.0001" time="12:00:00" />
          <TradeRow price="60,350.68" amount="0.0001" time="12:00:00" />
        </tbody>
      </table>
    </div>
  )
}