const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

module.exports = async function linkCheckTest(test, expect) {
    test('Check all links on the website', async ({ page, baseURL }) => {
        // Use the provided baseURL or fallback to a default URL
        const base = baseURL || 'https://www.wpp.com';
        const folderName = process.env.FOLDER_NAME || 'vml'; // Dynamic Folder Name
        await page.goto(base);

        // Load all distinct links from the batches in the specified folder
        const distinctLinks = new Set();
        const folderPath = path.join(__dirname, `../data/url_batches/${folderName}`);
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true }); // Create folder if it doesn't exist
        }
        console.log('folderpath:' + folderPath);
        console.log('Dirname:' + __dirname);
        
        for (let i = 1; i <= 10; i++) {
            const batchPath = path.join(folderPath, `batch_${i}.json`);
            if (fs.existsSync(batchPath)) {
                const batch = JSON.parse(fs.readFileSync(batchPath, 'utf8'));
                batch.forEach(link => {
                    if (!link.includes('#')) {
                        distinctLinks.add(link);
                    } else {
                        console.warn(`Skipping URL with fragment identifier: ${link}`);
                    }
                });
            }
        }

        for (const link of distinctLinks) {
            let response;
            let retries = 3;
            let timeout = 60000; // Extend the timeout to 60 seconds

            while (retries > 0) {
                try {
                    response = await page.goto(link, { timeout: timeout });
                    if (response) {
                        console.log(`Checking ${link} - Status: ${response.status()}`);
                        expect.soft(response.status()).toBeLessThan(400);  // Use soft assertion
                    } else {
                        console.warn(`Warning: ${link} returned a null response`);
                    }
                    break;  // Break out of the retry loop if successful
                } catch (error) {
                    console.error(`Error navigating to ${link} on attempt ${4 - retries}:`, error);
                    retries--;
                    if (retries === 0) {
                        console.error(`Failed to navigate to ${link} after multiple attempts.`);
                    }
                }
            }
            await page.goto(base);  // Navigate back to the base URL after each check
        }
    });
};
