import AxiosService from "./axios.service";

export const getAllShippingDetailsByUserId = async (id) => {
    try {
        const apiResponse = await AxiosService.get(
            '/shipping-details-user/' + id
        )
        return apiResponse.data;
    } catch (apiError) {
        // showNotification("error", getNotificationDescription(apiError));
        throw apiError;
    }
}
