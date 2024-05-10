import { FaRegTrashAlt, FaTrashAlt, FaTrash, FaTrashRestore, FaTrashRestoreAlt } from "react-icons/fa";
import P from "../core/typography/P";

const CoconutTrashCan = () => {
  return (
    <div
      className="absolute bottom-5 right-0"
    >
      <div className="relative">
        <FaTrash size={125} className="drop-shadow-sm" />
        <P className="absolute text-white text-center top-2/5 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">Coconuts<br/>Only</P>
      </div>
    </div>
  )
};

export default CoconutTrashCan;
