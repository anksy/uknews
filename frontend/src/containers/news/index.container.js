
import { Fragment, useContext } from "react";
import News from "../../components/news";
import { GlobalCtx } from "../../App";

export default function NewsContainer() {
    const settings = useContext(GlobalCtx);
    return (
        <Fragment>
            <News config={settings} />
        </Fragment>
    );
}