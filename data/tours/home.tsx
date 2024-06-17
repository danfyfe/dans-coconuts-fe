import HR from "@/components/core/utility/HR";
import { IActiveTourData } from "@/context/TourProvider";

const HomeTourData: IActiveTourData = {
  type: 'home',
  main: {
    title: "Welcome to Dan's Coconuts!",
    copyElems: [
      <>Dan&apos;s Coconuts is a beach scene at its core.</>,
      <>Used as a kind of portfolio and learning space, it contains various exploratory projects.</>,
      <>Take the Home Page tour for a basic run through, then start exploring.</>,
      <>Or enjoy the beach, built entirely using CSS animations via Tailwind.</>,
      <HR key="home-page-tour-hr" className="mt-2" />,
      <>* Note: Most pages have help functionality that can be accessed by clicking the &apos;?&apos; symbol next to headings.</>
    ]
  },
  steps: [
    {
      title: 'Main Navigation',
      copyElems: [
        <>Clicking this coconut opens the main navigation, which contains links to other pages.</>,
        <>Signin and Signout are also available in this menu.</>,
        <>An account is needed to visit some of the other pages.</>
      ],
      nextElemId: 'weather-widget-btn'
    },
    {
      title: 'Weather Widget',
      copyElems: [
        <>Clicking the weather icon opens the Weather Widget.</>,
        <>The Weather Widget uses the National Weather Service API to display the current weather in Miami Beach, FL.</>,
        <>It also holds the weather toggle, which switches from a sunny day to rain. Click the cloud icon to activate.</>
      ],
      nextElemId: null
    }
  ]
};

export default HomeTourData;
