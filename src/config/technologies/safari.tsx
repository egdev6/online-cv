import { Trans } from 'react-i18next'
import SafariIcon from '@icons/Safari.svg?react'
import { type Skill } from '@model/skill'

const safari: Skill = {
  title: 'Safari',
  icon: <SafariIcon />,
  mainStack: false,
  description: <Trans i18nKey='skills.descriptions.safari' />,
  detail: (
    <Trans i18nKey='skills.details.safari'>
      <p>
        Navegador alternativo para verificar la compatibilidad de mis desarrollos. Lo utilizo para comprobar que todo
        funciona correctamente en entornos de Apple.
      </p>
      <p>
        También lo uso para debuggear mis desarrollos en dispositivos Apple, ya que es el navegador por defecto en
        ellos.
      </p>
    </Trans>
  ),
  links: [
    {
      title: 'Safari',
      url: 'https://www.apple.com/safari/',
    },
  ],
}

export default safari
