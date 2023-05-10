import Script from "next/script";
import { useState, useEffect } from "react";

export const applyFBScript = () => {
    const [pxSettings, setPxSettings] = useState({
        px: null, imgUrl: null
    });


    useEffect(() => {
        if (typeof window !== "undefined") {
            const urlParams = new URLSearchParams(window.location.search);

            setPxSettings({
                    px:  urlParams.get("px"),
                    imgUrl: `https://www.facebook.com/tr?id=${urlParams.get("px")}&ev=PageView&noscript=1`
                });
        }
    }, []);

    return (
        pxSettings.px && pxSettings.imgUrl && (
            <>
                <Script id="fb">
                    {`!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', ${pxSettings.px});
        fbq('track', 'PageView');`}
                </Script>

                <img
                    id="fb-img"
                    height="1"
                    width="1"
                    style={{display: "none"}}
                    src={pxSettings.imgUrl}
                />
            </>) )

};
