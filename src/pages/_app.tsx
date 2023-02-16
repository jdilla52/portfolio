import {type AppType} from "next/dist/shared/lib/utils";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("../components/background"), {
    ssr: false,
});
import "../styles/globals.css";

const MyApp: AppType = ({Component, pageProps}) => {

    return (
        <>
            <Scene className='pointer-events-none'/>
            <Component {...pageProps} >
            </Component>
        </>
    );
};

export default MyApp;

