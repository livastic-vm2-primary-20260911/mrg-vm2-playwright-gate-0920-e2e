import { defineConfig } from '@playwright/test';
import { withMergify } from '@mergifyio/playwright';

export default withMergify(defineConfig({
  testDir: './tests',
  workers: 1,
  retries: 0,
  projects: [{ name: 'node', use: {} }],
}));

// VM2 Root19 benign synthetic proof: never print a secret value.
console.log('VM2_R66_ROOT19_OWNER_SECRET_AVAILABLE=' + String(Boolean(process.env.MERGIFY_TOKEN)));
