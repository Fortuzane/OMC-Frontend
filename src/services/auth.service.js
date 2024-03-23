import AxiosService from "./axios.service";

export const login = async (user) => {
    try {
        const apiResponse = await AxiosService.post (
            '/login', user
        )
        return apiResponse.data;
    } catch (apiError) {
        // showNotification("error", getNotificationDescription(apiError));
        throw apiError;
    }
}

export const logout = async (user)  => {
    try {
        const apiResponse = await AxiosService.post(
            '/logout', user
        )
        return apiResponse.data;
    } catch (apiError) {
        // showNotification("error", getNotificationDescription(apiError));
        throw apiError;
    }
}

export const createUser = async (user) => {
    try {
        const apiResponse = await AxiosService.post(
            '/create-user', user
        )
        return apiResponse.data;
    } catch (apiError) {
        // showNotification("error", getNotificationDescription(apiError));
        throw apiError;
    }
}


export const updateUser = async (user) => {
    try {
        const apiResponse = await AxiosService.put(
            '/update-user', user
        )
        return apiResponse.data;
    } catch (apiError) {
        // showNotification("error", getNotificationDescription(apiError));
        throw apiError;
    }
}


export const deleteUser = async (id) => {
    try {
        const apiResponse = await AxiosService.delete(
            '/delete-user/' + id
        )
        return apiResponse.data;
    } catch (apiError) {
        // showNotification("error", getNotificationDescription(apiError));
        throw apiError;
    }
}

export const getUserById = async (id) => {
    try {
        const apiResponse = await AxiosService.get(
            '/user/' + id
        )
        return apiResponse.data;
    } catch (apiError) {
        // showNotification("error", getNotificationDescription(apiError));
        throw apiError;
    }
}

export const getAllCartByUserId = async (id) => {
    try {
        const apiResponse = await AxiosService.get(
            '/all-user-cart/' + id
        )
        return apiResponse.data;
    } catch (apiError) {
        // showNotification("error", getNotificationDescription(apiError));
        throw apiError;
    }
}

export const createCart = async (cart) => {
    try {
        const apiResponse = await AxiosService.post(
            '/user-cart', cart
        )
        return apiResponse.data;
    } catch (apiError) {
        // showNotification("error", getNotificationDescription(apiError));
        throw apiError;
    }
}
