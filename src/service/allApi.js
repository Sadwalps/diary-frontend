import { commonApi } from "./commonApi"
import { serverURL } from "./serverUrl"

//Api for add diary data
export const addDiaryDataApi = async (reqBody) => {
    return await commonApi('POST', `${serverURL}/add-diary-data`, reqBody)
}

//Api for get diary data
export const getDiaryDataApi = async () => {
    return await commonApi('GET', `${serverURL}/get-diary-data`, "")
}