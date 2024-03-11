import strings from '../utils/strings'
// It allows to download the resumé in PDF, it receives a "flag" so it can deliver different versions of the resume
const HOST = import.meta.env.VITE_URL_HOST;
export default function download(args) {
  this._consoleMessage([strings[this.language].wait]);
  window.open(`${HOST}/download/cv.pdf`, '_blank');

}
