import dotenv from 'dotenv';
import { defineConfig, devices } from '@playwright/test';

dotenv.config();

export default defineConfig({

  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  use: {

    // Base URL
    baseURL: process.env.BASE_URL,

    // Run browser in headed mode
    headless: false,

    // Browser size
    viewport: {
      width: 1920,
      height: 1080,
    },

    // Ignore SSL certificate issues
    ignoreHTTPSErrors: true,

    // Capture screenshot if test fails
    screenshot: 'only-on-failure',

    // Record video only for failed tests
    video: 'retain-on-failure',

    // Save trace only for failed tests
    trace: 'retain-on-failure',

    // Action timeout
    actionTimeout: 10000,

    // Navigation timeout
    navigationTimeout: 30000,
  },

  projects: [

    {
      name: 'setup',
      testMatch: /.*auth\.setup\.ts/
    },

    {
      name: 'chromium',
      testIgnore: /.*auth\.setup\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies:['setup'],
    },

    // Uncomment if you want cross-browser testing

    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // },

    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //   },
    // },

  ],

});