import { commonApi } from "./commonApi"
import { serverURL } from "./serverUrl"

//Api for add diary data
export const addDiaryDataApi = async (reqBody) => {
    return await commonApi('POST', `${serverURL}/add-diary-data`, reqBody)
}