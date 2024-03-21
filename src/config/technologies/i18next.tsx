import { Trans } from 'react-i18next'
import I18nIcon from '@icons/i18n.svg?react'
import { type Skill } from '@model/skill'

const i18next: Skill = {
  title: 'i18next',
  icon: <I18nIcon />,
  mainStack: true,
  description: <Trans i18nKey='skills.descriptions.i18n' />,
  detail: (
    <Trans i18nKey='skills.details.i18n'>
      <p>Es la herramienta fundamental para todos los proyectos que requieran internacionalización.</p>
      <p>Lo he usado en varios proyectos con React, Next y Astro. Es muy fácil de configurar y de utilizar.</p>
    </Trans>
  ),
  links: [
    {
      title: 'i18next',
      url: 'https://www.i18next.com/',
    },
    {
      title: 'React i18next',
      url: 'https://react.i18next.com/',
    },
    {
      title: 'astro-i18next',
      url: 'https://github.com/yassinedoghri/astro-i18next',
    },
  ],
}

export default i18next
