import { useEffect, useState, useCallback } from "react";
import { Container, Grid } from "@material-ui/core";
import { useDebouncedCallback } from 'use-debounce';
import NewsArticle from "./articles";
import Search from "../common/search";
import Loader from "../common/loader";
import { getTopHeadlines, getArticles } from "../../constants/api";
import { NO_DATA_FOUND, LOADING_TEXT } from "../../constants/messages";

export default function News({ config }) {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getTopHeadlines({ country: config.country })
            .then(({ articles }) => {
                setArticles(articles);
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            })
    }, [config.country]);

    const onValueChange = useDebouncedCallback(useCallback((q) => {
        setArticles([]);
        if (q) {
            setIsLoading(true);
            getArticles({ q })
                .then(({ articles }) => {
                    setArticles(articles);
                    setIsLoading(false);
                })
                .catch(() => {
                    setIsLoading(false);
                })
        }
    }, []), 400);

    return (
        <Container maxWidth={"md"}>
            <Grid container>
                <Search label="Search Articles" onValueChange={onValueChange} />
                <div className="news-wrapper">
                    {!isLoading && articles.length > 0 && articles.map((article, idx) => <NewsArticle key={`article_${idx}`} article={article} />)}

                    {/* when no data receive from server */}
                    {!isLoading && articles.length === 0 && NO_DATA_FOUND}

                    {/* when data is preparing */}
                    {isLoading && <Loader text={LOADING_TEXT} />}
                </div>
            </Grid>
        </Container>
    );
}