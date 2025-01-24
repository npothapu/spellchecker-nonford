Run Tests for Specific Websites

1. Run the Tests for https://www.teenvoice.com

For Command Prompt:

set URL=https://www.teenvoice.com
set FOLDER_NAME=teenvoice
set DIC_FILENAME=teenvoice
set HEADLESS=true
npx playwright test

For PowerShell:

$env:URL = "https://www.teenvoice.com"
$env:FOLDER_NAME = "teenvoice"
$env:DIC_FILENAME = "teenvoice"
$env:HEADLESS="true"
npx playwright test

$env:URL="https://www.teenvoice.com"; $env:FOLDER_NAME="teenvoice"; $env:DIC_FILENAME="teenvoice"; $env:HEADLESS="true"; npx playwright test


2. Run the Tests for https://www.vml.com

For Command Prompt:

set URL=https://www.vml.com
set FOLDER_NAME=vml.com
set DIC_FILENAME=vml
set HEADLESS=true
npx playwright test

For PowerShell:

$env:URL = "https://www.vml.com"
$env:FOLDER_NAME = "vml"
$env:DIC_FILENAME = "vml"
$env:HEADLESS="true"
npx playwright test
$env:URL="https://www.vml.com"; $env:FOLDER_NAME="vml"; $env:DIC_FILENAME="vml"; $env:HEADLESS="true"; npx playwright test
or
$env:URL="https://www.vml.com"; $env:FOLDER_NAME="vml"; $env:DIC_FILENAME="vml"; $env:HEADLESS="true"; npx playwright test --project="default"


3. Run the Tests for https://www.wpp.com

For Command Prompt:

set URL=https://www.wpp.com
set FOLDER_NAME=wpp
set DIC_FILENAME=wpp
set HEADLESS=false
npx playwright test

For PowerShell:

$env:URL = "https://www.wpp.com"
$env:FOLDER_NAME = "wpp"
$env:DIC_FILENAME = "wpp"
$env:HEADLESS="false"
npx playwright test
$env:URL="https://www.wpp.com"; $env:FOLDER_NAME="wpp"; $env:DIC_FILENAME="wpp"; $env:HEADLESS="false"; npx playwright test

4. Run the Tests for https://www.ford.com

For Command Prompt:

set URL=https://www.ford.com
set FOLDER_NAME=ford
set DIC_FILENAME=ford
set HEADLESS=false
npx playwright test

For PowerShell:

$env:URL = "https://www.ford.com"
$env:FOLDER_NAME = "ford"
$env:DIC_FILENAME = "ford"
$env:HEADLESS="false"
npx playwright test
$env:URL="https://www.ford.com"; $env:FOLDER_NAME="ford"; $env:DIC_FILENAME="ford"; $env:HEADLESS="false"; npx playwright test --project="Ford Tests"

Explanation of Parameters

URL: The base URL of the website under test.

FOLDER_NAME: Name of the folder where the test results or logs will be saved.

DIC_FILENAME: Name of the dictionary or configuration file used during testing.

HEADLESS: Determines whether the browser will run in headless mode (true) or in GUI mode (false).

Notes

Replace the values of URL, FOLDER_NAME, and DIC_FILENAME with appropriate values for other websites if needed.

Ensure your test scripts are properly configured to use the environment variables.

For additional Playwright options, refer to the official documentation.

******************************
2.  **Miscellaneous Bash Commands:**
   - Clear terminal history:
     ```bash
     history -c
     ```
   - Clear the terminal screen:
     ```bash
     clear

3. **Generate an Allure Report:**
   ```powershell
   npx allure generate allure-results --clean
   ```

4. **View the Allure Report:**
   ```powershell
   allure open
   ```
   Or, if Allure is installed locally:
   ```powershell
   npx allure open allure-report
   ```

5. **Miscellaneous PowerShell Commands:**
   - Clear command history:
     ```powershell
     Clear-History
     ```
   - Clear the terminal screen:
     ```powershell
     Clear-Host
     ```


Examples:
        by default Headless= true
        $env:URL="https://www.vml.com";  $env:FOLDER_NAME="vml"; $env:DIC_FILENAME="vml"; $env:HEADLESS="true"; npx playwright test 
        $env:URL="https://www.teenvoice.com"; $env:FOLDER_NAME="teenvoice"; $env:DIC_FILENAME="teenvoice"; $env:HEADLESS="true"; npx playwright test
        $env:URL="https://www.sherwin-williams.com/"; $env:FOLDER_NAME="sherwin-williams"; $env:DIC_FILENAME="sherwin-williams"; $env:HEADLESS="true"; npx playwright test 
        $env:URL="https://unitedsoybean.org"; $env:FOLDER_NAME="unitedsoybean"; $env:DIC_FILENAME="unitedsoybean"; $env:HEADLESS="true"; npx playwright test
        

        pass headless= true value
        $env:URL="https://www.vml.com";  $env:FOLDER_NAME="vml"; $env:DIC_FILENAME="vml"; $env:HEADLESS="true"; npx playwright test --project="default"
        $env:URL="https://www.teenvoice.com"; $env:FOLDER_NAME="teenvoice"; $env:DIC_FILENAME="teenvoice"; $env:HEADLESS="true"; npx playwright test --project="default" 
        $env:URL="https://www.sherwin-williams.com/"; $env:FOLDER_NAME="sherwin-williams"; $env:DIC_FILENAME="sherwin-williams"; $env:HEADLESS="true"; npx playwright test --project="default" 
         $env:URL="https://unitedsoybean.org"; $env:FOLDER_NAME="unitedsoybean"; $env:DIC_FILENAME="unitedsoybean"; $env:HEADLESS="true"; npx playwright test --project="default" 
        
        pass headless= false only this works for www.ford.com or www.wpp.com     
        $env:URL="https://www.wpp.com"; $env:FOLDER_NAME="wpp"; $env:DIC_FILENAME="wpp"; $env:HEADLESS="false"; npx playwright test 

