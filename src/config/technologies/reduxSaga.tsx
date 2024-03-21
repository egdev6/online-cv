import { Trans } from 'react-i18next'
import { type Skill } from '@model/skill'
import ReduxSagaIcon from '@icons/ReduxSaga.svg?react'

const reduxSaga: Skill = {
  title: 'Redux Sagas',
  icon: <ReduxSagaIcon />,
  mainStack: false,
  description: <Trans i18nKey='skills.descriptions.saga' />,
  detail: (
    <Trans i18nKey='skills.details.saga'>
      <p>
        He usado Redux Saga en algunos proyectos de la mano de Redux, para gestionar las acciones asíncronas de la
        aplicación.
      </p>
      <p>
        Me parece una herramienta muy potente y flexible, que permite gestionar de forma sencilla y mantenible las
        llamadas a APIs, las acciones asíncronas y las tareas que requieren coordinación entre varias acciones.
      </p>
    </Trans>
  ),
  links: [
    {
      title: 'Redux Saga',
      url: 'https://redux-saga.js.org/',
    },
  ],
}

export default reduxSaga
