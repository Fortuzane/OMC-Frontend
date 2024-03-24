// react
import React from "react";

// third-party
import PropTypes from "prop-types";

function Currency(props) {
    const {value} = props;
    const symbol = "Rs.";

    function addComma() {
        const str = value.toString().split(".");
        if (str[0].length >= 4) {
            str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
        }
        let cent;
        if (str[1] !== undefined && str[1].length >= 3) {
            let incrementCount = 0;
            const centSplit = str[1]
                .split("")
                .splice(0, 3)
                .map((i, index) => {
                    incrementCount = index === 2 ? (parseInt(i) >= 5 ? 1 : 0) : 0;
                    return parseInt(i);
                });
            centSplit[1] = parseInt(centSplit[1]) + incrementCount;
            cent = centSplit
                .slice(0, 2)
                .map((i) => i.toString())
                .join("");
        } else {
            cent = str[1] === undefined ? "00" : str[1];
        }
        return [str[0], cent].join(".");
    }

    return <React.Fragment>{`${symbol}${addComma()}`}</React.Fragment>;
}

Currency.propTypes = {
    /** price value */
    value: PropTypes.number.isRequired,
    /** currency object, specify to override currentCurrency */
    currency: PropTypes.object,
    /** currency object */
    currentCurrency: PropTypes.object,
};

const mapStateToProps = (state) => ({
    currentCurrency: state.currency,
});

export default Currency;
