interface OrderRowProps {
  amount: string;
  price: string;
  total: string;
  isSell: boolean;
}

const OrderRow: React.FC<OrderRowProps> = ({ amount, price, total, isSell }) => {

  const priceStyle = price !== "-" ? (isSell ? "text-red-500" : "text-green-500") : "";

  return (
    <tr>
      <td className="w-[33%]">{amount}</td>
      <td className={`w-[33%] ${priceStyle}`}>{price}</td>
      <td className="w-[33%] text-right">{total}</td>
    </tr>
  )
}

export const OrderbookTable = () => {

  return (
    <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th>Amount BTC</th>
            <th>Price</th>
            <th className="text-right">Total USDC</th>
          </tr>
        </thead>
        <tbody>
          <OrderRow amount="-" price="-" total="-" isSell={true} />
          <OrderRow amount="-" price="-" total="-" isSell={true} />
          <OrderRow amount="-" price="-" total="-" isSell={true} />
          <OrderRow amount="-" price="-" total="-" isSell={true} />
          <OrderRow amount="-" price="-" total="-" isSell={true} />
          <OrderRow amount="-" price="-" total="-" isSell={true} />
          <OrderRow amount="0.0001" price="60,350.68" total="6.035068" isSell={true} />
          <OrderRow amount="0.0001" price="60,350.68" total="6.035068" isSell={true} />
        </tbody>
      </table>

      <div className="flex gap-4 p-2 my-2 text-xs bg-zinc-800">
        <span>Spread</span>
        <span>1,533</span>
        <span>1.12%</span>
      </div>

      <table className="table table-xs">
        <tbody>
          <OrderRow amount="0.0001" price="60,350.68" total="6.035068" isSell={false} />
          <OrderRow amount="0.0001" price="60,350.68" total="6.035068" isSell={false} />
          <OrderRow amount="-" price="-" total="-" isSell={false} />
          <OrderRow amount="-" price="-" total="-" isSell={false} />
          <OrderRow amount="-" price="-" total="-" isSell={false} />
          <OrderRow amount="-" price="-" total="-" isSell={false} />
          <OrderRow amount="-" price="-" total="-" isSell={false} />
          <OrderRow amount="-" price="-" total="-" isSell={false} />
        </tbody>
      </table>
    </div>
  )
}