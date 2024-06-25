'use client'
import { useGetCookie } from "@/lib/hooks/useGetCookie";
import TourModalUtils from "../core/modal/tour-modal-utils";

const HomePageModal = () => {
  const cookie = useGetCookie(`home-modal-opt-out`);
  return (
    <>
      {
        !cookie ? (
          <TourModalUtils type="home" />
        ) : null
      }
    </>
  )
};

export default HomePageModal
