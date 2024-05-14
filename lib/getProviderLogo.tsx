import { FaGithub, FaGoogle, FaKey } from "react-icons/fa"

const getProviderLogo = (provider: string) => {
  const style = { marginRight: '0.5rem', fontSize: '1.25rem'};
  const ariaLabel = `${provider} logo`;
  switch (provider) {
    case 'GitHub':
      return <FaGithub style={style} aria-label={ariaLabel} />
    case 'Google':
      return <FaGoogle style={style} aria-label={ariaLabel} />
    case 'Credentials':
      return <FaKey style={style} aria-label={ariaLabel} />
    default:
      return null;
  }
};


const ProviderLogo = ({ provider }: { provider: string }) => {
  const Logo = getProviderLogo(provider);
  return Logo;
};

export default ProviderLogo;
