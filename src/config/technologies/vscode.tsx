import { Trans } from 'react-i18next'
import VSCodeIcon from '@icons/VSCode.svg?react'
import { type Skill } from '@model/skill'

const vscode: Skill = {
  title: 'VSCode',
  icon: <VSCodeIcon />,
  mainStack: true,
  description: <Trans i18nKey='skills.descriptions.vscode' />,
  detail: (
    <Trans i18nKey='skills.details.vscode'>
      <p>
        Es mi editor de código principal, lo utilizo en todos mis proyectos y me permite ser más productivo gracias a su
        gran cantidad de extensiones.
      </p>
      <p>
        He probado otros editores como Atom, Sublime Text y Vim, pero me quedo con VSCode por su versatilidad y
        facilidad de uso.
      </p>
    </Trans>
  ),
  links: [
    {
      title: 'VSCode',
      url: 'https://code.visualstudio.com/',
    },
  ],
}

export default vscode
