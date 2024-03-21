import { Trans } from 'react-i18next'
import ViteIcon from '@icons/ViteJs.svg?react'
import { type Skill } from '@model/skill'

const vite: Skill = {
  title: 'Vite',
  icon: <ViteIcon />,
  mainStack: true,
  description: <Trans i18nKey='skills.descriptions.vite' />,
  detail: (
    <Trans i18nKey='skills.details.vite'>
      <p>
        Pese a llevar poco tiempo usándolo se ha vuelto una herramienta imprescindible en mis proyectos de React y
        TypeScript.
      </p>
      <p>
        Facilita la gestión de las dependencias y el empaquetado de los proyectos. Además, su configuración permite
        realizar ajustes avanzados de forma sencilla, cómo integrar Server Side Rendering en diferentes frameworks o
        realizar ajustes en la configuración de TypeScript.
      </p>
    </Trans>
  ),
  links: [
    {
      title: 'Vite',
      url: 'https://vitejs.dev/',
    },
  ],
}

export default vite
