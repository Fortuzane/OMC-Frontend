// react
import React from "react";

// third-party
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

// application
import NavPanel from "./NavPanel";
import Search from "./Search";
import { LogoSvg } from "../../svg";
import mainLogo from "../../svg/logo.webp";

function Header(props) {
    const { layout } = props;
    let bannerSection;

    if (layout === "default") {
        bannerSection = (
            <div className="row" style={{ 'flex-wrap': 'nowrap', 'margin-right': '90px', 'margin-left': '50px','align-items': 'center' }}>
                <div className="site-header__logo">
                    <Link to="/">
                        <img src={mainLogo} style={{ "margin-left": "0px", width: "100%", height: "75px" }} />
                    </Link>
                </div>
                <div className="site-header__search">
                    <Search context="header" />
                </div>
                <div className="site-header__phone">
                    <div className="site-header__phone-title">
                        <FormattedMessage id="header.phoneLabel" defaultMessage="Customer Service" />
                    </div>
                    <div className="site-header__phone-number">
                        <FormattedMessage id="header.phone" defaultMessage="(800) 060-0730" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="site-header">
            {bannerSection}
            <div className="site-header__nav-panel">
                <NavPanel layout={layout} />
            </div>
        </div>
    );
}

Header.propTypes = {
    /** one of ['default', 'compact'] (default: 'default') */
    layout: PropTypes.oneOf(["default", "compact"]),
};

Header.defaultProps = {
    layout: "default",
};

export default Header;
