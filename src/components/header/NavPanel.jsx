// react
import React from 'react';

// third-party
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// application
import CartIndicator from './IndicatorCart';
import Departments from './Departments';
import Indicator from './Indicator';
import IndicatorAccount from './IndicatorAccount';
import IndicatorSearch from './IndicatorSearch';
import NavLinks from './NavLinks';
import { Heart20Svg, LogoSmallSvg } from '../../svg';

function NavPanel(props) {
    const { layout, wishlist } = props;

    let logo = null;
    let departments = null;
    let searchIndicator;

    if (layout === 'compact') {
        logo = (
            <div className="nav-panel__logo">
                <Link to="/"><LogoSmallSvg /></Link>
            </div>
        );

        searchIndicator = <IndicatorSearch />;
    }

    if (layout === 'default') {
        departments = (
            <div className="nav-panel__departments">
                <Departments />
            </div>
        );
    }

    return (
        <div className="nav-panel">
            <div className="nav-panel__container container">
                <div className="nav-panel__row">
                    {logo}
                    {departments}

                    <div className="nav-panel__nav-links nav-links">
                        <NavLinks/>
                    </div>

                    <div className="nav-panel__indicators">
                        {searchIndicator}

                        <CartIndicator />


                        <IndicatorAccount />
                    </div>
                </div>
            </div>
        </div>
    );
}

NavPanel.propTypes = {
    /** one of ['default', 'compact'] (default: 'default') */
    layout: PropTypes.oneOf(['default', 'compact']),
};

NavPanel.defaultProps = {
    layout: 'default',
};

const mapStateToProps = (state) => ({
    wishlist: state.wishlist,
});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NavPanel);
