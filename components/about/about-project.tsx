import H2 from "../core/typography/H2";
import H3 from "../core/typography/H3";
import H4 from "../core/typography/H4";
import P from "../core/typography/P";
import NextLink from "../core/utility/link";

const AboutProject = () => {
  return (
    <>
      <H2 className="!text-left mt-2">About this site</H2>
        
      <H3 className="mt-3">How it&apos;s built</H3>
      <P>
        This site is built with React, NextJS (app router), TypeScript, and TailwindCSS. It utilizes GraphQL as well as REST APIs for data.
        Most sections that feature data fetching have call-outs explaining where everything comes from.
      </P>

      <H3 className="mt-3">Features</H3>
      <P>
        This was supposed to be a portfolio site, but I got too carried away 😁.
        There are a few basic features at the moment, with more on the way.
      </P>

      <H4 className="mt-2">Layout</H4>
      <P>
        The landscape and weather components take advantage of NextJS&apos;s layout functionality, to keep the background from re-rendering during page transitions.
        This allows for seamless routing, while keeping the weather and wave animations consistent throughout page changes.
      </P>

      <H4 className="mt-2">Navigation Links</H4>
      <P>
        The navigation links are located in the nav link menu, which is opened by clicking the coconut in the top right of the screen.
      </P>
      <H4 className="mt-2">Weather</H4>
      <P>
        There is a weather widget that can be opened by clicking the cloud/sun icon in the top nav
        The weather toggle animation is all handled via conditional classes and transitions. The rain is a series of elements with a repeated / background-image.
        This, combined with some opacity and movement animations creates the staggard raindrop effect.

        The state of the weather is handled via a Weather Context. Originally, the weather effect was designed to be triggered by the precipitation response from the National Weather Service API,
        so that it represented the real-live state of Miami Beach, but after seeing that functionality I found it to be distracting, so I created a toggle system and saved the value in a cookie
        to allow the state to be stored between visits.
      </P>

      <H4 className="mt-2">Coconuts</H4>
      <P>
        The <NextLink href="/coconuts" className="underline">coconuts page</NextLink> is a playground of sorts, where a user can spam the + button in the nav menu
        to drop tons of coconuts on the beach. When hovering over them (if the rain is off), a popup tool tip will animate. This is using the <a href="https://ui.aceternity.com/" className="underline" target="_blank">Aceternity UI</a> tool tip component.
        The tool tips react to cursor movement and can get really out of hand if there are a lot of coconuts 😁. Aceternity UI have a lot of great stuff, which is super flexible since the components get copied to your code instead of imported, allowing you to change anything without any cringey workarounds.
      </P>
      <P>
        On that note, <a href="https://ui.shadcn.com/" className="underline" target="_blank"> shadcn/ui</a> is also worth checking out. I&apos;ve used it on projects to take care of time consuming UI, like accordions. Accessible 
        out of the box, same idea of copying components into your code for easier customization - pretty great stuff.
      </P>
      {/* <P>
        Error page, 404 page <NextLink href="not-a-page" className="underline">non-existent page</NextLink>
      </P> */}

      <H3 className="mt-3">Testing</H3>
      <P>
        Testing for this project is handled by Cypress and Jest. The Cypress test
        repo can be found on the <NextLink href="/github" className="underline">GitHub page</NextLink>.
        The approach to testing is pretty simple - Cypress handles the e2e testing, which goes through the various
        features on the site and has some simple assertions to make sure everything continues to work as
        more is added, and Jest handles low level unit tests.
      </P>
      <P>
        The main GitHub repo for the frontend utilizes GitHub actions to run the Cypress tests when anything
        is pushed to the main branch. The yml file for the action checkouts out and builds the frontend app,
        runs the unit tests in the repo, then grabs the Cypress repo and runs all of the e2e tests.
      </P>
    </>
  )
};

export default AboutProject;
