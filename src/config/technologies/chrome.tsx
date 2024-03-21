import { Trans } from 'react-i18next'
import ChromeIcon from '@icons/Chrome.svg?react'
import { type Skill } from '@model/skill'

const chrome: Skill = {
  title: 'Chrome',
  icon: <ChromeIcon />,
  mainStack: false,
  description: <Trans i18nKey='skills.descriptions.chrome' />,
  detail: (
    <Trans i18nKey='skills.details.chrome'>
      <p>
        Es mi navegador secundario. Lo utilizo para probar mis desarrollos y para comprobar que todo funciona
        correctamente en él.
      </p>
      <p>Tambien lo utilizo con herramientas de productividad como Google Calendar, Meet, Drive, etc.</p>
    </Trans>
  ),
  links: [
    {
      title: 'Chrome',
      url: 'https://www.google.com/intl/es/chrome/',
    },
  ],
}

export default chrome
