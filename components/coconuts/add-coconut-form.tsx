'use client'
import { useContext } from 'react';
import { CoconutContext } from '@/context/CoconutsProvider';
import ContentContainer from '../core/containers/content-container';
import AddCoconutHeader from './add-coconut-header';
import TextArea from '../core/form-elements/inputs/text-area';
import TextInput from '../core/form-elements/inputs/text-input';
import SearchInput from '../core/form-elements/inputs/search-input';
import Button from '../core/utility/button';
import getErrorMessage from '@/lib/errors/getErrorMessage';
import { UserContext } from '@/context/UserProvider';
import P from '../core/typography/P';


const AddCoconutForm = () => {
  const {
    formActive, toggleCoconutForm, addCoconut,
    messageTitle, handleMessageTitle, messageContent, handleMessageContent,
    handleMessageReceiver, messageReceiver, resetForm
  } = useContext(CoconutContext);

  const { user } = useContext(UserContext);

  return (
    <>
      {
        formActive && !!user ? (
          <ContentContainer className="max-w-[95%] md:max-w-[30%]">
            <AddCoconutHeader />
            <form className='mt-4'>
              <SearchInput
                user={user}
                indexName="dans-coconuts.Users"
                label='user'
                name="message-receiver"
                required
                placeholder='Start typing to search by username'
                handleSelection={handleMessageReceiver}
              />
              <TextInput
                label="title"
                name="message-title"
                placeholder='Message title...'
                required
                onChange={handleMessageTitle}
                value={messageTitle}
              />
              <TextArea
                label="message"
                name="message"
                placeholder="What do you want to say?"
                required
                onChange={handleMessageContent}
                value={messageContent}
              ></TextArea>
              <div className="flex">
                <Button
                  className="block ml-auto mr-2 max-w-20 !p-0"
                  disabled={!messageReceiver || !messageContent || !messageTitle}
                  onClick={(e) => {
                    try {
                      addCoconut({
                        title: messageTitle,
                        content: messageContent,
                        sender: user,
                        receiver: messageReceiver
                      });
                    } catch(error) {
                      const message = getErrorMessage(error);
                      console.log('Error creating coconut! ', message);
                    } finally {
                      toggleCoconutForm();
                      resetForm();
                    }
                  }}
                >
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
        ) : (
          <P>Error loading user data!</P>
        )
      }
    </>
  )
};

export default AddCoconutForm;
