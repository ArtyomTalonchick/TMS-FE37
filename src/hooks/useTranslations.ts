import en from "../resources/locales/en.json";
import ru from "../resources/locales/ru.json";
import { settingsActions } from "../store/settings/settingsSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { LanguageType } from "../types/languageTypes";

const translations: {[name in LanguageType]: typeof en & typeof ru} = {
    en,
    ru,
};

const useTranslation = () => {
    const dispatch = useAppDispatch();
    const language = useAppSelector((state) => state.settings.language);

    const toggleLanguage = () => dispatch(settingsActions.toggleLanguage());

    return {
        t: translations[language],
        toggleLanguage
    }
}

export default useTranslation;
