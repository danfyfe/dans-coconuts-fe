'use client'
import { useGetCookie } from "@/lib/hooks/useGetCookie";
import TourModalUtils from "../core/modal/tour-modal-utils";

const CoconutsPageModal = () => {
  const cookie = useGetCookie(`coconuts-modal-opt-out`);
  return (
    <>
      {
        !cookie ? (
          <TourModalUtils type="coconuts" />
        ) : null
      }
    </>
  )
};

export default CoconutsPageModal
