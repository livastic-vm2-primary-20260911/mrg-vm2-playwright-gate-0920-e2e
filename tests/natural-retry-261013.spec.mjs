import { test, expect } from '@playwright/test';
test('vm2 owner synthetic natural retry failure after owner revocation', async () => {
  test.setTimeout(150000);
  await new Promise((resolve) => setTimeout(resolve, 70000));
  expect('VM2_EXPECTED_FAILURE_261013').toBe('VM2_NEVER');
});
