import { habitRuleGet } from '../../src/habits/habitRuleGet';

(async () => {
  const habitRules = await habitRuleGet();

  // eslint-disable-next-line no-console
  console.log(habitRules);
})();
