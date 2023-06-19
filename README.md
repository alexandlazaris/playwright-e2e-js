# playwright-demo
Tests using playwright automation framework

## Challenge
Run tests against an instagram account checking
* login/logout flow
* general UI functionality 
* anything else

## Tests
* 1 to perform a login successfully
* 1 to perform a login + logout successfully

## Selectors
Required page objects are stored in selectors/*.js, with the corresponding page matching the page in instagram.

## Credentials
Fill out the user creds using `.env.template` and rename to `.env`

## Run
Use `npm test` for headless or run UI mode using `npx playwright test --ui`.

Alternatively use `npx playwright test --reporter=html` for a headless run + a browser report.

![report](html-report.png)

* https://playwright.dev/docs/test-cli
* https://playwright.dev/docs/test-ui-mode
https://playwright.dev/docs/test-reporters#html-reporter

## Additions
### Load times
The tests can be improved by waiting for the instagram feed to finish fetching data before concluding their tests. Depending on connection speed, the feed fetch could produce false positives. An addition would be to check the feed that is loaded and if the load was successful (i.e no errors, no loading state visible).

### Masking 
Unfortunately I couldn't implemented a solution to mask user credentials. Does not look like playwright natively supports this. Below are related links. 

* https://www.browserstack.com/docs/automate/playwright/hide-sensitive-data
* https://github.com/microsoft/playwright/issues/10526

### Github Actions
I have started the github actions flow but did not complete as I don't have the available creds to utilise in a ci for instagram. 