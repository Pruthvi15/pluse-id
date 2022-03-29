import { checkSchema, validationResult } from 'express-validator';
import date from 'date-and-time';

export default [
  checkSchema({
    date: {
      in: ['body'],
      errorMessage: 'Invalid date',
      custom: {
        options: value => {
          if (value && !date.isValid(value, 'YYYY-MM-DD')) throw new Error('Invalid startDate');
          return value;
        }
      },
      isString: true,
      optional: false
    },
    customerId: {
      in: ['body'],
      errorMessage: 'Invalid customerId',
      isInt: true,
      optional: true
    },
    id: {
      in: ['body'],
      errorMessage: 'Invalid id',
      isInt: true,
      optional: false
    }
  }),
  (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) res.status(400).send({ errors: result.array() });
    else next();
  }
];
