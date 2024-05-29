import { FaPlus } from 'react-icons/fa'
import ButtonIcon from '../core/utility/button-icon';
import { useContext } from 'react';
import { CoconutContext } from '@/context/CoconutsProvider';

const AddCoconut = () => {
  const { toggleCoconutForm, formActive } = useContext(CoconutContext);
  return (
    <ButtonIcon
      id="add-coconut-btn"
      onClick={toggleCoconutForm}
      ariaLabel='Add coconut'
      disabled={formActive ? true : undefined}
      className='
        bg-white bg-opacity-50 rounded-full text-coconut_brown shadow-sm
      '
    >
      <FaPlus />
    </ButtonIcon>
  )
};

export default AddCoconut;
