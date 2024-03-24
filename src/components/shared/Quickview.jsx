// react
import React from 'react';

// third-party
import {Modal} from 'reactstrap';

// application
import Product from './Product';
import {Cross20Svg} from '../../svg';
import {quickviewClose} from '../../store/quickview';
import PropTypes from "prop-types";
import Layout from "../Layout";
import {useDispatch, useSelector} from "react-redux";
import {quickViewAction} from "../../store/quick-view-slice";

function Quickview() {

    let productView;

    const quickView = useSelector((state) => state.quickViewActionSlice);
    const dispatch = useDispatch()

    if (quickView.product !== null) {
        productView = <Product product={quickView.product} layout="quickview"/>;
    }

    const toggleButton = () =>{
        dispatch(quickViewAction.setOpen(false));
    }

    return (
        <Modal isOpen={quickView.open} toggle={toggleButton} centered size="xl">
            <div className="quickview">
                <button className="quickview__close" type="button" onClick={toggleButton}>
                    <Cross20Svg/>
                </button>

                {productView}
            </div>
        </Modal>
    );
}

// const mapStateToProps = (state) => ({
//     open: state.quickview.open,
//     product: state.quickview.product,
// });

// const mapDispatchToProps = {
//     quickviewClose,
// };

// Quickview.propTypes = {
//     // headerLayout: PropTypes.oneOf(['default', 'compact']),
//     product: PropTypes.element.isRequired,
//     open: PropTypes.element.isRequired,
//     quickviewClose: PropTypes.element.isRequired
// };

// Quickview.defaultProps = {
//     headerLayout: 'default',
// };

export default Quickview;
