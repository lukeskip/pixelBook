import strings from "../utils/strings";
export default function lang(language) {
  language = language.replace("-", "");
  if (!["es", "en"].includes(language))
    return this._consoleMessage([strings[this.language].languageAvailable]);
  if (language !== this.language) {
    this.language = language;
    this._consoleMessage(strings[this.language].currentLanguage);
    this.help();
  }
}
