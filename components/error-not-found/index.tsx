import LandscapeContainer from "../core/containers/landscape-container";
import ContentContainer from "../core/containers/content-container";
import H1 from "../core/typography/H1";
import P from "../core/typography/P";
import NextLink from "../core/utility/link";
import CoconutBreak from "./coconut-break";
import { IErrorNotFoundProps } from "@/interfaces/content";

const ErrorNotFound = ({ type }: IErrorNotFoundProps) => (
  <LandscapeContainer>
    <ContentContainer className='flex flex-col justify-center items-center'>
      <H1 className="text-7xl lg:text-8xl">Oh no!</H1>
      <CoconutBreak />
      {
        type === "error" ? (
          <P className="text-lg lg:text-2xl text-center mb-5">Looks like there has been an error</P>
        ) : (
          <P className="text-lg lg:text-2xl text-center mb-5"> Looks like this page doesn&apos;t exist</P>
        )
      }
      <P className="text-lg lg:text-2xl text-center">Click here to go back <NextLink href="/">home</NextLink></P>
    </ContentContainer>
  </LandscapeContainer>
);

export default ErrorNotFound;
