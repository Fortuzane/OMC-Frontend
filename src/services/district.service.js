import AxiosService from "./axios.service";

export const getAllDistrict = async () => {
    try {
        const apiResponse = await AxiosService.get(
            '/district'
        )
        return apiResponse.data;
    } catch (apiError) {
        // showNotification("error", getNotificationDescription(apiError));
        throw apiError;
    }
}
