import { Router } from 'express';
import rulesetService from '../services/ruleset';
import rulesetValidator from '../validators/ruleset';

const rulesetRouter = Router();

rulesetRouter.post('/', rulesetValidator, (req, res) => {
  const { body } = req;
  rulesetService.addRuleset(body);
  res.status(201).send(body);
});

export default rulesetRouter;
