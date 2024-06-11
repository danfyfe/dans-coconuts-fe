'use client'
import P from "../core/typography/P";
import H2 from "../core/typography/H2";
import ModalUtils from "../core/modal/modal-utils";

const HomePageModal = () => {

  return (
    <ModalUtils type="homepage">
      <H2>Welcome to Dan&apos;s Coconuts!</H2>
      <P>Descriptive text</P>
      <P>Descriptive text</P>
      <P>Descriptive text</P>
      <P>Descriptive text</P>
    </ModalUtils>
  )
};

export default HomePageModal
