'use client'
import FlexContainer from "../core/containers/flex-container";
import H2 from "../core/typography/h2";
import NextLink from "../core/utility/link";

const YouAreNot = () => (
  <FlexContainer className="">
    <H2>
      Get outta here!
    </H2>
    <FlexContainer className="md:flex-row mt-10">
      <NextLink
        ariaLabel="Sad face, click to return to posts"
        href="/posts"
        asButton
        className="text-5xl border-none rounded-full"
      >
        🥺
      </NextLink>
    </FlexContainer>
  </FlexContainer>
);

export default YouAreNot;
