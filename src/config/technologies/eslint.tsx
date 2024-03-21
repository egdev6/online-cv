import { Trans } from 'react-i18next'
import ESLintIcon from '@icons/ESLint.svg?react'
import { type Skill } from '@model/skill'

const eslint: Skill = {
  title: 'ESLint',
  icon: <ESLintIcon />,
  mainStack: true,
  description: <Trans i18nKey='skills.descriptions.eslint' />,
  detail: (
    <Trans i18nKey='skills.details.eslint'>
      <p>
        Forma parte de mi stack principal de desarrollo, lo utilizo en todos mis proyectos para mantener un código
        limpio y consistente.
      </p>
      <p>
        Intento mantener una misma configuración en todos mis proyectos, pero siempre adaptándola a las necesidades de
        cada uno.
      </p>
    </Trans>
  ),
  links: [
    {
      title: 'ESLint',
      url: 'https://eslint.org/',
    },
  ],
}

export default eslint
