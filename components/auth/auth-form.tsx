'use client'
import { useCallback, useState } from 'react';
import TextInput from "@/components/core/form-elements/inputs/text-input";
import Button from "@/components/core/utility/button";
import { IAuthForm } from '@/interfaces/forms';
import H1 from '../core/typography/H1';
import P from '../core/typography/P';
import NextLink from '../core/utility/link';

const AuthForm = ({ type }: IAuthForm) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
    <H1 className="mb-4">{type === 'login' ? <>Login</> : <>Sign Up</>}</H1>
      <form className="flex flex-col justify-center items-center">
        <TextInput
          label="username"
          name="username"
          id="auth-username"
          onChange={handleSetUsername}
        />
        <TextInput
          type="password"
          label="password"
          name="password"
          id="auth-password"
          onChange={handleSetPassword}
        />
        <Button
          className="mt-2"
          type="button"
        >
          Submit
        </Button>
    </form>
    <P className="mt-4 text-center">
      {
        type === 'login' ? <><NextLink href='/signup'>Need to create an account? Sign up!</NextLink></> : <><NextLink href='/login'>Already have an account? Log In!</NextLink></> 
      }
    </P>
  </>
  )
};

export default AuthForm;
