import { Row } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import { FooterSection, Extra, LogoContainer, FooterContainer } from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <FooterSection>
      <Extra>
        <Container>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <LogoContainer>
              <SvgIcon
                src="logo.svg"
                aria-label="homepage"
                width="101px"
                height="64px"
              />
            </LogoContainer>
            <Row width="30vw">
              <SocialLink
                href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER"
                src="whatsapp-black.svg"
              />
            </Row>
          </Row>
        </Container>
      </Extra>
    </FooterSection>
  );
};

export default withTranslation()(Footer);