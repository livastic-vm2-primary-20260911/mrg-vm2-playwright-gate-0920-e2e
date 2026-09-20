import { test, expect } from '@mergifyio/playwright';

// Maintainer-known failure. Only this exact top-level identity is quarantined.
test('gate', () => {
  expect('known flaky failure').toBe('safe');
});
