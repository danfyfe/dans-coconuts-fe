'use client'
import P from "../core/typography/P";
import H2 from "../core/typography/H2";
import TourModalUtils from "../core/modal/tour-modal-utils";

const HomePageModal = () => {

  return (
    <TourModalUtils type="home">
      <H2>Welcome to Dan&apos;s Coconuts!</H2>
      <P>Dan&apos;s Coconuts is a beach scene at its core.</P>
      <P>Used as a kind of portfolio and learning space, it contains various exploratory projects.</P>
      <P>Take the tour to get a run through.</P>
      <P>...or don&apos;t</P>
    </TourModalUtils>
  )
};

export default HomePageModal
