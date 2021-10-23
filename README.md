# Streamfinder

## This Ain't No Fishing App
Watch your favorite movies and T.V. shows cheap, easy, and on demand. No fishing around to catch that perfect show. Once you use our app, you'll be hooked!

## Team Members
- Chris Monteilh
- Jaimie Diemer - [Engineering Journal](https://gist.github.com/PBandJaimie/e722b5382f8ad89001c2546d41b50b6a)
- [Mark Thomas](https://github.com/MarkPThomas) - [Engineering Journal](https://gist.github.com/MarkPThomas/11067bca74b4361ebe8f4c0129fbfa0e)
- [Robert Lawrence](https://github.com/rlawrence9) 
- [Steven Harder](https://github.com/stevenharderjr) - [Engineering Journal](https://gist.github.com/stevenharderjr/f99e9c7c05ac97e7f5d20e8212320884)
- [Taniel Pogharian](https://github.com/Taniel-P)

## Introduction
Streamfinder is a full stack app that our team of 6 developers made over a 4 week long project at Hack Reactor for Kage Enterprises, LLC, a theoretical client. The app serves to aggregate media data and subscription service data to help users select shows to watch and save money based on subscription usage, show availability, and social input from app users in the form of ratings, reviews, and likes.

## What This App Does
This app shows users a list of movies and T.V. shows to select from for watching based on the following criteria:
* Trending (based on community popularity)
* Recommended (based on user history)
* History (what the user has watched)

There is also a search feature where a user can look up movies.

The features listed are derived from various streaming services, emphasizing services that the user has subscriptions to. The app also tracks the user's engagement with various subscription services to help them see when they are underutilizing a given subscription.

The app was built in order to streamline and consolidate the user's media streaming experience and help them save money by seeing what services they actually use.

In addition to usage history providing a basis for feedback to the user, the community aspect of the app means that users can consume and contribute helpful information about shows in the form of ratings, reviews, and liking reviews.

## See It Live!
The app is currently being hosted live as we push updates on Amazon Web Services, [here](http://34.198.201.182:3000/).
You can also see our interactive wireframe concept [here](https://balsamiq.cloud/s4fh9u8/p6ql8za/r2278?f=N4IgUiBcAMA0IDkpxAYWfAMhkAhHAsjgFo4DSUA2gLoC%2BQA%3D)

## Tech Stack ( you can include logos)

The app is built using the following tools and tech stack:

* UX
  * [Balsamiq](https://balsamiq.com/wireframes/) (wireframing)
  * [Figma](https://www.figma.com/) (other diagrams)
  * [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) (icons, placeholder images) (pending)
  * [Adobe Illustrator](https://www.adobe.com/products/illustrator.html) (icons, placeholder images) (pending)
* RMERN Stack
  * [Redis](https://redis.io/) (for caching)
  * [Mongo](https://www.mongodb.com/) (database)
  * [Express](https://expressjs.com/) (backend server)
  * [React](https://reactjs.org/) (front end UX)
  * [Node JS](https://nodejs.org/en/) (backend language)
* API
  * [RapidAPI](https://rapidapi.com/movie-of-the-night-movie-of-the-night-default/api/streaming-availability) (fetching media data)  
* Continuous Integration
  * [Jest](https://jestjs.io/) (local testing)
  * [Enzyme](https://enzymejs.github.io/enzyme/) (React testing) 
  * [CircleCI](https://circleci.com/) (continuous integration testing)
  * [Sonar Cloud](https://sonarcloud.io/) (app quality assessments as part of CI, code coverate)
* Hosting
  * [Amazon Web Services](https://aws.amazon.com/) (AWS) EC2 Instance  

## Anticipated Technical Challenges and Research
* Gathering the data. We aren't sure whether or not we can find an appropriate API to use out of the box, or if we need to develop a web scraper in order to gather the data. 
> * What did you learn?
* Keeping the service lightweight but robust with caching and databases.
> * What did you learn?
* Structuring the app so as to minimize redundant coding and testing, and maximize development flexibility and extension.
> * What did you learn?
* Making this a progressive web app (PWA) in order to allow it to work well on mobile devices.
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

## Workflow
### External Stakeholders
We had a mock client to roughly guide the process. The project started by having a meeting with the client where they outlined their wants and needs, and we asked additional questions in order to create an initial spec. After working out a wireframe scheme, user stories and feature criteria, a [project proposal](https://docs.google.com/document/d/1bstKWtm06AKcyQmNuf1cBzCsZz_KYJE1L_GLMCli4JI/edit?usp=sharing) was written up and presented to the client to finalize expectations for the app development, deliverables, and deadlines.

### Agile
For managing the development of the app, we chose to utilize the [Agile](https://www.atlassian.com/agile) method of development. 

### User Stories

### Agile

### CI/CD

### Testing

### Ticketing
For ticketing we used [Trello](https://trello.com/) for both the initial app R&D and design phase, as well as feature/component development and bug fixes.

[Project Board](https://trello.com/rpp29boccornflowerblue)

For each stage of deliverables for the project, we made a separate board for tracking tickets. Each developer then made a personal board where the appropriate ticket could then be copied down. Smaller tickets that developers generated for their own private R&D and testing would be generated and kept on their personal boards. All tickets could have due dates assigned, and multiple people assigned to them. In this way, it was easier to see what each state of development entailed, everyone was kept on the same page with overall development flow, but we weren't overwhelmed with the noise of so many tickets.

Developers could then make custom filters to easily see all open tickets relevant to them, sorted by labels and due dates.

Trello is really pretty small for development like this. Honestly, [JIRA](https://www.atlassian.com/software/jira) paired with [Confluence](https://www.atlassian.com/software/confluence) would have been better for a team and project of this size.

## Git Workflow
### Style Guides

### Commit Guides
* Code Reviews
* Merge Requests
* CI Testing

> * What did you learn from the process
> * What were key takeaways from stand ups, code reviews, etc
> * Writing tests
> * Link to your project board, discuss completed tickets

## Any non-MVP tickets (optional)
> * Code refactorings
> * Performance Optimizations
> * Additional features - Progressive Web App?
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


## Testing
- [Jest](https://jestjs.io/) is the framework chosen to test React and probably all JavaScript code in the app.
- Tests are located in the **`./tests`** directory of the app for integration tests and global files, and are stored with the associated component or * .js file.
- Naming convention of unit test files: ```{filename}.test.js``` for every ```{filename}.js``` file, or ```index.test.js``` for a testing file for an entire component.
- ```npm test``` to run the tests

# Continuous Integration
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
