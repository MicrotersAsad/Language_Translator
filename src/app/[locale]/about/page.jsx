import React from 'react';
import initTranslations from 'src/app/i18n';
const i18nNamespaces = ['about']; // Make sure to define the namespace

export default async function About(props) {
  const { locale } = props.params;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <div>
      <h1>{t('about')}</h1>
    </div>
  );
}
