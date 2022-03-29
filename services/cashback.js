import data from '../data';

const getCashbacks = () => {
  const result = [];
  console.log(data);
  data.transaction.forEach(transaction => {
    let maxAmount = 0;
    data.ruleset.forEach(ruleset => {
      const startDate = new Date(ruleset.startDate);
      const endDate = new Date(ruleset.endDate);
      const transactionDate = new Date(transaction.date);
      if (
        startDate <= transactionDate &&
        transactionDate <= endDate &&
        maxAmount < ruleset.cashback &&
        ruleset.redemptionLimit > 0
      ) {
        ruleset.redemptionLimit -= 1;
        maxAmount = ruleset.cashback;
      }
    });
    if (maxAmount)
      result.push({
        transactionId: transaction.id,
        amount: maxAmount
      });
  });
  data.transaction = [];
  return result;
};
export default { getCashbacks };
