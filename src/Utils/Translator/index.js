import memoize from "lodash.memoize";
import * as RNLocalize from "react-native-localize";
import { I18nManager } from "react-native";
import i18n from "i18n-js";
import { useSelector } from "react-redux";
import { useState } from "react";



export const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  tm: () => require("../../Constant/AppLang/tm_lang.json"),
  en: () => require("../../Constant/AppLang/en_lang.json"),
};

export const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key)
);

export const setI18nConfig = (langTag) => {

  // fallback if no available language fits
  const fallback = { languageTag: langTag, isRTL: false };

  const { languageTag, isRTL } =
    fallback ||
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters));

  // clear translation cache
  translate.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  i18n.translations = { [languageTag]: translationGetters[languageTag]() };
  i18n.locale = languageTag;
};

