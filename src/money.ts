export type Line = { amount: number };

function currencyDigits(currency: string): number {
  try {
    const options = Intl.NumberFormat('en', { style: 'currency', currency }).resolvedOptions();
    return typeof options.maximumFractionDigits === 'number' ? options.maximumFractionDigits : 2;
  } catch {
    return 2;
  }
}

export function formatTotal(lines: Line[], currency: string): string {
  const sum = lines.reduce((total, line) => total + line.amount, 0);
  return sum.toFixed(currencyDigits(currency));
}
