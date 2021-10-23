# Streamfinder

## Catchy headline / cool graphic

## Team Members
- [Chris Monteilh]() - [Engineering Journal]()
- [Jaimie Diemer]() - [Engineering Journal]()
- [Mark Thomas](https://github.com/MarkPThomas) - [Engineering Journal](https://gist.github.com/MarkPThomas/11067bca74b4361ebe8f4c0129fbfa0e)
- [Robert Lawrence]() - [Engineering Journal]()
- [Steven Harder](https://github.com/stevenharderjr) - [Engineering Journal](https://gist.github.com/stevenharderjr/f99e9c7c05ac97e7f5d20e8212320884)
- [Taniel Pogharian]() - [Engineering Journal]()

## Introduction
> This was a month long project where our team completed an MVP full stack application for an external user (Jane Doe)
>
> Add any additional content here pertaining to the timeline, any personal goals, etc.

## What This App Does
> * What problem does it solve? Who uses it?
> * Why was it built?
> * User Inputs and Outputs

## Tech Stack ( you can include logos)

## Anticipated Technical Challenges and Research
> * Why, what was the plan to overcome those challenges?
> * What did you learn?

## Unexpected Challenges
> * Why was it a challenge
> * What did you learn?

## App Video Demo / Screen Shot Walkthrough
> * What were the user stories /  what was MVP (mention Minimal Viable Product)

## How Does the App Work?
> * What happens behind the scenes when the user interacts with it?
> * OR What are all the places the data travels?  What happens to that data?
> * Optionally include a diagram
> * How does the tech stack come together?

## Research Required
> * Workflow and Key lessons from your team - specifically those related to: Agile, CI/CD, testing, working with external stakeholders, ticketing, and user stories.
> * Your git workflow, style guides, commit guides, etc
> * What did you learn from the process
> * What were key takeaways from stand ups, code reviews, etc
> * Writing tests
> * Link to your project board, discuss completed tickets

## Any non-MVP tickets (optional)
> * Code refactorings
> * Performance Optimizations
> * Additional features
> * etc

## Notes From Sprint Retro
> * What additional features do you plan to add, how do you plan to implement those features?
> * Future refactoring?
> * Additional dev ops considerations?
> * UI/UX additions?

## Setup
- **Clone/pull repo**
- `npm install`
- `npm run dev` to build and run server and client side app (in development, bundles will be compiled and served by webpack in-memory)
- Navigate to `http://localhost:3000` in browser

## Contributing
- Install Pomander before attempting to push commits:
- `curl -s https://raw.githubusercontent.com/reactorcore/pomander/master/bin/install | bash`

## Documentation
- Documentation such as diagrams for the app and UX styling guidelines are stored in the **`./docs`** directory.
- See the [web style guide](./docs/web-style-guide.md) for the standards we are following for coding and project organization.


## Testing (IP)
- [Jest](https://jestjs.io/) is the framework chosen to test React and probably all JavaScript code in the app.
- Tests are located in the **`./tests`** directory of the app for integration tests and global files, and are stored with the associated component or * .js file.
- Naming convention of unit test files: ```{filename}.test.js``` for every ```{filename}.js``` file, or ```index.test.js``` for a testing file for an entire component.
- ```npm test``` to run the tests

# Continuous Integration (IP)
Basic test of JavaScript continuous integration uses [CircleCI](https://circleci.com/) to run the tests, and [Coveralls](https://coveralls.io/) for reporting test coverage.

Circle CI: [![CircleCI](https://circleci.com/gh/BOC-CornflowerBlue/Streamfinder/tree/main.svg?style=svg)](https://circleci.com/gh/BOC-CornflowerBlue/Streamfinder/tree/main)
<!-- 
Coveralls: [![Coverage Status](https://coveralls.io/repos/github/rpp29-fec-gouda/atelier/badge.svg)](https://coveralls.io/github/rpp29-fec-gouda/atelier) -->

<!-- # SonarCloud (IP)
Additionally, [SonarCloud](https://sonarcloud.io/projects) is used for an overall check of code quality.

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=SDC-RPP29-sequoia_atelier-ratings-reviews&metric=alert_status)](https://sonarcloud.io/dashboard?id=SDC-RPP29-sequoia_atelier-ratings-reviews)

Quality: [![SonarCloud](https://sonarcloud.io/api/project_badges/measure?project=SDC-RPP29-sequoia_atelier-ratings-reviews&metric=alert_status)](https://sonarcloud.io/dashboard?id=SDC-RPP29-sequoia_atelier-ratings-reviews)

Maintainability: [![SonarCloud](https://sonarcloud.io/api/project_badges/measure?project=SDC-RPP29-sequoia_atelier-ratings-reviews&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=SDC-RPP29-sequoia_atelier-ratings-reviews)

Reliability: [![SonarCloud](https://sonarcloud.io/api/project_badges/measure?project=SDC-RPP29-sequoia_atelier-ratings-reviews&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=SDC-RPP29-sequoia_atelier-ratings-reviews)

Security: [![SonarCloud](https://sonarcloud.io/api/project_badges/measure?project=SDC-RPP29-sequoia_atelier-ratings-reviews&metric=security_rating)](https://sonarcloud.io/dashboard?id=SDC-RPP29-sequoia_atelier-ratings-reviews)

Lines of Code: [![SonarCloud](https://sonarcloud.io/api/project_badges/measure?project=SDC-RPP29-sequoia_atelier-ratings-reviews&metric=ncloc)](https://sonarcloud.io/dashboard?id=SDC-RPP29-sequoia_atelier-ratings-reviews)

Coverage: [![SonarCloud](https://sonarcloud.io/api/project_badges/measure?project=SDC-RPP29-sequoia_atelier-ratings-reviews&metric=coverage)](https://sonarcloud.io/dashboard?id=SDC-RPP29-sequoia_atelier-ratings-reviews)

Bugs: [![SonarCloud](https://sonarcloud.io/api/project_badges/measure?project=SDC-RPP29-sequoia_atelier-ratings-reviews&metric=bugs)](https://sonarcloud.io/dashboard?id=SDC-RPP29-sequoia_atelier-ratings-reviews)

Code Smells: [![SonarCloud](https://sonarcloud.io/api/project_badges/measure?project=SDC-RPP29-sequoia_atelier-ratings-reviews&metric=code_smells)](https://sonarcloud.io/dashboard?id=SDC-RPP29-sequoia_atelier-ratings-reviews)

Technical Debt: [![SonarCloud](https://sonarcloud.io/api/project_badges/measure?project=SDC-RPP29-sequoia_atelier-ratings-reviews&metric=sqale_index)](https://sonarcloud.io/dashboard?id=SDC-RPP29-sequoia_atelier-ratings-reviews) -->
