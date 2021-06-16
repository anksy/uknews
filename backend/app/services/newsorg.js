const NewsAPI = require("newsapi");
const { NEWSAPIKEY } = require("../constants");

const newsapi = new NewsAPI(NEWSAPIKEY);

const getEverything = (request) => {
    const { query } = request;
    return new Promise((resolve, reject) => {
        newsapi.v2.everything({ q: query.q })
            .then(res => resolve(res))
            .catch(err => reject({ success: false, error: err }));
    })
}

const topHeadlines = (request) => {
    const { query } = request;
    return new Promise((resolve, reject) => {
        newsapi.v2.topHeadlines({
            country: query.country
        })
            .then(res => resolve(res))
            .catch(err => reject({ success: false, error: err }));
    });
}

module.exports = {
    getEverything,
    topHeadlines
}