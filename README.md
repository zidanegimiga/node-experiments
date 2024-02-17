# Node Experiments
- I undertake various challenges to strengthen my knowledge on Express.js, MongoDB, test libraries, ORMs and so much more.
- There will be different projects spread out across different branches

## Folder Structure

node-expreriments/
|-- src/
|   |-- controllers/ - Contains application controller logic.
|   |-- middleware/  - Holds middleware functions.
|   |-- models/      - Houses application data models.
|   |-- routes/      - Manages application routes.
|   |-- services/    - Includes business logic and third-party services.
|   |-- utils/       - Stores utility functions and helper scripts.
|   |-- app.js       - Main entry point for the application.
|-- public/          - Stores Images, CSS, scripts and partials
|   |-- images/
|   |-- stylesheets/
|   |-- scripts/
|   |-- views/
|       |-- partials/
|       |-- layouts/
|-- test/
|   |-- unit/
|   |-- integration/
|   |-- e2e/
|-- config/         - Contains environment-specific configuration files.
|   |-- development/
|   |-- production/
|   |-- index.js    - Exports the appropriate configuration based on the current environment.
|-- logs/
|-- .gitignore
|-- .env
|-- .env.local
|-- package.json
|-- README.md


## Usage
1. Clone the repository.
2. Install dependencies using npm install.
3. Set up the required environment variables in .env and .env.local files.
4. Run the application using npm start.
5. Access the application in the browser at the specified port.

## Testing
1. Unit tests: ```yarn run test:unit```
2. Integration tests: ```yarn run test:integration```
3. End-to-end tests: ```yarn run test:e2e```
