import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { addLocaleData } from "react-intl";
import locale_en from "react-intl/locale-data/en";
import locale_fr from "react-intl/locale-data/fr";
import messages_fr from "./translations/fr.json";
import messages_en from "./translations/en.json";
addLocaleData([...locale_en, ...locale_fr]);

const messages = {
  fr: messages_fr,
  en: messages_en
};
let language = navigator.language.split(/[-_]/)[0]; // language without region code
let unusedLang;
if (language === "fr") {
  unusedLang = "en";
} else {
  unusedLang = "fr";
}

class Wrapper extends React.Component {
  render() {
    return (
      <IntlProvider locale={language} messages={messages[language]}>
        <BrowserRouter>
          <App lang={language} unusedLang={unusedLang} />
        </BrowserRouter>
      </IntlProvider>
    );
  }
}

ReactDOM.render(<Wrapper />, document.getElementById("root"));
