/**
 * Author: Nandakumar Pothapu Reddy
 * Title: Associate Director of Technology
 * Date: January 24, 2025
 */

const { test, expect } = require('@playwright/test');
const spellCheckTest = require('./spellCheckTest'); // Import the test logic
const linkCheckTest = require('./linkCheckTest');   // Import link check test logic

// Pass the test object to the function
linkCheckTest(test, expect);
spellCheckTest(test);

