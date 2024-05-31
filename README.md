This Project contains both UI and API test as part of L7 Informatics assignment.

**Pre-Requiste**
  -  git enabled in your machine [git reference](https://git-scm.com/)
  -  NodeJS installed [Node Installation reference](https://nodejs.org/en)
    ( You can use NVM if specific version of node you wan to work )

 1. **- Setting up NodeJS (http-server)**
    - We will interact with HTML content from local , so please install `http-server` via Terminal/Command Prompt
    - type `npm install -g http-server`
    - Open Terminal/Command Prompt and naigate to 'cypress/e2e/pages' path containing your HTML files
    - type `http-server` to start local server ( Default files will open on http://localhost:8080 )
    - You can access `index.html` & `index-bad.html` via above in local

  2. **- Setting up for API server**
    - now open new Terminal/Command Prompt navigate to cypress folder
    - type `npm install express morgan`
    - navigate to cypress/e2e/server.js via Terminal/Command Prompt
    - type `node server.js` ( to run the server on localhost:7668 )
    - You can access ( `/greeting` & `/reset-api` via above in http://localhost:7668 )
  
**Basic Setup for Cypress**
  - Clone the Repository
  - Go to cypress folder directory via Terminal/Command Prompt
  - type` npm init`
  - type `npm install cypress --save-dev`
  - type `npx cypress open` to run test using cypress test runner / `npx run cypress` to run your test on headless mode

**Author** - **@mj@d**
