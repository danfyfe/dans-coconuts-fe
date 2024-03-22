import { FaPlus } from 'react-icons/fa'
import ButtonIcon from '../core/utility/button-icon';
import { useContext } from 'react';
import { CoconutContext } from '@/context/CoconutProvider';

const AddCoconut = () => {
  const { addCoconut } = useContext(CoconutContext);
  return (
    <ButtonIcon
      onClick={addCoconut}
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
