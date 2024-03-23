import AxiosService from "./axios.service";

export const getAllCategory = async () => {
    try {
        const apiResponse = await AxiosService.get(
            '/all-category'
        )
        return apiResponse.data;
    } catch (apiError) {
        // showNotification("error", getNotificationDescription(apiError));
        throw apiError;
    }
}
