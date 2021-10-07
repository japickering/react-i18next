# react-i18next

## Getting started

The resources are imported into i18n.js like this.

```
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
```

## Presets and user defined translations

```
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({})
```

## Runing the app

Clone this repository into a dev folder and cd into it.
Enter ```npm i``` in your CLI or Terminal.
Run the local server ```npm start```
