import { Trans } from 'react-i18next'
import StorybookIcon from '@icons/Storybook.svg?react'
import { type Skill } from '@model/skill'

const storybook: Skill = {
  title: 'Storybook',
  icon: <StorybookIcon />,
  mainStack: false,
  description: <Trans i18nKey='skills.descriptions.storybook' />,
  detail: (
    <Trans i18nKey='skills.details.storybook'>
      <p>
        He trabajado con Storybook en algún proyecto, creando componentes aislados y documentándolos de forma clara y
        concisa.
      </p>
      <p>
        Me parece una herramienta muy útil para trabajar con componentes en proyectos grandes y basados en sistemas de
        diseño, ya que permite ver el comportamiento de los mismos de forma aislada, sin necesidad de ejecutar la
        aplicación completa y manteniendo la coherencia visual y funcional entre los diferentes componentes.
      </p>
    </Trans>
  ),
  links: [
    {
      title: 'Storybook',
      url: 'https://storybook.js.org/',
    },
  ],
}

export default storybook
