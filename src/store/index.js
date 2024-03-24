import {configureStore} from '@reduxjs/toolkit';
import {useDispatch, useSelector} from "react-redux";
import {loadingSpinnerSlice} from "./loading-spinner-slice";
import {quickViewSlice} from "./quick-view-slice";
import {categorySlideBarSlice} from "./category-slidebar-slice";

const store = configureStore({
    reducer: {
        // mainHeader: mainHeaderSlice.reducer,
        // authSlice: authSlice.reducer,
        loadingSpinnerSlice: loadingSpinnerSlice.reducer,
        quickViewActionSlice: quickViewSlice.reducer,
        categorySlideBarActionSlice: categorySlideBarSlice.reducer,
        // dualScreenData:dualScreenDataSlice.reducer,
        // registrationSlice: registrationSlice.reducer,
        // deviceManagement: deviceManagementSlice.reducer,
        // prnImage: prnImageSlice.reducer,
    }
});

// import store from "./store";

export default store;
