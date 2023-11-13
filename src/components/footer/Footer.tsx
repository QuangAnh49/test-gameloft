import './footer.scss';
import logoFooter from '../../assets/logoFooter.svg';
import facebookFooter from '../../assets/facebookFooter.svg';
import linkedInFooter from '../../assets/linkedInFooter.svg';
import twitterFooter from '../../assets/twitterFooter.svg';
import youtubeFooter from '../../assets/youtubeFooter.svg';
import languageFooter from '../../assets/languageFooter.svg';
import dropdownIcon from '../../assets/dropdownIcon.svg';
import facebookIconM from '../../assets/facebookIconM.svg';
import linkedInIconM from '../../assets/linkedInIconM.svg';
import twitterIconM from '../../assets/twitterIconM.svg';
import youtubeIconM from '../../assets/youtubeIconM.svg';

import { languageData, linkGameData, linkLegalData } from '../../constants';
import { useResponsive } from '../../utils';
import { useState } from 'react';

import { motion } from 'framer-motion';
function Footer() {
  const [open, setOpen] = useState(false);
  const [languageValue, setLanguageValue] = useState('English');

  const handleOpenDropdown = () => {
    setOpen(prev => !prev);
  };
  const { isMobile } = useResponsive();
  if (isMobile) {
    return (
      <div className="footer">
        <div className="social-logo">
          <h2>Follow Us</h2>
          <div className="logo-container">
            <img src={facebookIconM} alt="Facebook logo" />
            <img src={linkedInIconM} alt="LinkedIn logo" />
            <img src={twitterIconM} alt="Twitter logo" />
            <img src={youtubeIconM} alt="Youtube logo" />
          </div>
        </div>
        <div className="footer-container">
          <div className="footer-container__socials">
            <img src={logoFooter} alt="logo Footer" />
            <div className="footer__links">
              <div className="link-item">
                <ul>
                  {linkGameData.map(linkGame => (
                    <li key={linkGame}>
                      <a href="/">{linkGame}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="link-item">
                <ul>
                  {linkLegalData.map(linkLegal => (
                    <li key={linkLegal}>
                      <a>{linkLegal}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-sign">
            <p>
              ©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo are trademarks of Gameloft in the U.S.
              and/or other countries. All other trademarks are the property of their respective owners.
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="footer">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="footer-container wrapper"
        >
          <div className="footer-container__socials">
            <img src={logoFooter} alt="logo Footer" />
            <div className="social-logo">
              <h2>Follow Us</h2>
              <div className="logo-container">
                <img src={facebookFooter} alt="Facebook logo" />
                <img src={linkedInFooter} alt="LinkedIn logo" />
                <img src={twitterFooter} alt="Twitter logo" />
                <img src={youtubeFooter} alt="Youtube logo" />
              </div>
            </div>
            <div className="language-container" onClick={handleOpenDropdown}>
              <img src={languageFooter} alt="World logo" />
              <p>{languageValue}</p>
              <img src={dropdownIcon} alt="Dropdown Icon" />
              {open && (
                <div className="language-options">
                  {languageData.map(language => (
                    <p onClick={() => setLanguageValue(language.text)} key={language.text}>
                      {language.text}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="footer-container__links">
            <div className="link-item">
              <h3>VISIT</h3>
              <ul>
                {linkGameData.map(linkGame => (
                  <li key={linkGame}>
                    <a href="/">{linkGame}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="link-item">
              <h3>LEGAL</h3>
              <ul>
                {linkLegalData.map(linkLegal => (
                  <li key={linkLegal}>
                    <a href="/">{linkLegal}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="footer-sign wrapper"
        >
          <p>
            ©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo are trademarks of Gameloft in the U.S.
            and/or other countries. All other trademarks are the property of their respective owners.
          </p>
        </motion.div>
      </div>
    );
  }
}

export default Footer;
