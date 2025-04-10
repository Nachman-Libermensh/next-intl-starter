module.exports = {
  rules: {
    // Consistently import navigation APIs from `@/i18n/navigation`
    'no-restricted-imports': [
      'error',
      {
        name: 'next/link',
        message: 'Please import from `@/i18n/navigation` instead.'
      },
      {
        name: 'next/navigation',
        importNames: ['redirect', 'permanentRedirect', 'useRouter', 'usePathname'],
        message: 'Please import from `@/i18n/navigation` instead.'
      }
    ]
  }
};
