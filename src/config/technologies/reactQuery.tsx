import { Trans } from 'react-i18next'
import { type Skill } from '@model/skill'
import ReactQueryIcon from '@icons/ReactQuery.svg?react'

const reactQuery: Skill = {
  title: 'ReactQuery',
  icon: <ReactQueryIcon />,
  mainStack: true,
  description: <Trans i18nKey='skills.descriptions.query' />,
  detail: (
    <Trans i18nKey='skills.details.query'>
      <p>
        Pese no haberlo usado tanto como otros, me parece una herramienta muy potente y sencilla de usar, que facilita
        la gestión de las peticiones a APIs y el estado de la aplicación.
      </p>
      <p>
        Permite realizar consultas a APIs de forma sencilla, gestionar el estado de la aplicación de forma eficiente y
        realizar acciones asíncronas de forma sencilla. Se adapta perfectamente al concepto de hooks de React.
      </p>
    </Trans>
  ),
  links: [
    {
      title: 'React Query',
      url: 'https://react-query.tanstack.com/',
    },
  ],
}

export default reactQuery
