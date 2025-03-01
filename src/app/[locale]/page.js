const i18nNamespaces = ['home'];
import ExampleClientComponent from '../components/ExampleClientComponent';
import LanguageChanger from '../components/LanguageChanger';
import TranslationsProvider from '../components/TranslationsProvider';
import initTranslations from '../i18n';

export default async function Home(props) {
  const { locale } = props.params; 

  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main>
        <h1>{t('header')}</h1>
        <ExampleClientComponent />
        <LanguageChanger/>
      </main>
    </TranslationsProvider>
  );
}
