import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <div className="footer-links">
            <a href="https://www.linkedin.com/in/mohamed-sanaany-52112b1b2/" target="_blank">
                <FontAwesomeIcon className="icon" icon={faLinkedin} />
            </a>
            <a href="https://github.com/sanaanymoe" target="_blank">
                <FontAwesomeIcon className="icon" icon={faGithub} />
            </a>

            <a href="https://sanaany.netlify.app/" target="_blank">
                <FontAwesomeIcon className="icon" icon={faGlobe} />
            </a>
        </div>
    )
}

export default Footer
