'use client'
import { useCallback, useState } from "react";
import TextInput from "../core/form-elements/inputs/text-input";
import TextArea from "../core/form-elements/inputs/text-area";
import Button from "../core/utility/button";
import Loading from "../core/loaders/loading";
import getErrorMessage from "@/lib/errors/getErrorMessage";
import { IContactEmailParams, sendContactEmail } from "@/app/api/contact/methods";
import P from "../core/typography/P";
import { FaThumbsUp } from "react-icons/fa";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('');

  const handleSetEmail = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value)
  }, []);

  const handleSetSubject = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSubject(value)
  }, []);

  const handleSetMessage = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setMessage(value)
  }, []);

  const handleSubmit = async ({ email, subject, message } : IContactEmailParams) => {
    setLoading(true);
    try {
      const mailResp = await sendContactEmail({
        email,
        subject,
        message
      });
      console.log(mailResp)
      setSuccess(true);
    } catch(error) {
      const message = getErrorMessage(error);
      setError(message);
      setLoading(false);
    }
  };

  return (
    <>
    {
      loading ? (
        <>
          {
            success ? (
              <div className="text-center mb-2 flex flex-col justify-center items-center">
                <P>Thanks!</P>
                <P>I&apos;ll get back to you as soon as I can.</P>
                <FaThumbsUp className="mt-2" />
              </div>
            ) : (
              <div className="">
                <Loading />
              </div>
            )
          }
        </>
      ) : (
        <form className="mb-2">
          <TextInput
            label="Your email"
            placeholder="Your email"
            name="email"
            id="contact-email-input"
            onChange={handleSetEmail}
          />
          <TextInput
            label="Subject"
            placeholder="Subject"
            name="subject"
            id="contact-subject-input"
            onChange={handleSetSubject}
          />
          <TextArea 
            label="Message"
            placeholder="Message"
            name="message"
            id="contact-message-input"
            onChange={handleSetMessage}
          />
          <Button
            className="block ml-auto w-full md:w-auto"
            onClick={() => handleSubmit({ email, subject, message })}
          >
            Submit
          </Button>
        </form>
      )
    }
    </>
  )
};

export default ContactForm;
