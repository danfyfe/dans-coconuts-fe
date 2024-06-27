# Dan's Coconuts App

Welcome to the repository for Dan's Coconuts, a project designed for personal education and a bit of fun. This project is a constant work in progress and will be updated regularly. You can view the live work at [danscoconuts.com](https://www.danscoconuts.com).

## Overview

Dan's Coconuts is an app created to grow my skills as an engineer while incorporating my appreciation for the beach and the simple life of selling coconuts. At its core, danscoconuts.com features a beach scene and is focused on improving UI/UX design skills.

While deeper functionality is still being developed, the project serves as a reference point for my work.

## Current Functionality

1. **Navigation**: 
   - A basic navigation menu is accessible by clicking the coconut in the top right corner of the display.

2. **Weather Widget**: 
   - Clicking the weather icon in the nav opens the weather widget.
   - Displays data from the National Weather Service API for Miami Beach, FL.
   - Shows time of day, a short forecast, and temperature in Fahrenheit.
   - Toggle the weather display by clicking the Cloud or Sun icon.
   - Weather state is saved as a cookie and persists across page changes using the Context API.

3. **Contact Form**: 
   - A simple form to send emails and includes other contact links.

4. **Tours**: 
   - Architecture built out for site tours with one instance available on the Home Page.

## Work in Progress (WIP) Functionality

1. **Help Menus**: 
   - Each feature will have a help menu with relevant information and walkthroughs.
   - Menus can be toggled by clicking the '?' next to feature titles.
   - Reusable system with dynamically changing data depending on context.

2. **Coconut Messages**: 
   - Allows users to send messages via coconut to other users once signed in.

3. **Task Management** (Temporarily removed from nav menu): 
   - An exercise in creating a task management system similar to Jira.

4. **Fake Store** (Temporarily removed from nav menu): 
   - Uses the Fake Store API to render a listing of products with basic e-commerce behavior.

## Testing

- **End-to-End Testing**: 
  - Cypress tests run when new work is pushed to the repo.
  - The Cypress repo can be found [here](https://github.com/danfyfe/dans-coconuts-cypress).
  - Setup via GitHub Workflows to checkout, build, and test both the FE and Cypress applications.
  - Includes running all FE unit Jest tests.
  - This setup helps ensure reliable deployments, crucial for a robust CI/CD process.
