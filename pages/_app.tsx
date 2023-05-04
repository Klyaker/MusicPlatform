import React, {FC} from "react";
import {wrapper} from '../store';
import { AppProps } from "next/app";


const WrappedApp: FC<AppProps> = ({Component, pageProps}) => (
    <Component {...pageProps} />
)
  

export default wrapper.withRedux(WrappedApp);