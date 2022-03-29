import { Router } from 'express';
import cashbackService from '../services/cashback';
import cashbackValidator from '../validators/cashback';

const cashbackRouter = Router();

cashbackRouter.get('/', (req, res) => {
  const cashback = cashbackService.getCashbacks();
  res.send(cashback);
});

export default cashbackRouter;
