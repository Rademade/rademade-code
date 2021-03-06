let browserContext = 16;
let browserUnits = 'rem';

let phone = (468 / browserContext) + browserUnits ;
let phoneLarge = (578 / browserContext) + browserUnits;
let tablet = (768 / browserContext) + browserUnits;
let desktop = (900 / browserContext) + browserUnits;
let desktopLarge = (1235 / browserContext) + browserUnits;

module.exports = {
  extensions: {
    '--phone': '(max-width: ' + phone + ')',
    '--phone-large': '(max-width: ' + phoneLarge + ')',
    '--tablet': '(max-width: ' + tablet + ')',
    '--desktop': '(max-width: ' + desktop + ')',
    '--desktop-large': '(max-width: ' + desktopLarge + ')',
  }
};