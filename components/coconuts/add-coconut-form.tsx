'use client'
import { useContext } from 'react';
import { CoconutContext } from '@/context/CoconutsProvider';
import ContentContainer from '../core/containers/content-container';
import AddCoconutHeader from './add-coconut-header';


const AddCoconutForm = () => {
  const { formActive } = useContext(CoconutContext);

  return (
    <>
      {
        formActive ? (
          <ContentContainer className="max-w-[95%] md:max-w-[45%]">
            <AddCoconutHeader />
          </ContentContainer>
        ) : null
      }
    </>
  )
};

export default AddCoconutForm;
