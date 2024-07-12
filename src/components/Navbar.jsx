import React, { createContext } from 'react';
import { useTranslation } from 'react-i18next';

export const ChangeLangContext = createContext()

export const ChangeLangProvider = ({ children }) => {

    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    return (
        <ChangeLangContext.Provider value={{ changeLanguage }}>
            {children}
        </ChangeLangContext.Provider>
    )
}
