# ASA Automated Testing

This repository contains the automated functional test scripts for ASA.

## Table of Contents
1. [Functional Testing](#functional-testing)
2. [Visual Testing](#visual-testing)
3. [GTM Testing](#gtm-testing)

## [Functional Testing](#functional-testing)
### Prepare your environment

1. Install Java(Jdk 1.7 or above) and Maven latest version. Ensure JAVA_HOME environment variable is
   set and points to your JDK installation.
2. Install any git cli for your platform, like for Windows [example](https://msysgit.github.io/)
3. Install Eclipse Windows version or any other preferred IDE.
4. Clone the QA-Automation-Seed-Project repository.
5. Shell command to run tests from project workspace- clean verify -Dmaven.test.failure.ignore=true
   -DsystemPropertiesFile=config//serenity_local_chrome.properties -Dtags=postbuilld
6. Configure the Browserstack credentials, browser capabilities and the test environment URL in
   serenity.properties file.

### Run the tests

From the project folder, run the command from project workspace- mvn clean verify
-Dmaven.test.failure.ignore=true -DsystemPropertiesFile=config//serenity_firefox.properties

### Test results

The detailed test reports can be seen at- project-folder/target/site/serenity/index.html

## Cucumber 6.0 Reference links

### Step Definitions

https://cucumber.io/docs/cucumber/step-definitions/
https://cucumber.io/docs/cucumber/cucumber-expressions/

### BrowserStack Capabilities

https://www.browserstack.com/automate/capabilities

## Optional plugins to install for more readability

1. Cucumber For Java Plugin - Will help to navigate from steps to step definitions
2. Gherkin - to format the feature files
3. google-java-format - will automatically format the code with the google java coding standards

## JIRA integration details

1. For each scenario first tag should be @issue tag with JIRA ticket id
    ```
   @issue:QAAUT-2
   @high @sanity @prod @postbuild
   Scenario: User should see error code 404 for invalid url
   ```
2. To enable JIRA integration need to update the `jira.update.status` flag value to `true`, If you
   don't want to update the JIRA than keep the value to `false`

3. After enabling the JIRA you have update the following flag values with valid details

    ```
    jira.url=
    jira.username=
    jira.password=
    ```
   ---

## [Visual Testing](#visual-testing)

### Prepare your environment
BackstopJS must be installed on your machine to run tests locally.
To install, open a terminal window:
```
npm install -g backstopjs
```
### Run the tests
To run the tests locally, you will need to get a new baseline, 
config file will point to PROD, so you will need to be connected via 
VPN before you begin.

Get a new baseline, cd to VisualTests in your terminal, then enter:
```
backstop reference
```
Once baseline scan is complete, you will be prompted to run tests in 
terminal.
```
backstop test
```
For the test scan, the config file points to STAGE.

Once the test scan is complete, the report will open automatically 
in a new window in your browser.

#### Optional Methods
To run reference or test for only one scenario, add a filter flag to 
the end of your terminal command with the scenario label from the 
config file, for example:
```
backstop test --filter 'Homepage-Base'
```
Run reference or test in a Docker container:
Note: Must have [Docker](https://docs.docker.com/desktop/) installed & running
```
backstop reference --docker
```
### Test results
Once testing is complete, the report will open automatically
in a new window in your browser. It will display the number passed 
versus the number failed. Click the number failed to only show those 
results.

Click on the diff section to open the scrubber feature; This is a 
red line in the center of the image, you can click & drag the line, 
which is the scrubber, to see the difference between the two 
screenshots. Here is where you'll be able to indicate whether the 
failure is legit or a difference in rendering, load times, or other 
variable that equates to a non-failure.

### Reference Resources
[BackstopJS Docs](https://github.com/garris/BackstopJS)
[Confluence Page for this project](https://confluence.uhub.biz/pages/viewpage.action?pageId=745008892)
[Blog post by Codurance](https://www.codurance.com/publications/2020/01/16/backstopjs-tutorial/utm_sourcenewsletterutm_mediumemailutm_campaignfeb2020)
[Blog Post by ChopChop](https://chop-chop.org/blog/testing-web-projects-with-backstopjs)
[BackstopJS Docs for Docker](https://github.com/garris/BackstopJS/tree/master/docker)
[Blog on using BackstopJS in a Docker Container](https://blog.docksal.io/visual-regression-testing-with-backstopjs-in-a-docker-container-dfd1b9ae8582)

## [GTM Testing](#gtm-testing)

### Prepare your environment
Playwright must be installed on your machine to run tests locally.
To install, open a terminal window, and ensure you're mapped to the TagsTests directory.

```
npm install -g @playwright/test@latest
npx playwright install --with-deps
npm install typo-js
npm install playwright-html-reporter
npm install dotenv
```
### Run the tests
To run the tests locally, open an integrated terminal at TagsTest and fire off 'npx playwright test' - there are additional scripts in package.json for reference.

It uses the jenkins server as a proxy, so if running from your desk at the office, should work out of the box. If remote, must connect to VPN.

Additional running and debugging bits are located in the confluence page below.

### Test results
The report will always contain the raw data layer from each test, so there's that reference point. The assertions were made to report outside of that, in the stdwarn, so be sure to check the stdwarn section of the report when validating. 

### Reference Resources
[Playwright Docs](https://playwright.dev/docs)
[Confluence Page for this project](https://confluence.uhub.biz/pages/viewpage.action?pageId=745008892)