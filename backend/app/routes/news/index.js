const router = require('express').Router();
const { getEverythingApi, topHeadlinesApi } = require("./controller");

router.get('/everything', getEverythingApi);
router.get('/top-headlines', topHeadlinesApi);

module.exports = router;
