import { FaPlus } from 'react-icons/fa'
import ButtonIcon from '../core/utility/button-icon';

const AddCoconut = () => {
  return (
    <ButtonIcon
      ariaLabel='Add coconut'
      className='
        bg-white bg-opacity-50 rounded-full text-coconut_brown shadow-sm
      '
    >
      <FaPlus />
    </ButtonIcon>
  )
};

export default AddCoconut;
