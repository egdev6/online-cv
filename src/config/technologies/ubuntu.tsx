import { Trans } from 'react-i18next'
import UbuntuIcon from '@icons/Ubuntu.svg?react'
import { type Skill } from '@model/skill'

const ubuntu: Skill = {
  title: 'Ubuntu',
  icon: <UbuntuIcon />,
  mainStack: true,
  description: <Trans i18nKey='skills.descriptions.ubuntu' />,
  detail: (
    <Trans i18nKey='skills.details.ubuntu'>
      <p>Es mi sistema operativo principal a la hora de desarrollar.</p>
      <p>Me permite ser más productivo gracias a sus herramientas y a su terminal.</p>
    </Trans>
  ),
  links: [
    {
      title: 'Ubuntu',
      url: 'https://ubuntu.com/',
    },
  ],
}

export default ubuntu
