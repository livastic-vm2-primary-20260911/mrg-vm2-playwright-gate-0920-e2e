import { test, expect } from '@mergifyio/playwright';

// Maintainer-known failure. Only this exact top-level identity will be quarantined.
test('gate', () => {
  expect('known flaky failure').toBe('safe');
});

// Attacker-controlled new failure. This must remain distinct before the collision.
test.describe('ordinary-suite', () => {
  test('gate', () => {
    expect('attacker-introduced failure').toBe('safe');
  });
});
