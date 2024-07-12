import React, { useContext } from 'react';
import { ChangeLangContext } from './Navbar';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();
  const { changeLanguage } = useContext(ChangeLangContext);

  return (
    <header>
      <h1>{t('welcome')}</h1>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('th')}>ภาษาไทย</button>
    </header>
  );
}

export default Header;
