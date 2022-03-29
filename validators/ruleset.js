import { checkSchema, validationResult } from 'express-validator';
import date from 'date-and-time';

export default [
  checkSchema({
    startDate: {
      in: ['body'],
      errorMessage: 'Invalid startDate',
      custom: {
        options: value => {
          if (value && !date.isValid(value, 'YYYY-MM-DD')) throw new Error('Invalid startDate');
          return value;
        }
      },
      isString: true,
      optional: false
    },
    endDate: {
      in: ['body'],
      errorMessage: 'Invalid endDate',
      custom: {
        options: value => {
          if (value && !date.isValid(value, 'YYYY-MM-DD')) throw new Error('Invalid startDate');
          return value;
        }
      },
      isString: true,
      optional: false
    },
    cashback: {
      in: ['body'],
      errorMessage: 'Invalid cashback',
      isFloat: true,
      optional: false
    },
    redemptionLimit: {
      in: ['body'],
      errorMessage: 'Invalid redemptionLimit',
      isInt: true,
      optional: false
    },
    minTransactions: {
      in: ['body'],
      errorMessage: 'Invalid redemptionLimit',
      isInt: true,
      optional: true
    },
    budget: {
      in: ['body'],
      errorMessage: 'Invalid redemptionLimit',
      isFloat: true,
      optional: true
    }
  }),
  (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) res.status(400).send({ errors: result.array() });
    else next();
  }
];
