import { Trans } from 'react-i18next'
import MaterialUI from '@icons/MaterialUI.svg?react'
import { type Skill } from '@model/skill'

const material: Skill = {
  title: 'MaterialUI',
  icon: <MaterialUI />,
  mainStack: false,
  description: <Trans i18nKey='skills.descriptions.material' />,
  detail: (
    <Trans i18nKey='skills.details.material'>
      <p>
        He trabajado con MaterialUI en varios proyectos en los que ha coincidido el estilo visual con el que ofrece este
        framework. Me parece una herramienta muy potente y fácil de usar, que permite crear interfaces de usuario de
        forma rápida y sencilla.
      </p>
      <p>
        También he usado algunos de los componentes de MaterialUI en proyectos en los que no se ha utilizado el
        framework completo, y me ha parecido muy útil. Por ejemplo, DatePickers, Dialogs, etc.
      </p>
    </Trans>
  ),
  links: [
    {
      title: 'MaterialUI',
      url: 'https://material-ui.com/',
    },
  ],
}

export default material
