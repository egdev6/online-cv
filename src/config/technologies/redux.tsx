import { Trans } from 'react-i18next'
import Redux from '@icons/Redux.svg?react'
import { type Skill } from '@model/skill'

const redux: Skill = {
  title: 'Redux',
  icon: <Redux />,
  mainStack: false,
  description: <Trans i18nKey='skills.descriptions.redux' />,
  detail: (
    <Trans i18nKey='skills.details.redux'>
      <p>
        Llevo usando redux el mismo tiempo que React. Me parece una herramienta muy potente para gestionar el estado de
        la aplicación y para mantener un flujo de datos predecible.
      </p>
      <p>
        También me permite trabajar con middlewares y con herramientas de desarrollo que facilitan mucho la depuración y
        me permite mantener la escalabilidad de la aplicación.
      </p>
    </Trans>
  ),
  links: [
    {
      title: 'Redux',
      url: 'https://es.redux.js.org/',
    },
  ],
}

export default redux
