import { habitRuleGetAll } from '../../apps/bot/src/habitRule/habitRuleGetAll';

(async () => {
  const habitRules = await habitRuleGetAll();

  // eslint-disable-next-line no-console
  console.log(habitRules);
})();
