// import { Inter } from 'next/font/google';
// import { dir } from 'i18next';
// import i18nConfig from 'i18nConfig';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app'
// };

// export function generateStaticParams() {
//   return i18nConfig.locales.map(locale => ({ locale }));
// }

// export default function RootLayout({ children, params: { locale } }) {
//   return (
//     <html lang={locale} dir={dir(locale)}>
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }
// import { Inter } from 'next/font/google';
// import { dir } from 'i18next';
// import i18nConfig from 'i18nConfig';


// const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

// // ✅ নিশ্চিত করুন যে Next.js `params` সঠিকভাবে অ্যাক্সেস করতে পারে
// export function generateStaticParams() {
//   return i18nConfig.locales.map(locale => ({ locale }));
// }

// export default function RootLayout({ children, params }) {
//   // ✅ `params` নিশ্চিত করুন এবং ডিফল্ট ল্যাঙ্গুয়েজ সেট করুন
//   const locale = params?.locale || i18nConfig.defaultLocale;

//   return (
//     <html lang={locale} dir={dir(locale)}>
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }
import { Inter } from "next/font/google";
import { dir } from "i18next";
import i18nConfig from "i18nConfig";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// ✅ `generateStaticParams()` ব্যবহার করুন (Static Routes নিশ্চিত করতে)
export async function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

// ✅ `params` কে await করুন
export default async function RootLayout({ children, params }) {
  const { locale } = await params; // ✅ `params` এখন async handle হচ্ছে
  const direction = dir(locale) || "ltr";

  return (
    <html lang={locale} dir={direction}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
