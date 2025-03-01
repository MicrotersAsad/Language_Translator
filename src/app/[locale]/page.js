// import i18nConfig from 'i18nConfig';
// import ExampleClientComponent from '../components/ExampleClientComponent';
// import LanguageChanger from '../components/LanguageChanger';
// import TranslationsProvider from '../components/TranslationsProvider';
// import initTranslations from '../i18n';

// const i18nNamespaces = ['home'];

// // ✅ নিশ্চিত করুন যে Next.js সঠিকভাবে স্থানীয়কৃত রুটগুলো তৈরি করছে
// export async function generateStaticParams() {
//   return i18nConfig.locales.map(locale => ({ locale }));
// }

// export default async function Home({ params }) {
//   // ✅ `params.locale` নিশ্চিত করুন (Next.js 15+ এ এটি প্রয়োজন)
//   if (!params || !params.locale) {
//     return <h1>Loading...</h1>; // ⏳ লোডিং দেখাবে যদি `params.locale` পাওয়া না যায়
//   }

//   const locale = params.locale || i18nConfig.defaultLocale;

//   console.log("Fetching translations for locale:", locale);

//   // ✅ ট্রান্সলেশন ডাটা লোড করুন
//   const { t, resources } = await initTranslations(locale, i18nNamespaces);

//   return (
//     <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
//       <main>
//         <h1>{t('header')}</h1>
//         <ExampleClientComponent />
//         <LanguageChanger />
//       </main>
//     </TranslationsProvider>
//   );
// }
'use client'; // ✅ Client Component হিসাবে রাখুন

import { useEffect, useState } from 'react';
import ExampleClientComponent from '../components/ExampleClientComponent';
import LanguageChanger from '../components/LanguageChanger';
import TranslationsProvider from '../components/TranslationsProvider';
import i18nConfig from 'i18nConfig';
import initTranslations from '../i18n';

const i18nNamespaces = ['home'];

export default function Home({ params }) {
  const [locale, setLocale] = useState(null);
  const [translations, setTranslations] = useState(null);

  useEffect(() => {
    if (params?.locale) {
      setLocale(params.locale);
    } else {
      setLocale(i18nConfig.defaultLocale);
    }

    async function fetchTranslations() {
      const { t, resources } = await initTranslations(locale, i18nNamespaces);
      setTranslations({ t, resources });
    }

    if (locale) {
      fetchTranslations();
    }
  }, [params, locale]);

  if (!locale || !translations) {
    return <h1>Loading...</h1>;
  }

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={translations.resources}>
      <main>
        <h1>{translations.t('header')}</h1>
        <ExampleClientComponent />
        <LanguageChanger />
      </main>
    </TranslationsProvider>
  );
}
