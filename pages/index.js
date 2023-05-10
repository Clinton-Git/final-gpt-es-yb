import { useState, useEffect } from "react";

import classNames from "classnames";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";



export default function Home() {
  const [utm_content, setUtm_content] = useState(null);
  const [utm_source, setUtm_source] = useState(null);
  const [utm_campaign, setUtm_campaign] = useState(null);
  const [utm_medium, setUtm_medium] = useState(null);
  const [utm_term, setUtm_term] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      setUtm_content(urlParams.get("utm_content"));
      setUtm_source(urlParams.get("utm_source"));
      setUtm_campaign(urlParams.get("utm_campaign"));
      setUtm_medium(urlParams.get("utm_medium"));
      setUtm_term(urlParams.get("utm_term"));
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>GPT 3.5</title> 
        <meta name="description" content="" /> 
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"
          integrity="sha512-pumBsjNRGGqkPzKHndZMaAG+bir374sORyzM3uulLV14lN5LyykqNk8eEeUlUkB3U0M4FApyaHraT65ihJhDpQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/intlTelInput.min.js"
          integrity="sha512-+gShyB8GWoOiXNwOlBaYXdLTiZt10Iy6xjACGadpqMs20aJOoh+PJt3bwUVA6Cefe7yF7vblX6QwyXZiVwTWGg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>LOGO</div>
        TODO
        <a
          onClick={() => {
            const form = document.getElementById("form");
            form.scrollIntoView({ behavior: "smooth" });
          }}
          className={styles.button}
        >
          ÚNETE AHORA
        </a>
      </header>
      <main className={styles.main}>
        <h1 className={styles.mainTitle}>
          <span className={styles.title}>Asegura Tu Futuro Financiero</span>{" "}
          <br />
          Con La IA Más Avanzada Del Planeta
        </h1>
        <div className={styles.videoContainer}>
          <video controls muted autoplay  className={styles.video}>
            <source src="/vid.mp4" type="video/mp4" />
          </video>
          <a
            onClick={() => {
              const form = document.getElementById("form");
              form.scrollIntoView({ behavior: "smooth" });
            }}
            className={classNames(styles.button, styles.videoButton)}
          >
            Empezar
          </a>
        </div>
        <div className={styles.firstSection}>
          <div className={classNames(styles.firstRow, styles.blockStyles)}>
            <div className={styles.firstBlockText}>
              <h3 className={styles.firstBlockTitle}>Velocidad y eficiencia:</h3>
              <p>
                {" "}
                GPT 3.5 puede analizar grandes cantidades de datos mucho más rápido y con mayor precisión que los humanos, lo que permite una toma de decisiones más rápida y una ejecución más eficiente de las operaciones.
              </p>
            </div>
            <div
              className={classNames(styles.firstBlockImage, styles.blockStyles)}
            >
              <Image src={"/gpt1.avif"} fill className={styles.image1} />
            </div>
          </div>

          <div className={styles.secondRow}>
            <div
              className={classNames(
                styles.secondBlockWrapper,
                styles.blockStyles
              )}
            >
              <div className={styles.secondBlockImage}>
                <Image src={"/gpt4.jpeg"} fill className={styles.image2} />
              </div>
              <div className={styles.secondBlockText}>
                <h3>Adaptabilidad y gestión de riesgos:</h3>
                <p>
                  Los algoritmos de GPT 3.5 pueden adaptarse a las cambiantes condiciones del mercado y ajustar sus estrategias en consecuencia, mientras que los humanos pueden tener dificultades para mantenerse al día con las tendencias del mercado que cambian rápidamente. La IA puede ayudar a identificar y gestionar el riesgo en tiempo real, lo que permite estrategias de gestión de riesgos más proactivas.
                </p>
              </div>
            </div>
            <div
              className={classNames(
                styles.thirdBlockWrapper,
                styles.blockStyles
              )}
            >
              <div className={styles.thirdBlockText}>
                <h3>Escalabilidad:</h3>
                <p>
                  Los algoritmos de GPT 3.5 pueden manejar grandes cantidades de datos y operar en múltiples mercados simultáneamente, lo que permite una mayor escalabilidad y eficiencia.
                </p>
                <h3>Backtesting y aprendizaje continuo:</h3>
                <p>
                  Los algoritmos de GPT 3.5 pueden ser evaluados en datos históricos para evaluar su desempeño, lo que puede ayudar a informar las decisiones comerciales futuras. Los algoritmos pueden aprender continuamente de nuevos datos y adaptar sus estrategias, lo que puede llevar a una mejora en el desempeño con el tiempo.
                </p>
              </div>
              <div className={styles.thirdBlockImage}>
                <Image src={"/gpt3.jpg"} fill className={styles.image3} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.numbersBlock}>
          <div className={styles.numbersWrapper}>
            <div className={styles.infoItem}>
              <span className={styles.mainParam}>350k+</span>
              <div className={styles.text}>Usuarios en todo el mundo</div>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.mainParam}>40k+</span>
              <div className={styles.text}>Usuarios agregados cada mes</div>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.mainParam}>1MM+</span>
              <div className={styles.text}>Operaciones exitosas cada día</div>
            </div>
          </div>
        </div>
        <div className={styles.threeBlocksWrapper}>
          <h3>Por qué GPT Open AI?</h3>

          <div className={styles.threeBlocks}>
            <div className={styles.block}>
              <div className={styles.icons}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.29889 6.86925C4.04365 7.91689 3.16523 9.14798 2.72134 9.85083C2.69189 9.89746 2.67129 9.93013 2.65407 9.95848C2.64271 9.97718 2.63522 9.99013 2.6302 9.99915C2.6302 9.99949 2.6302 9.99982 2.6302 10.0002C2.6302 10.0005 2.6302 10.0008 2.6302 10.0012C2.63522 10.0102 2.64272 10.0231 2.65407 10.0418C2.67129 10.0702 2.69189 10.1029 2.72134 10.1495C3.16523 10.8524 4.04365 12.0834 5.29889 13.1311C6.55217 14.1771 8.13088 15.0002 10.0003 15.0002C11.8698 15.0002 13.4485 14.1771 14.7018 13.1311C15.957 12.0834 16.8354 10.8523 17.2793 10.1495C17.3088 10.1029 17.3294 10.0702 17.3466 10.0418C17.3579 10.0231 17.3654 10.0102 17.3705 10.0012C17.3705 10.0008 17.3705 10.0005 17.3705 10.0002C17.3705 9.99983 17.3705 9.99949 17.3705 9.99915C17.3654 9.99013 17.3579 9.97719 17.3466 9.95848C17.3294 9.93013 17.3088 9.89746 17.2793 9.85083C16.8354 9.14798 15.957 7.91689 14.7018 6.86925C13.4485 5.82325 11.8698 5.00016 10.0003 5.00016C8.13088 5.00016 6.55217 5.82325 5.29889 6.86925ZM4.23095 5.58969C5.67145 4.38743 7.6156 3.3335 10.0003 3.3335C12.3851 3.3335 14.3292 4.38743 15.7697 5.58969C17.2082 6.79031 18.1945 8.17873 18.6885 8.96087C18.695 8.97121 18.7017 8.98175 18.7086 8.99253C18.8066 9.14681 18.9338 9.34713 18.9982 9.6278C19.0501 9.85443 19.0501 10.1459 18.9982 10.3725C18.9338 10.6532 18.8066 10.8535 18.7086 11.0078C18.7017 11.0186 18.695 11.0291 18.6885 11.0395C18.1945 11.8216 17.2082 13.21 15.7697 14.4106C14.3292 15.6129 12.3851 16.6668 10.0003 16.6668C7.6156 16.6668 5.67145 15.6129 4.23095 14.4106C2.79241 13.21 1.80613 11.8216 1.31217 11.0395C1.30565 11.0291 1.29895 11.0186 1.2921 11.0078C1.19409 10.8535 1.06682 10.6532 1.00249 10.3725C0.950545 10.1459 0.950545 9.85443 1.00249 9.6278C1.06682 9.34712 1.19409 9.14681 1.2921 8.99252C1.29895 8.98175 1.30565 8.9712 1.31217 8.96087C1.80613 8.17873 2.79241 6.79031 4.23095 5.58969ZM10.0003 8.3335C9.07985 8.3335 8.33366 9.07969 8.33366 10.0002C8.33366 10.9206 9.07985 11.6668 10.0003 11.6668C10.9208 11.6668 11.667 10.9206 11.667 10.0002C11.667 9.07969 10.9208 8.3335 10.0003 8.3335ZM6.66699 10.0002C6.66699 8.15921 8.15938 6.66683 10.0003 6.66683C11.8413 6.66683 13.3337 8.15921 13.3337 10.0002C13.3337 11.8411 11.8413 13.3335 10.0003 13.3335C8.15938 13.3335 6.66699 11.8411 6.66699 10.0002Z"
                    fill="currentcolor"
                  ></path>
                </svg>
              </div>
              <p>
                Potencial para aumentar las ganancias mediante el uso de la plataforma de comercio inteligente. La arquitectura GPT-3.5 utiliza algoritmos y análisis avanzados para ayudar a los traders a tomar decisiones informadas y optimizar su estrategia de comercio.
              </p>
            </div>
            <div className={styles.block}>
              <div className={styles.icons}>
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.99996 0.833496C4.4602 0.833496 4.83329 1.20659 4.83329 1.66683V1.9975C5.43963 1.81074 6.25683 1.66683 7.33329 1.66683C8.7445 1.66683 9.91388 2.13473 10.9297 2.54119C10.9452 2.5474 10.9607 2.55359 10.9761 2.55977C12.0329 2.98246 12.9327 3.3335 14 3.3335C15.156 3.3335 15.8829 3.14114 16.2946 2.97643C16.5013 2.89378 16.6324 2.81659 16.7018 2.77033C16.7363 2.74729 16.7561 2.73157 16.7627 2.72616C17.0008 2.50237 17.3488 2.43793 17.6522 2.5636C17.9636 2.69258 18.1666 2.99644 18.1666 3.3335V12.5002C18.1666 12.7212 18.0788 12.9331 17.9225 13.0894L17.3333 12.5002C17.9225 13.0894 17.9221 13.0899 17.9217 13.0903L17.9208 13.0912L17.9189 13.093L17.915 13.0969L17.906 13.1056C17.8996 13.1117 17.8922 13.1186 17.8839 13.1261C17.8672 13.1413 17.8468 13.1591 17.8224 13.1792C17.7734 13.2195 17.7086 13.2689 17.6263 13.3237C17.4613 13.4337 17.2278 13.5649 16.9136 13.6906C16.2837 13.9425 15.3439 14.1668 14 14.1668C12.5888 14.1668 11.4194 13.6989 10.4036 13.2925L10.3571 13.2739C9.30039 12.8512 8.40054 12.5002 7.33329 12.5002C6.17722 12.5002 5.45039 12.6925 5.03862 12.8572C4.95931 12.8889 4.89113 12.9199 4.83329 12.9485L4.83329 18.3335C4.83329 18.7937 4.4602 19.1668 3.99996 19.1668C3.53972 19.1668 3.16663 18.7937 3.16663 18.3335L3.16663 12.501C3.16663 12.5004 3.16663 12.4999 3.16663 12.4993L3.16663 3.33385C3.16663 3.33361 3.16663 3.33338 3.16663 3.33314L3.16663 1.66683C3.16663 1.20659 3.53972 0.833496 3.99996 0.833496ZM4.83329 3.78187L4.83329 11.1642C5.43963 10.9774 6.25683 10.8335 7.33329 10.8335C8.7445 10.8335 9.91388 11.3014 10.9297 11.7079L10.9761 11.7264C12.0329 12.1491 12.9327 12.5002 14 12.5002C15.156 12.5002 15.8829 12.3078 16.2946 12.1431C16.3739 12.1114 16.4421 12.0805 16.5 12.0518V4.66949C15.8936 4.85625 15.0764 5.00016 14 5.00016C12.5888 5.00016 11.4194 4.53226 10.4036 4.1258C10.388 4.11959 10.3726 4.1134 10.3571 4.10723C9.30039 3.68453 8.40054 3.3335 7.33329 3.3335C6.17722 3.3335 5.45039 3.52585 5.03862 3.69056C4.95931 3.72228 4.89113 3.7532 4.83329 3.78187Z"
                    fill="currentcolor"
                  ></path>
                </svg>
              </div>
              <p>
               Toma el control de tus inversiones con un software intuitivo. Con la arquitectura GPT-3.5 obtenemos un acceso fácil a datos importantes de inversión, lo que da a los traders un mayor control sobre su cartera.
              </p>
            </div>
            <div className={styles.block}>
              <div className={styles.icons}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_443_1488)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 2.50016C5.85787 2.50016 2.50001 5.85803 2.50001 10.0002C2.50001 14.1423 5.85787 17.5002 10 17.5002C14.1421 17.5002 17.5 14.1423 17.5 10.0002C17.5 5.85803 14.1421 2.50016 10 2.50016ZM0.833344 10.0002C0.833344 4.93755 4.9374 0.833496 10 0.833496C15.0626 0.833496 19.1667 4.93755 19.1667 10.0002C19.1667 15.0628 15.0626 19.1668 10 19.1668C4.9374 19.1668 0.833344 15.0628 0.833344 10.0002ZM6.25001 7.50016C6.25001 6.80981 6.80965 6.25016 7.50001 6.25016C8.19037 6.25016 8.75001 6.80981 8.75001 7.50016C8.75001 8.19052 8.19037 8.75016 7.50001 8.75016C6.80965 8.75016 6.25001 8.19052 6.25001 7.50016ZM11.25 7.50016C11.25 6.80981 11.8097 6.25016 12.5 6.25016C13.1904 6.25016 13.75 6.80981 13.75 7.50016C13.75 8.19052 13.1904 8.75016 12.5 8.75016C11.8097 8.75016 11.25 8.19052 11.25 7.50016Z"
                      fill="white"
                    ></path>
                    <path
                      d="M7.33073 11.1634C7.05391 10.7982 6.53371 10.7249 6.16668 11.0002C5.79849 11.2763 5.72387 11.7986 6.00001 12.1668L6.00181 12.1692L6.0041 12.1722L6.0101 12.1801L6.02785 12.2028C6.04222 12.2209 6.06168 12.245 6.08614 12.2742C6.13501 12.3324 6.20418 12.4113 6.29288 12.5038C6.46961 12.6882 6.72787 12.9311 7.06195 13.1741C7.7269 13.6577 8.72873 14.1668 10 14.1668C11.2713 14.1668 12.2731 13.6577 12.9381 13.1741C13.2721 12.9311 13.5304 12.6882 13.7071 12.5038C13.7958 12.4113 13.865 12.3324 13.9139 12.2742C13.9383 12.245 13.9578 12.2209 13.9722 12.2028L13.9899 12.1801L13.9959 12.1722L13.9982 12.1692L13.9992 12.1679L14 12.1668C14.2762 11.7986 14.2015 11.2763 13.8333 11.0002C13.4663 10.7249 12.9461 10.7982 12.6693 11.1634L12.6654 11.1683C12.6605 11.1746 12.651 11.1863 12.6373 11.2027C12.6096 11.2356 12.5649 11.287 12.5038 11.3507C12.3811 11.4787 12.1966 11.6525 11.9578 11.8262C11.4769 12.1759 10.8121 12.5002 10 12.5002C9.18795 12.5002 8.52312 12.1759 8.04224 11.8262C7.8034 11.6525 7.61895 11.4787 7.4962 11.3507C7.43517 11.287 7.3904 11.2356 7.36277 11.2027C7.34898 11.1863 7.33955 11.1746 7.33459 11.1683L7.33073 11.1634Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_443_1488">
                      <rect width="20" height="20" fill="currentcolor"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p>
               GPT-3.5 es una herramienta confiable para lograr objetivos financieros. El software tiene un historial comprobado de éxito y nos proporciona datos e información confiable para tomar decisiones informadas.
              </p>
            </div>
          </div>
        </div>

        <Script id="formValid">
          {`var countryData = window.intlTelInputGlobals.getCountryData();
var input = document.querySelector("#phone");

var addressDropdown = document.querySelector("#input-country");

errorMsg = document.querySelector("#error-msg");
validMsg = document.querySelector("#valid-msg");

var errorMap = [
  "Invalid number",
  "Invalid country code",
  "Too short",
  "Too long",
  "Invalid number",
];

// initialise plugin
var iti = window.intlTelInput(input, {
  initialCountry: "auto",
  autoPlaceholder: "aggressive",
  geoIpLookup: function (callback) {
    $.get("https://ipinfo.io", function () {}, "jsonp").always(function (resp) {
      var countryCode = resp && resp.country ? resp.country : "us";
      callback(countryCode);
    });
  },
  hiddenInput: "full_phone",
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

addressDropdown.value = iti.getSelectedCountryData().iso2;

input.addEventListener("countrychange", function (e) {
  addressDropdown.value = iti.getSelectedCountryData().iso2;
});
var reset = function () {
  input.classList.remove("error");
  document.querySelector(".valid").disabled = false;
  errorMsg.innerHTML = "";
  errorMsg.classList.add("hide");
  validMsg.classList.add("hide");
};

input.addEventListener("blur", function () {
  reset();
  if (input.value.trim()) {
    if (addressDropdown.value === "undefined" || addressDropdown.value === "") {
      document.querySelector(".valid").disabled = true;
      input.classList.add("error");
      errorMsg.innerHTML = errorMap[0];
      errorMsg.classList.remove("hide");
    } else if (iti.isValidNumber()) {
      validMsg.classList.remove("hide");
    } else {
      document.querySelector(".valid").disabled = true;
      input.classList.add("error");
      var errorCode = iti.getValidationError();
      errorMsg.innerHTML = errorMap[errorCode];
      errorMsg.classList.remove("hide");
    }
  }
});

input.addEventListener("change", reset);
input.addEventListener("keyup", reset);

$(document).ready(function () {
  $("form").submit(function (event) {
    lead();
    $("button", this).attr("disabled", "disabled");
    $("button", this).text("Sending...");
  });
})`}
        </Script>
        <div className={styles.formWrapper}>
          <div>INSCRIPCIÓN</div>

          <form
            action="testsend.php"
            method="post"
            id="form"
            className={styles.form}
          >
          <p>Introduzca sus datos para registrarse:</p>
            <div className="">

              <div className="form-grou">

                <input
                  type="text"
                  id="first_name"
                  className={styles.inputp}
                  name="f_name"
                  required="required"
                  placeholder="Nombre"
                  pattern="[^0-9!@#\$\^&amp;%\*\(\)\+=\-\[\]\{\}\|:<>\?,\.']+"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="last_name"
                  className={styles.inputp}
                  name="l_name"
                  required="required"
                  placeholder="Apellido"
                  pattern="[^0-9!@#\$\^&amp;%\*\(\)\+=\-\[\]\{\}\|:<>\?,\.']+"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  className={styles.inputp}
                  name="email"
                  required="required"
                  placeholder="Correo electrónico"
                  pattern="[A-Za-z0-9._%+-]{1,}@[a-zA-Z0-9._%+-]{1,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z0-9._%+-]{2,}[.]{1}[a-zA-Z]{2,})"
                />
              </div>
              <div className="form-group">
                <input
                  id="phone"
                  type="tel"
                  className={styles.inputp}
                  name="phone"
                  required="required"
                  placeholder="Tu teléfono"
                />
                <div style={{ marginTop: "10px",marginBottom: "10px", textAlign: "center" }}>
                  <span id="valid-msg" className="hide">
                    ✓ Valid
                  </span>
                  <span id="error-msg" className="hide"></span>
                </div>
                <input type="hidden" name="utm_content" value={utm_content} />
                <input type="hidden" name="utm_source" value={utm_source} />
                <input type="hidden" name="utm_campaign" value={utm_campaign} />
                <input type="hidden" name="utm_medium" value={utm_medium} />
                <input type="hidden" name="utm_term" value={utm_term} />
                <input
                  id="input-country"
                  name="country"
                  maxLength=""
                  value=""
                  type="hidden"
                />
              </div>
              <div className={styles.formgroup}>
                <button id="register-button" className="valid" type="submit">
                  <span>Registro</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <footer className={styles.footer}>
          <ul className={styles.footerNav}>
            <Link href="/terms">
              <li>Condiciones de uso</li>
            </Link>
            <Link href="/policy">
              <li>Política de privacidad</li>
            </Link>
          </ul>
        </footer>
      </main>
    </div>
  );
}
