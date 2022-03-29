import data from '../data';

const addTransaction = transaction => {
  if (Object.keys(transaction).length) data.transaction.push(transaction);
};

export default { addTransaction };
