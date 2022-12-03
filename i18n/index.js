import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptBR from './locales/pt-br.json';
import enUS from './locales/en-us.json';

const resources = {
  'pt-BR': ptBR,
  'en-US': enUS,
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt-BR',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
