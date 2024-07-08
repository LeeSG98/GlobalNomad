const FooterSocialIcon = ({ socialNetworkServiceName }: { socialNetworkServiceName: string }) => (
  <a href="/">
    <img
      src={`/image/${socialNetworkServiceName}_icon.svg`}
      alt={`${socialNetworkServiceName}_logo`}
      className="cursor-pointer w-5 h-5"
    />
  </a>
);

export default FooterSocialIcon;