import { Trans } from 'react-i18next'
import NPMIcon from '@icons/NPM.svg?react'
import { type Skill } from '@model/skill'

const npm: Skill = {
  title: 'NPM',
  icon: <NPMIcon />,
  mainStack: true,
  description: <Trans i18nKey='skills.descriptions.npm' />,
  detail: (
    <Trans i18nKey='skills.details.npm'>
      <p>
        He usado NPM en la mayoría de proyectos de Node.js y JavaScript que he realizado, para gestionar las
        dependencias y scripts de los proyectos.
      </p>
      <p>
        Pese a haber probado otros gestores de paquetes, como Yarn, me sigo decantando por NPM por su simplicidad y
        facilidad de uso, así como por su integración con Node.js y su ecosistema.
      </p>
    </Trans>
  ),
  links: [
    {
      title: 'NPM',
      url: 'https://www.npmjs.com/',
    },
  ],
}

export default npm
