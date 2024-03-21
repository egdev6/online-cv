import { Trans } from 'react-i18next'
import YarnIcon from '@icons/Yarn.svg?react'
import { type Skill } from '@model/skill'

const yarn: Skill = {
  title: 'Yarn',
  icon: <YarnIcon />,
  mainStack: false,
  description: <Trans i18nKey='skills.descriptions.yarn' />,
  detail: (
    <Trans i18nKey='skills.details.yarn'>
      <p>
        He usado Yarn en algunos proyectos de Node.js y JavaScript, para gestionar las dependencias y scripts de los
        proyectos.
      </p>
      <p>
        Es cierto que en algunos casos he tenido problemas con la instalación de paquetes y la gestión de las
        dependencias, pero en general me parece una herramienta muy potente y sencilla de usar.
      </p>
    </Trans>
  ),
  links: [
    {
      title: 'Yarn',
      url: 'https://yarnpkg.com/',
    },
  ],
}

export default yarn
