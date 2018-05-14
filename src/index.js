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
let unusedLang = 'fr'
if (language === "fr") {
  unusedLang = "en";
}

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.handleLangChange = this.handleLangChange.bind(this);
    this.state = { language: language, unusedLang: unusedLang };
  }
  handleLangChange(lang,unusedLang) {
    this.setState({language: lang, unusedLang: unusedLang});
  }
  render() {
    return (
      <IntlProvider locale={this.state.language} messages={messages[this.state.language]}>
        <BrowserRouter>
          <App lang={this.state.language} unusedLang={this.state.unusedLang} handleLangChange={this.handleLangChange} />
        </BrowserRouter>
      </IntlProvider>
    );
  }
}

ReactDOM.render(<Wrapper />, document.getElementById("root"));
