import axios from "axios";
// import uuid from 'react-uuid';
// import store from "../redux-store";
// import {loadingSpinnerAction} from "../redux-store/loading-spinner-slice.ts";
// import {isTokenValid, logoutFunction} from "../utils/auth-utils.ts";
// import BackendEndpoints from "../constants/backend-endpoints.ts";
// import {getNewAccessToken} from "../pages/login/services/login.service.ts";
// import {authSlice} from "../redux-store/auth-slice.ts";
// import LocalStorageConstants from "../constants/local-storage.constants.ts";
// import LoginResponseModel from "../pages/login/models/login-response.model.ts";


const AxiosInstance = axios.create({
    // baseURL: 'https://apidevinternal.onsys.com.au',
    baseURL: 'http://localhost:3001',
    timeout: 50000
});

// const accessTokenShouldNotAttachedUrls = [BackendEndpoints.GET_NEW_ACCESS_TOKEN_BY_REFRESH_TOKEN];

let accessTokenSettingInterceptorId = null;

let newTokenRequestAlreadyStarted = false;

export const setRequestInterceptor = () => {

    // if (accessTokenSettingInterceptorId !== null) {
    //     AxiosInstance.interceptors.request.eject(accessTokenSettingInterceptorId);
    // }

    accessTokenSettingInterceptorId = AxiosInstance.interceptors.request.use(
        async (config) => {

            // if (accessTokenShouldNotAttachedUrls.some(url => config.url?.includes(url))) {
            //     console.log("Access token should not attached url found: ", config.url);
            //     return config
            // }

            // Check if access token is valid or not
            // if (isTokenValid(store.getState().authSlice.tokens!.accessToken)) {
            //     console.log("Access token is valid");
            //     config.headers['Authorization'] = `Bearer ${store.getState().authSlice.tokens!.accessToken}`;
            //     return config;
            // } else {

            // Access token is in the redux store in Invalid

            // console.log("Access token is In-Valid");

            // Check Local Storage for new Access Token

            // const localStorageToken = localStorage.getItem(LocalStorageConstants.LOGIN_FULL_RESPONSE);
            //
            // if(localStorageToken) {
            //
            //     const localStorageTokenConverted: LoginResponseModel = JSON.parse(localStorage.getItem(LocalStorageConstants.LOGIN_FULL_RESPONSE)!);
            //
            //     if (isTokenValid(localStorageTokenConverted.accessToken)) {
            //         console.log("Valid Access token Found from local storage", config.url);
            //         store.dispatch(authSlice.actions.userLogin(localStorageTokenConverted));
            //         config.headers['Authorization'] = `Bearer ${localStorageTokenConverted.accessToken}`;
            //         return config;
            //     }
            //
            // } else {
            //     logoutFunction();
            // }
            //
            // // Check Refresh Token is Valid
            // if (!isTokenValid(store.getState().authSlice.tokens!.refreshToken)) {
            //     logoutFunction();
            // }

            // Request Refresh Token From Backend
            // try {
            //     if (!newTokenRequestAlreadyStarted) {
            //         console.log("Requesting New Access Token From Backend: ", config.url);
            //         newTokenRequestAlreadyStarted = true;
            //         const newAccessToken = await getNewAccessToken(store.getState().authSlice.tokens!.refreshToken);
            //         console.log("New Access Token Received From Backend: ", config.url);
            //         store.dispatch(authSlice.actions.setNewAccessToken(newAccessToken.accessToken));
            //         newTokenRequestAlreadyStarted = false;
            //         config.headers['Authorization'] = `Bearer ${newAccessToken.accessToken}`;
            //         return config;
            //     } else {
            //         const waitingForNewAccessToken = async () => {
            //             if (!newTokenRequestAlreadyStarted) {
            //                 console.log("Valid Access Token Received From Backend After Waiting: ", config.url);
            //                 config.headers['Authorization'] = `Bearer ${store.getState().authSlice.tokens!.accessToken}`;
            //                 return config;
            //             } else {
            //                 // New Access Token Request Already Started. So, wait for 1 second and try again
            //                 console.log("New Access Token Request Already Started. So, wait for 1 second and try again: ", config.url);
            //                 await new Promise(resolve => setTimeout(resolve, 1000));
            //                 await waitingForNewAccessToken();
            //             }
            //         }
            //         await waitingForNewAccessToken();
            //     }
            // } catch (error) {
            //     console.log("Error while refreshing access token: ", error);
            //     // todo - handle refresh token error
            // }
            // return config
            // }

        },
        (error) => {
            return Promise.reject(error);
        }
    );

}

// Loading Spinner Code

AxiosInstance.interceptors.request.use((config) => {
    // store.dispatch(loadingSpinnerAction.startApiCall());
    return config
}, (error) => {
    return Promise.reject(error);
});

AxiosInstance.interceptors.response.use((response) => {
    // store.dispatch(loadingSpinnerAction.endApiCall());
    return response;
}, (error) => {
    // store.dispatch(loadingSpinnerAction.endApiCall());
    return Promise.reject(error);
});

export default AxiosInstance;
