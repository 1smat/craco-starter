import { initReactI18next } from "react-i18next";

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationCyril from "assets/locales/cyril/translation.json";
import translationLat from "assets/locales/latin/translation.json";
import translationRu from "assets/locales/ru/translation.json";

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		keySeparator: "|",
		resources: {
			cyril: {
				translation: translationCyril
			},
			ru: {
				translation: translationRu
			},
			latin: {
				translation: translationLat
			}
		},
		fallbackLng: ["cyril", "ru", "latin"],
		detection: {
			order: ["localStorage"]
		},

		react: {
			useSuspense: false
		}
	});

export default i18n;
