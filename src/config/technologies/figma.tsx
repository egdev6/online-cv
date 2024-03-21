import { Trans } from 'react-i18next'
import FigmaIcon from '@icons/Figma.svg?react'
import { type Skill } from '@model/skill'

const figma: Skill = {
  title: 'Figma',
  icon: <FigmaIcon />,
  mainStack: true,
  description: <Trans i18nKey='skills.descriptions.figma' />,
  detail: (
    <Trans i18nKey='skills.details.figma'>
      <p>
        Herramienta de diseño utilizada en mi flujo habitual de trabajo. Me permite adecuar los desarrollos a los flujo
        de usuarios y a las especificaciones de diseño.
      </p>
      <p>
        También he realizado algún diseño propio para proyectos personales y modificaciones en diseños ya existentes.
      </p>
    </Trans>
  ),
  links: [
    {
      title: 'Figma',
      url: 'https://www.figma.com/',
    },
  ],
}

export default figma
