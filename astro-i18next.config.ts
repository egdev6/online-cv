// eslint-disable-next-line @typescript-eslint/no-explicit-any
const config: any = {
  defaultLocale: 'es',
  locales: ['en', 'es'],
  load: ['server', 'client'],
  i18nextServer: {
    debug: true,
  },
  i18nextClient: {
    debug: true,
  },
  i18nextServerPlugins: {
    '{initReactI18next}': 'react-i18next',
  },
  i18nextClientPlugins: {
    '{initReactI18next}': 'react-i18next',
  },
}

export default config
