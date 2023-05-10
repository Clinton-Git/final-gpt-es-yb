import Script from "next/script";

export const applyLeadScript = () => {
  let aw, conv;
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    aw = urlParams.get("aw");
    conv = urlParams.get("conv");
  }

  return (
    <Script id="lead">
      {`
        function lead() { 
          fbq('track', 'Lead');
          gtag('event', 'conversion', {'send_to': 'AW-${aw}/${conv}'});
         };
        `}
    </Script>
  );
};
