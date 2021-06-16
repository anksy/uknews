import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { ArrowBackIos } from '@material-ui/icons';
import Image404 from "../../../assets/images/404.jpg";

export default function FourOFour() {
    const history = useHistory();
    return (
        <div className="e404">
            <img src={Image404} alt="404-not found" />
            <p className="err-msg">
                <Button onClick={() => history.goBack()} variant="outlined" color="secondary">
                    <ArrowBackIos fontSize="small" /> Back to Home Page
                </Button>
            </p>
        </div>
    )
}