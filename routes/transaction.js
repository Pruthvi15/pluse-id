import { Router } from 'express';
import transactionService from '../services/trasaction';
import transactionValidator from '../validators/transaction';

const transactionRouter = Router();

transactionRouter.post('/', transactionValidator, (req, res) => {
  const { body } = req;
  transactionService.addTransaction(body);
  res.status(201).send(body);
});

export default transactionRouter;
