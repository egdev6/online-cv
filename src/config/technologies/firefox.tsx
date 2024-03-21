import { Trans } from 'react-i18next'
import FirefoxIcon from '@icons/Firefox.svg?react'
import { type Skill } from '@model/skill'

const firefox: Skill = {
  title: 'Firefox',
  icon: <FirefoxIcon />,
  mainStack: true,
  description: <Trans i18nKey='skills.descriptions.firefox' />,
  detail: (
    <Trans i18nKey='skills.details.firefox'>
      <p>
        Es mi navegador favorito a la hora de desarrollar, lo utilizo en todos mis dispositivos y me permite ser más
        productivo gracias a sus herramientas de desarrollo.
      </p>
      <p>
        Utilizo varias extensiones que me ayudan a la hora de desarrollar, como React Developer Tools, Redux DevTools,
        reglas, etc.
      </p>
    </Trans>
  ),
  links: [
    {
      title: 'Firefox',
      url: 'https://www.mozilla.org/es-ES/firefox/',
    },
  ],
}

export default firefox
