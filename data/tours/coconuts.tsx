import HR from "@/components/core/utility/HR";
import { IActiveTourData } from "@/context/TourProvider";

const CoconutTourData: IActiveTourData = {
  type: 'coconuts',
  main: {
    title: "Welcome to Coconuts!",
    copyElems: [
      <>This page allows you to send a message to another user.</>,
      <>Add a message, then click the coconut to view.</>,
      <>The coconuts can also be moved and dropped.</>
    ]
  },
  steps: [
    {
      title: 'Add a Coconut',
      copyElems: [
        <>Clicking this button opens the form used to create a coconut and send it to a user.</>,
        <>Use the search field to find a user, then add the other fields.</>,
        <>Once created, the coconut will drop from the sky.</>
      ],
      nextElemId: null,
      prevElemId: null
    },
  ]
};

export default CoconutTourData;
