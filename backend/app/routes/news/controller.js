const { getEverything, topHeadlines } = require("../../services/newsorg");
const { BAD_REQUEST_400 } = require("../../constants/codes");

const getEverythingApi = (request, response) => {
    getEverything(request)
        .then(body => response.json(body))
        .catch(err => response.status(BAD_REQUEST_400).json(err));
}

const topHeadlinesApi = (request, response) => {
    topHeadlines(request)
        .then(body => response.json(body))
        .catch(err => response.status(BAD_REQUEST_400).json(err));
}

module.exports = {
    getEverythingApi,
    topHeadlinesApi
}