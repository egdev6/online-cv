import { Trans } from 'react-i18next'
import PrettierIcon from '@icons/Prettier.svg?react'
import { type Skill } from '@model/skill'

const prettier: Skill = {
  title: 'Prettier',
  icon: <PrettierIcon />,
  mainStack: true,
  description: <Trans i18nKey='skills.descriptions.prettier' />,
  detail: (
    <Trans i18nKey='skills.details.prettier'>
      <p>
        Herramienta fundamental en mi stack de desarrollo, la utilizo en todos mis proyectos para mantener un código
        limpio y consistente.
      </p>
      <p>
        Junto a EsLint, husky y lint-staged, me permiten mantaner la consistencia en cada merge request y en cada
        commit.
      </p>
    </Trans>
  ),
  links: [
    {
      title: 'Prettier',
      url: 'https://prettier.io/',
    },
  ],
}

export default prettier
