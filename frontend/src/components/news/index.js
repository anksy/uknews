import { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import NewsArticle from "./articles";
import Search from "../common/search";
import { getTopHeadlines, getArticles } from "../../constants/api";

export default function News() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getTopHeadlines({ country: "gb" })
            .then(({ articles }) => {
                setArticles(articles);
            })
    }, []);

    const onValueChange = (q) => {
        getArticles({ q })
            .then(({ articles }) => {
                setArticles(articles);
            })
    }

    return (
        <Container maxWidth={"md"}>
            <Grid container xs={12}>
                <Search label="Search Articles" onValueChange={onValueChange} />
                <div className="news-wrapper">
                    {
                        articles.map((article, idx) => <NewsArticle key={`article_${idx}`} article={article} />)
                    }
                </div>
            </Grid>
        </Container >
    );
}