import LandscapeContainer from "../core/containers/landscape-container";
import ContentContainer from "../core/containers/content-container";
import H1 from "../core/typography/H1";
import P from "../core/typography/P";
import NextLink from "../core/utility/link";
import CoconutBreak from "./coconut-break";
import { IErrorNotFoundProps } from "@/interfaces/content";

const ErrorNotFound = ({ type }: IErrorNotFoundProps) => (
  <LandscapeContainer>
    <ContentContainer className='justify-center items-center'>
      <H1 className="text-7xl lg:text-8xl">Oh no!</H1>
      <CoconutBreak />
      {
        type === "error" ? (
          <P className="text-lg lg:text-2xl text-center mb-5">Looks like there has been an error</P>
        ) : (
          <P className="text-lg lg:text-2xl text-center mb-5"> Looks like this page doesn&apos;t exist</P>
        )
      }
      <P className="text-lg lg:text-2xl text-center"><NextLink href="/" className="underline">Click here to go home</NextLink></P>
      {
        type === "not-found" ? (
          <P className="mt-2 text-base lg:text-xl text-center">Or use the back button in your browser to return to the previous page</P>
        ) : null
      }
    </ContentContainer>
  </LandscapeContainer>
);

export default ErrorNotFound;
