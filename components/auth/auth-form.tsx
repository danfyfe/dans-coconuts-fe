'use client'
import { useCallback, useMemo, useState } from 'react';
import TextInput from "@/components/core/form-elements/inputs/text-input";
import Button from "@/components/core/utility/button";
import { IAuthForm } from '@/interfaces/forms';
import P from '../core/typography/P';
import NextLink from '../core/utility/link';
import { signUp, signIn } from '@/app/api/users/methods';
import Loading from '../core/loaders/loading';
import getErrorMessage from '@/lib/errors/getErrorMessage';
import { ISignInParams, ISignUpParams } from '@/models/User';
import { useRouter } from 'next/navigation';

const getAuthUrl = ({ type, referrerPath }: IAuthForm) => {
  const urlNoReferer = type === 'signin' ? '/signup' : 'signin';
  const urlWithReferer = `${type === 'signin' ? `/signup?referrer=${referrerPath}` : `/signin?referrer=${referrerPath}`}`;
  return referrerPath ? urlWithReferer : urlNoReferer;
}

const AuthForm = ({ type, referrerPath }: IAuthForm) => {
  const authUrl = useMemo(() => getAuthUrl({type, referrerPath }), [type, referrerPath]);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
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

  const handleSignIn = async ({ email, password }: ISignInParams) => {
    setLoading(true);
    try {
      await signIn({ email, password });
    } catch(error) {
      const message = getErrorMessage(error);
      console.log('Sign In failed: ', message);
    } finally {
      setLoading(false);
      if (referrerPath) {
        router.push(referrerPath);
      } else {
        router.push('/')
      }
      router.refresh();
    }
  };

  const handleSignUp = async ({ email, username, password }: ISignUpParams) => {
    setLoading(true);
    try {
      await signUp({ email, username, password });
    } catch(error) {
      const message = getErrorMessage(error);
      console.log('Sign Up failed: ', message);
    } finally {
      handleSignIn({ email, password });
    }
  };

  return (
    <>
    {
      loading ? (
        <Loading />
      ) : (
        <>
          <form className="flex flex-col justify-center items-center">
            <TextInput
              required
              label="email"
              name="email"
              type="email"
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
              required
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
                  onClick={() => handleSignUp({ email, password, username })}
                >
                  Submit
                </Button>
              ) : (
                <Button
                  className="mt-2"
                  disabled={!email || !password ? true : undefined}
                  type="button"
                  onClick={() => handleSignIn({ email, password })}
                >
                  Submit
                </Button>
              )
            }
        </form>
        <P className="mt-4 text-center">
          {
            type === 'signin' ? <><NextLink href={authUrl}>Need to create an account? <span className="underline">Sign Up!</span></NextLink></> : <><NextLink href={authUrl}>Already have an account? <span className="underline">Sign In!</span></NextLink></> 
          }
        </P>
        </>
      )
    }
  </>
  )
};

export default AuthForm;
