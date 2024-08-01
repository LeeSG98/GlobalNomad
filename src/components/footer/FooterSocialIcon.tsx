const socialNetworkUrls: { [key: string]: string } = {
  facebook: "https://www.facebook.com",
  twitter: "https://www.twitter.com",
  instagram: "https://www.instagram.com",
  youtube: "https://www.youtube.com",
};

interface FooterSocialIconProps {
  socialNetworkServiceName: string;
}

const FooterSocialIcon: React.FC<FooterSocialIconProps> = ({
  socialNetworkServiceName,
}) => {
  const href = socialNetworkUrls[socialNetworkServiceName] || "/";

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img
        src={`/image/${socialNetworkServiceName}_icon.svg`}
        alt={`${socialNetworkServiceName}_logo`}
        className="h-5 w-5 cursor-pointer"
      />
    </a>
  );
};

export default FooterSocialIcon;
