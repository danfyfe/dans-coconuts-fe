'use client'
import { useContext } from 'react';
import { CoconutContext } from '@/context/CoconutsProvider';
import ContentContainer from '../core/containers/content-container';
import AddCoconutHeader from './add-coconut-header';
import TextArea from '../core/form-elements/inputs/text-area';
import TextInput from '../core/form-elements/inputs/text-input';
import Button from '../core/utility/button';


const AddCoconutForm = () => {
  const {
    formActive, toggleCoconutForm,
    messageTitle, handleMessageTitle, messageContent, handleMessageContent,
    handleReceiverID, setMessageReceiverID
    } = useContext(CoconutContext);

  return (
    <>
      {
        formActive ? (
          <ContentContainer className="max-w-[95%] md:max-w-[30%]">
            <AddCoconutHeader />
            <form className='mt-4'>
              <TextInput
                label='To:'
                name="message-receiver"
                placeholder='Start typing to search by username'
              />
              <TextInput
                label="Title:"
                name="message-title"
                placeholder='Message title...'
                onChange={handleMessageTitle}
              />
              <TextArea
                label="Message:"
                name="message"
                placeholder="Send a user a message..."
                onChange={handleMessageContent}
              ></TextArea>
              <div className="flex">
                <Button className="block ml-auto mr-2 max-w-20 !p-0">
                  Send
                </Button>
                <Button
                  className="max-w-20 !p-0"
                  onClick={toggleCoconutForm}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </ContentContainer>
        ) : null
      }
    </>
  )
};

export default AddCoconutForm;
