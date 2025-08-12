// - Valor em centavos = Valor em reais  100
// - Valor em reais = Valor em centavos / 100

/**
 *
 * Converte reais em centavos
 * @param {string} amount
 */

export function convertRealToCents(amount: string) {
  const numericPrice = parseFloat(amount.replace(/\./g, '').replace(',', '.'))
  const priceInCents = Math.round(numericPrice * 100)

  return priceInCents
}
