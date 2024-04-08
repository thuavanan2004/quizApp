import { get, post } from "../utils/request"
import {getCookie} from "../helpers/cookie";

export const getAnswerByUserId = async () => {
    const userId = getCookie("id");
    const result = await get(`answers?userId=${userId}`);
    return result;
}

export const getAnswers = async (id) => {
    const result = await get(`answers/?id=${id}`);
    return result;
}

export const postAnswers = async (option) => {
    const result = await post(`answers`, option);
    return result;
}