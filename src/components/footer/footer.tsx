import FooterSocialIcon from "./FooterSocialIcon";
import Link from "next/link";

const Footer = () => (
  <footer className="relative flex h-40 justify-around bg-[#112211] pt-8 text-[#676767] sm:justify-between sm:px-[39px] md:justify-between md:px-[111px] lg:px-[104px]">
    <p>&copy;codeit - 2024</p>
    <nav className="flex gap-[30px]">
      <Link href="/" className="capitalize">
        privacy policy
      </Link>
      <Link href="/" className="uppercase">
        faq
      </Link>
    </nav>
    <div className="flex gap-3 sm:absolute sm:left-1/2 sm:top-[82px] sm:-translate-x-1/2 sm:-translate-y-1/2">
      <FooterSocialIcon socialNetworkServiceName="facebook" />
      <FooterSocialIcon socialNetworkServiceName="twitter" />
      <FooterSocialIcon socialNetworkServiceName="youtube" />
      <FooterSocialIcon socialNetworkServiceName="instagram" />
    </div>
  </footer>
);

export default Footer;
