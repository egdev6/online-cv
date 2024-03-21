import { Trans } from 'react-i18next'
import PlayWrightIcon from '@icons/PlayWright.svg?react'
import { type Skill } from '@model/skill'

const playwright: Skill = {
  title: 'PlayWright',
  icon: <PlayWrightIcon />,
  mainStack: false,
  description: <Trans i18nKey='skills.descriptions.playwright' />,
  detail: (
    <Trans i18nKey='skills.details.playwright'>
      <p>He realizado pruebas de regresión visual y unitarias en un par de proyectos.</p>
      <p>He empezado a usarlo hace poco pero me parece una buena herramienta de testing.</p>
    </Trans>
  ),
  links: [
    {
      title: 'PlayWright',
      url: 'https://playwright.dev/',
    },
  ],
}

export default playwright
