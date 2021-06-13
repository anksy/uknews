import http from "../services/http";
import { topHeadlineEndpoint, articlesEndpoint } from "./endpoint";

export const getTopHeadlines = (payload) => {
    return http.request(
        "get",
        topHeadlineEndpoint,
        payload
    );
}

export const getArticles = (payload) => {
    return http.request(
        "get",
        articlesEndpoint,
        payload
    );
}