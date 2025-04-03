/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const MEDIUM_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= 7) {
    return days * DAILY_RATE - LONG_TERM_DISCOUNT;
  }

  if (days >= 3) {
    return days * DAILY_RATE - MEDIUM_TERM_DISCOUNT;
  }

  return days * DAILY_RATE;
}

module.exports = calculateRentalCost;
