import { Trans } from 'react-i18next'
import IllustratorIcon from '@icons/Illustrator.svg?react'
import { type Skill } from '@model/skill'

const illustrator: Skill = {
  title: 'Adobe Illustrator',
  icon: <IllustratorIcon />,
  mainStack: false,
  description: <Trans i18nKey='skills.descriptions.illustrator' />,
  detail: (
    <Trans i18nKey='skills.details.illustrator'>
      <p>
        Herramienta con las que he suelo editar y crear dibujos vectoriales, logotipos, ilustraciones y otros elementos.
      </p>
      <p>No me considero un profesional pero lo manejo con soltura para realizar tareas básicas.</p>
    </Trans>
  ),
  links: [
    {
      title: 'Adobe Illustrator',
      url: 'https://www.adobe.com/products/illustrator.html',
    },
  ],
}

export default illustrator
