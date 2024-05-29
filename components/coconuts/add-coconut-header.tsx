import H1 from "../core/typography/H1";
import Button from "../core/utility/button";
import HelpTrigger from "../help/help-trigger";

const AddCoconutHeader = () => {
  return (
    <div className="flex justify-center items-center">
      <H1 className="!text-2xl">Send a coconut!</H1>
      <HelpTrigger className="text-xs mb-4" category="coconuts" />
    </div>
  )
};

export default AddCoconutHeader;
