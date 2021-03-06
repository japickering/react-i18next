# react-i18next

## Getting started

This project demos multiple language support .
You have to add translation strings to i18n.js, known as "resources" for the international languages you want to support.
For more information on [npmjs.com](https://www.npmjs.com/package/react-i18next)

Module imports look like this..

```
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
```

### Presets and user defined translations

```
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: {
          "To get started, edit <1>src/App.js</1> and save to reload.":
          "To get started, edit <1>src/App.js</1> and save to reload."
        }
      },
      de: {
        translations: {
          "To get started, edit <1>src/App.js</1> and save to reload.":
          "Starte in dem du, <1>src/App.js</1> editierst und speicherst."
        }
      }
    },
  });
```

### Running the app

Clone this repository into your working dev folder.

Install npm dependencies
`npm i`

Now run the local server
`npm start`
