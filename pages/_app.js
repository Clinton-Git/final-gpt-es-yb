import "../styles/globals.css";
import '../styles/intlTelInput.css';
import '../styles/isValidNumber.css';
import { applyFBScript } from "../scripts/fb";
import { applyAWScript } from "../scripts/google";
import { applyGtagScript } from "../scripts/gtag";
import { applyLeadScript } from "../scripts/lead";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {applyFBScript()}
      {applyAWScript()}
      {applyGtagScript()}
      {applyLeadScript()}
    </>
  );
}

export default MyApp;
