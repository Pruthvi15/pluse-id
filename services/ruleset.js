import data from '../data';

const addRuleset = ruleset => {
  if (Object.keys(ruleset).length) data.ruleset.push(ruleset);
};

export default { addRuleset };
