import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import ContentContainer from "../core/containers/content-container";
import H1 from "../core/typography/H1";
import P from "../core/typography/P";
import ContactForm from "./contact-form";
import HR from "../core/utility/HR";

const ContactInfo = () => {
  return (
    <ContentContainer className="lg:w-2/5 text-lg overflow-auto max-h-[calc(100vh-8rem)]">
      <H1 className="mb-4">Contact</H1>
      <ContactForm />
      <HR text="OR TRY THESE" />
      <div className="flex flex-col justify-between underline mb-2">
        <a className="flex justify-start items-center" href="mailto:fyfedaniel@gmail.com" target="_blank">
          <FaMailBulk aria-label="email icon" />
          <span className="ml-3">fyfedaniel@gmail.com</span>
        </a>
        <a className="flex justify-start items-center" href="https://www.linkedin.com/in/danfyfe/" target="_blank">
          <FaLinkedin aria-label="LinkedIn icon" />
          <span className="ml-3">LinkedIn</span>
        </a>
        <a className="flex justify-start items-center" href="https://github.com/danfyfe" target="_blank">
          <FaGithub aria-label="LinkedIn icon" />
          <span className="ml-3">GitHub</span>
        </a>
      </div>
      <P>
        Feel free to reach out!
      </P>
    </ContentContainer>
  )
};

export default ContactInfo;
