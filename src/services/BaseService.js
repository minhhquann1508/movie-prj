import axios from "axios"
import { DOMAIN, TOKEN } from "../utils/constants"
export class BaseService {
    get(url) {
        return axios({
            method: 'GET',
            url: `${DOMAIN}/${url}`,
            headers: {
                TokenCybersoft: TOKEN
            }
        })
    }
    post(url, model) {
        return axios({
            method: 'POST',
            url: `${DOMAIN}/${url}`,
            data: model,
            headers: {
                TokenCybersoft: TOKEN
            }
        })
    }
    put(url, model) {
        return axios({
            method: 'PUT',
            url: `${DOMAIN}/${url}`,
            data: model,
            headers: {
                TokenCybersoft: TOKEN
            }
        })
    }
    delete(url) {
        return axios({
            method: 'DELETE',
            url: `${DOMAIN}/${url}`,
            headers: {
                TokenCybersoft: TOKEN
            }
        })
    }
}