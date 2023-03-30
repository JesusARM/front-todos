/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import PropTypes from "prop-types";


// MyIcons.propTypes = {
//     Check: PropTypes.element,
//     Upload: PropTypes.element,
//   };
let MyIcons = {
    check: <FontAwesomeIcon className="mr-1" icon={solid("check")}></FontAwesomeIcon>,
    upload: <FontAwesomeIcon className="mr-1" icon={solid("upload")}></FontAwesomeIcon>,
    qrcode: <FontAwesomeIcon className="mr-1" icon={solid("qrcode")} />,
    plus: <FontAwesomeIcon className="mr-1" icon={solid("plus")} />,
}

export default MyIcons;



