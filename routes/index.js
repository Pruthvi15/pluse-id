import { Router } from 'express';
import cashbackRouter from './cashback';
import rulesetRouter from './ruleset';
import transactionRouter from './transaction';

const router = Router();

router.use('/ruleset', rulesetRouter);
router.use('/transaction', transactionRouter);
router.use('/cashback', cashbackRouter);

export default router;
