import { Typography } from '@material-ui/core';
import { Link } from "react-router-dom";
import "./index.scss";

export default function NewsArticle({ article }) {
    return (
        <div className="news-article">
            {article.urlToImage && <div className="news-media">
                <img src={article.urlToImage} alt="news title" />
            </div>}

            <div className="news-title">
                <h2> {article.title} </h2>
            </div>

            <div className="news-short-content">
                <Typography variant="body2" color="textSecondary" component="p">
                    {article.description} <Link href={"/news"} className="news-link">[read more]</Link>
                </Typography>
            </div>
        </div>
    )
}