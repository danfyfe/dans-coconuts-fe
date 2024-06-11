'use client'
import ContentContainer from "../core/containers/content-container";
import withModal from "@/hoc/display/withModal";
import P from "../core/typography/P";
import Button from "../core/utility/button";
import { FaPlus } from "react-icons/fa";
import { Dispatch, SetStateAction } from "react";
import H2 from "../core/typography/H2";
import setCookie from "@/lib/setCookie";
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
