import AxiosService from "./axios.service";

export const getAllProducts = async () => {
    try {
        const apiResponse = await AxiosService.get(
            '/all-products'
        )
        return apiResponse.data;
    } catch (apiError) {
        // showNotification("error", getNotificationDescription(apiError));
        throw apiError;
    }
}

export const searchProducts = async (page, limit, product) => {
    try {
        const apiResponse = await AxiosService.post(
            '/all-products/search?page=' + page + 'limit=' + limit, product
        )
        return apiResponse.data;
    } catch (apiError) {
        // showNotification("error", getNotificationDescription(apiError));
        throw apiError;
    }
}


export const createReviewForProduct = async (productId, review) => {
    try {
        const apiResponse = await AxiosService.post(
            '/all-review-products/' + productId, review
        )
        return apiResponse.data;
    } catch (apiError) {
        // showNotification("error", getNotificationDescription(apiError));
        throw apiError;
    }
}


export const getAllReviewForProduct = async (productId) => {
    try {
        const apiResponse = await AxiosService.get(
            '/all-review-products/' + productId,
        )
        return apiResponse.data;
    } catch (apiError) {
        // showNotification("error", getNotificationDescription(apiError));
        throw apiError;
    }
}


export const getAllQnAForProduct = async (productId) => {
    try {
        const apiResponse = await AxiosService.get(
            '/all-qna-products/' + productId,
        )
        return apiResponse.data;
    } catch (apiError) {
        // showNotification("error", getNotificationDescription(apiError));
        throw apiError;
    }
}
