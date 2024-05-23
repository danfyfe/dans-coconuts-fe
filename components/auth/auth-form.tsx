'use client'
import { useCallback, useState } from 'react';
import TextInput from "@/components/core/form-elements/inputs/text-input";
import Button from "@/components/core/utility/button";
import { IAuthForm } from '@/interfaces/forms';
import H1 from '../core/typography/H1';
import P from '../core/typography/P';
import NextLink from '../core/utility/link';
import { createUser, getUser } from '@/app/api/users/methods';

const AuthForm = ({ type }: IAuthForm) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSetEmail = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value)
  }, []);

  const handleSetUsername = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUsername(value)
  }, []);

  const handleSetPassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value)
  }, []);

  return (
    <>
      <form className="flex flex-col justify-center items-center">
        <TextInput
          label="email"
          name="email"
          id="auth-email"
          className='w-full'
          onChange={handleSetEmail}
        />
        {
          type === 'signup' ? (
            <TextInput
              label="username"
              name="username"
              id="auth-username"
              className='w-full'
              onChange={handleSetUsername}
            />
          ) : null
        }
        <TextInput
          type="password"
          label="password"
          name="password"
          id="auth-password"
          className='w-full'
          onChange={handleSetPassword}
        />
        {
          type === 'signup' ? (
            <Button
              className="mt-2"
              type="button"
              onClick={() => createUser({ email, username, password })}
            >
              Submit
            </Button>
          ) : (
            <Button
              className="mt-2"
              type="button"
              onClick={() => getUser({ email, password })}
            >
              Submit
            </Button>
          )
        }
    </form>
    <P className="mt-4 text-center">
      {
        type === 'signin' ? <><NextLink href='/signup'>Need to create an account? Sign Up!</NextLink></> : <><NextLink href='/signin'>Already have an account? Sign In!</NextLink></> 
      }
    </P>
  </>
  )
};

export default AuthForm;
