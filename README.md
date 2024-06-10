## Getting Started
This is a constant work in progress and will be updated as work is completed. Work can be viewed on [danscoconuts.com](https://www.danscoconuts.com)

### Overview
This is an app used for personal education purposes to grow my skills as an engineer and to have a little fun.
The heart of this work is surrounded by a recent appreciation for the beach and a want for a simple life selling coconuts.
With that inspiration, danscoconuts.com is at its core a beach scene.

You'll notice that a lot of this is a WIP. I am trying to focus on UI elements within this project and building some UX/UI design skills, which has made deeper functionality take a backseat for the moment. Checking out the repo might serve as more of a point of reference for what is going on here.

### Current functionality
1. Navigation: There is a basic navigation menu displayed by clicking the coconut in the top right of the display.
2. Weather Widget: Clicking on the weather icon in the nav will open the weather widget. This widget displays data from the National Weather Service API, specifically in Miami Beach, FL. It displays time of day(day or night icon), a short forecast, and temperature in F. Clicking the Cloud or Sun icon will toggle the weather displayed to the user. The state of weather is saved as a cookie, to carry over between visits. The weather is controlled using the Context API and also carries over on page changes.
3. Contact form: A simple form to send me an email and contains other contact links.

### WIP functionality
1. Help menus: Each feature will have a help menu with relevant information and walkthroughs. These menus can be toggled by clicking the '?' next to feature titles. The help system is built to be reusable where data is dynamically changed depending on the context.
2. Coconut messages: Once signed in, a User can send a message via coconut to another user.
3. Task Management: An exercise in creating a task management system - similar to Jira, but not as good.
4. Fake Store: Uses the fake-store api to render a listing of products. Will include basic e-commerce behavior.

### Testing
1. There are e2e Cypress tests that run when new work is pushed to the repo. The Cypress repo can be found [here](https://github.com/danfyfe/dans-coconuts-cypress). It is setup via GitHub Workflows and checkouts and builds the FE and Cypress applications, running the tests on the FE. The workflow also runs all FE unit Jest tests. This was a great exercise in building reliable deployments, critical for a good CI/CD process.