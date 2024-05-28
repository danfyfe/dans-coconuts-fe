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
          <ContentContainer>
            <AddCoconutHeader />
          </ContentContainer>
        ) : null
      }
    </>
  )
};

export default AddCoconutForm;
