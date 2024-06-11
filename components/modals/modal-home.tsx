'use client'
import P from "../core/typography/P";
import H2 from "../core/typography/H2";
import TourModalUtils from "../core/modal/tour-modal-utils";

const HomePageModal = () => {

  return (
    <TourModalUtils type="home">
      <H2>Welcome to Dan&apos;s Coconuts!</H2>
      <P>Working on a guided website tour.</P>
      <P>Check back soon!</P>
    </TourModalUtils>
  )
};

export default HomePageModal
