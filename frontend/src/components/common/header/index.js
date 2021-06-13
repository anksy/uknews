import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { APPNAME } from "../../../constants";
import "./index.scss";

export default function Header() {
    return (
        <AppBar position="static" className="main-header">
            <Toolbar>
                <Typography variant="h6" noWrap className="app-title">
                    {APPNAME}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}