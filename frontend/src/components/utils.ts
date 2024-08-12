export const transition = "transition-all duration-200 ease-in-out";

export const formatDollarAmount = (amount: number) => {
  return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 2 });
}