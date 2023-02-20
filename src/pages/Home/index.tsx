import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent1 from "../../content/MiddleBlockContent1.json";
import MiddleBlockContent2 from "../../content/MiddleBlockContent2.json";
import MiddleBlockContent3 from "../../content/MiddleBlockContent3.json";
import MiddleBlockContent4 from "../../content/MiddleBlockContent4.json";
import AboutContent from "../../content/AboutContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="accident.png"
        id="intro"
      />
        <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="gavel.png"
        id="about"
      />
      <MiddleBlock
        title={MiddleBlockContent1.title}
        content={MiddleBlockContent1.text}
        button={MiddleBlockContent1.button}
        id="MiddleBlockContent1"
      />
      <MiddleBlock
        title={MiddleBlockContent2.title}
        content={MiddleBlockContent2.text}
        button={MiddleBlockContent2.button}
        
      />
      <MiddleBlock
        title={MiddleBlockContent3.title}
        content={MiddleBlockContent3.text}
        button={MiddleBlockContent3.button}
      />
      <MiddleBlock
        title={MiddleBlockContent4.title}
        content={MiddleBlockContent4.text}
        button={MiddleBlockContent4.button}
      />
      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
