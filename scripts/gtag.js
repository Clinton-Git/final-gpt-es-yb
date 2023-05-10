import Script from "next/script";

export const applyGtagScript = () => {
  let aw;
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    aw = urlParams.get("aw");
  }

  return (
    <Script id="gtag">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-${aw}');
        `}
    </Script>
  );
};
