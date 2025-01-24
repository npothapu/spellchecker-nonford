// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 'html',
  // Reporters for test results
    reporter: [
      ['html'], // Generates an HTML report
      ['line'], // Outputs a line report to the console
      ['allure-playwright'], // Generates an Allure report for detailed test results
    ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    // Base URL for the tests
    baseURL: process.env.URL || 'https://www.vml.com', // Default URL if not set in the environment variables
    
      // Headless mode configuration
    headless: true, // Run tests in headless mode (no browser UI)
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    //  // Browser launch options
    //  launchOptions: {
    //    args: ['--disable-http2'], // Disable HTTP/2 to force HTTP/1.1 for the browser
    //  },
  },

  /* Configure projects for major browsers */
  projects: [
     {
      name: 'chromium',
      use: { ...devices['Desktop Chrome']},
     },
    
    // {
    //   name: 'default',
    //   use: { 
    //       // Base URL for the tests
    //     baseURL: process.env.URL || 'https://www.vml.com', // Default URL if not set in the environment variables
    //     headless: true, // Run tests in headless mode (no browser UI)
    //     baseURLTimeout: 900000, // Timeout for base URL navigation 
    //     linkTimeout: 600000, // Timeout for individual link navigation
    //    },
      
    // },
    // {
    //   name: 'Ford Tests',  //
    //   use: {
    //     baseURL: process.env.URL || 'https://www.ford.com/',
    //     headless: false, // Run tests in headless mode (no browser UI)
    //     baseURLTimeout: 900000, // Timeout for base URL navigation 
    //     linkTimeout: 600000, // Timeout for individual link navigation
    //     launchOptions: {
    //       args: ['--disable-http2'], // Force HTTP/1.1
    //     },
    //   },
    // },
   
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

