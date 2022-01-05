## Letter case styles
1.	UPPERCASE
2.	lowercase
3.	camelCase
4.	PascalCase
5.	train-case
6.	snake_case
Reference: https://en.wikipedia.org/wiki/Letter_case#Case_styles

## HTML style guide
1.	All html element in lowercase
2.	Attribute naming
```html
<input
type="text"
name="sectionheader" //lowercase
class="section-header" //train-case
id="section-header" //train-case
       
// Exception for the top-level DOM element of a React component:
id="App" //PascalCase
       
>```
### Reference: https://www.w3schools.com/html/html5_syntax.asp

## CSS style guide
```css
.section-header { //train-case
    color: red;
    text-align: center;
}
#section-header { //train-case
    color: red;
    text-align: center;
}
```
### Reference: http://codeguide.co/
https://google.github.io/styleguide/htmlcssguide.html#ID_and_Class_Name_Delimiters
https://stackoverflow.com/questions/1696864/naming-class-and-id-html-attributes-dashes-vs-underlines

## JavaScript style guide
JavaScript Object Notation:
** Use singular/plural for single and multiple records don’t add suffix as list or array.
E.g.
```javascript
car – singular naming convention, cars – plural naming convention.
let cars = []; //variable name in camelCase
let person = { //camelCase
    firstName:"John", //attribute name in camelCase
    lastName:"Doe",
    age:50,
    eyeColor: "blue"
    isActive: true
}

JSON notation:
let person = { //camelCase
    "name": "John", //attribute name in camelCase
    "age":30,
    "cars": {
        "car1": "Ford",
        "car2": "BMW",
        "car3": "Fiat"
    }
 }

Class Name:
ClassName { //PascalName
}

Function Name:
let functionName = { } //camelCase

Object Literal Usage:
let myObject = { key: value }

Lambda parameters:
let myFunction = () => returnValue; 
let myFunction = (param) => returnValue;
let myFunction = (param1, param2) => returnValue;

Lambda bodies:
let myFunction = () => {
    // magic
    return sparkleDust
}
```
** Use `const` wherever possible to designate variables that do not change assignments.
** Use `let` in most other cases to avoid JavaScript scoping issues.
** Always end each statement with a semicolon.

## Server Folder Structure
The following is the folder structure for our server. While more complex, this helps spread out responsibilities of files to keep the code simpler, easier to swap out parts, etc.

```
./server
    index.js
    app.js                              // Organizing file for starting up the entire app
    cacheManager.js                     // For handling Redis caching
    helpers.js                          // General helper functions
    etc.
   
    /config                           // Configuration data
        config.js                       // Configueration file, loads .env variables into different states for testing, development, and production
        .env                            // Environment variables, which are NOT checked in to source control

    /routes
        index.js
        root.js                         // Routes associated with the app root
        {serviceName}.js                // All routes associated with a given service are added to Express, and routed to the /{serviceName} controller
        
    /{serviceName}                    // Contains all files related to a particular service
        {serviceName}Controller.js      // Route actions, takes req & sends res
        {serviceName}ServiceAPI.js      // API connection to data 
        {serviceName}ServiceDB.js       // Database connection to data 
        {serviceName}Service.js         // Combines caching check with method for getting data (API, DB...) for the route
        {serviceName}Validator.js       // Validation middleware related to the routes
        
    /model                            // Contains model logic that is best handled on the server (vs. the model on the front end)
        {categoryName}.model.js
        {categoryName}.model.test.js
```

## React style Guide
### Reference:
https://github.com/airbnb/javascript#types
https://www.w3schools.com/js/js_conventions.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
https://hackernoon.com/the-100-correct-way-to-structure-a-react-app-or-why-theres-no-such-thing-3ede534ef1ed

```
React object props usage:
const component = new Component({props);
```

### React Project Structure
The following is the typical layout for our React app:

```
./client
    index.js
    /app
        {AppName}.css                       // General styling for the entire app
        {AppName}.jsx                       // Organizing component for the entire app
    /features
        /{featureName}
            {ComponentName}.css             // Local styling for React component (optional)
            {ComponentName}.jsx             // React component
            {ComponentName}.model.js        // Model associated with the React component (optional)
            {ComponentName}.model.test.js   // Tests for React component model (if model present)
            {ComponentName}.test.js         // Tests for React component
    /model                                // For all model files used on the front end
```

If we're using redux:
Code to initialize your store is located in src/reducers/store.js
Reducers and Action creators are located in src/reducers
Selectors are located in src/selectors
Action constants are located in src/reducers/types.js
Try and limit the number of files in the root src folder but be careful not to overdo your folder structure. There is nothing wrong with lots of files in one folder (Facebook use a monorepo: they have over 30,000 components in a single folder!)

Another layout involves a separate folder with each component containing the source code, CSS, tests, stories and any other component-specific files. For this to be manageable you need to also add an index.js that imports the component and this is not recommended for beginners.

### Summary
It's just JavaScript.
Use functional programming patterns and techniques where possible.
Use containers/presentational components.
Always declare your prop types.
Take advantage of ES6 and ESNext.
Use immutable data.
Use snapshot testing.
Use the function form of setState if you need access to the previous state or props.
Favor small components and composition when building your UI.
Don't ignore console warnings.
*and ...*
ALWAYS test your code!!!

Reference:
https://reactjs.org/docs/faq-structure.html
