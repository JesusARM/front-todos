/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import PropTypes from "prop-types";

// MyIcons.propTypes = {
//     Check: PropTypes.element,
//     Upload: PropTypes.element,
//   };
let MyIcons = {
  check: <FontAwesomeIcon className="mr-1" icon={solid("check")} />,
  upload: <FontAwesomeIcon className="mr-1" icon={solid("upload")} />,
  qrcode: <FontAwesomeIcon className="mr-1" icon={solid("qrcode")} />,
  plus: <FontAwesomeIcon className="mr-1" icon={solid("plus")} />,
  search: <FontAwesomeIcon className="mr-1" icon={solid("search")} />,
  circle: <FontAwesomeIcon className="mr-1" icon={solid("circle")} />,
  paperclip: <FontAwesomeIcon className="mr-1" icon={solid("paperclip")} />,
  pen: <FontAwesomeIcon className="mr-1" icon={solid("pen")} />,
};

export { MyIcons };
