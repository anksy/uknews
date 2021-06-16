import { Typography } from '@material-ui/core';
import "./index.scss";

export default function NewsArticle({ article }) {
    return (
        <div className="news-article">
            {article.urlToImage && <div className="news-media" style={{ backgroundImage: `url('${article.urlToImage}')` }}>
            </div>}

            <div className="news-title">
                <h2> {article.title} </h2>
            </div>

            <div className="news-short-content">
                <Typography variant="body2" color="textSecondary" component="p">
                    {article.description} {article.url && <a href={article.url} target="_blank" className="news-link">[read more]</a>}
                </Typography>
            </div>
        </div>
    )
}