const { getEverything, topHeadlines } = require("../../services/newsorg");
const { UNPROCESSABLE_ENTITY_422 } = require("../../constants/codes");

const getEverythingApi = (request, response) => {
    getEverything(request)
        .then(body => response.json(body))
        .catch(err => response.status(UNPROCESSABLE_ENTITY_422).json(err));
}

const topHeadlinesApi = (request, response) => {
    topHeadlines(request)
        .then(body => response.json(body))
        .catch(err => response.status(UNPROCESSABLE_ENTITY_422).json(err));
}

module.exports = {
    getEverythingApi,
    topHeadlinesApi
}