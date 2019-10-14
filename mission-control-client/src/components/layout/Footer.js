import React from "react";
import { Container, Icon } from "semantic-ui-react";

const Footer = () => {
  return (
    <Container className="footer-container" fluid>
      <div className="footer-feedback">
        <Icon className="footer-chat-icon" name="chat" size="small" /><p>Feedback</p>
      </div>
      <div className="footer-misc">
        <p>Copyright © 2019 Lambda School - All rights reserved</p>
        <Icon name="github" size="big" className="footer-github-icon"/>
      </div>
    </Container>
  );
};

export default Footer;
