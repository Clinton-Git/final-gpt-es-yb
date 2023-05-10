import Script from "next/script";

export const applyAWScript = () => {
  let aw;
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    aw = urlParams.get("aw");
  }

  return (
      <Script
          strategy="beforeInteractive"
          id="aw"
          src={`https://www.googletagmanager.com/gtag/js?id=AW-${aw}`}
      />
  );
};
