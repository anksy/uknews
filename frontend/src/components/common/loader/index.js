import { CircularProgress } from "@material-ui/core";
import "./index.scss";

export default function Loader({ text }) {
    return (<div className="loading-section">
        <CircularProgress />
        <br />
        {text}
    </div>
    )
}