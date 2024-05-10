import H2 from "../core/typography/H2";
import H3 from "../core/typography/H3";
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
        This was supposed to be a portfolio site, but I got too carried away and neglected all of my other projects 😁.
        I will be updating it often, but
        there are a few basic features at the moment.
      </P>

      <P>
        weather uses cookies to save preference between visits
      </P>

      <P>
        Error page, 404 page <NextLink href="not-a-page" className="underline">non-existent page</NextLink>
      </P>


      <H3 className="mt-3">Testing</H3>
      <P>
        Testing for this project is handled by Cypress. The test
        repo can be found on the <NextLink href="/github" className="underline">GitHub page</NextLink>.
        The approach to testing is pretty simple - I am using e2e testing that goes through the various
        features on the site and has some simple assertions to make sure everything continues to work as
        more is added.
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
