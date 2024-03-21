import { Trans } from 'react-i18next'
import ReactIcon from '@icons/React.svg?react'
import { type Skill } from '@model/skill'

const React: Skill = {
  title: 'React',
  icon: <ReactIcon />,
  mainStack: true,
  description: <Trans i18nKey='skills.descriptions.react' />,
  detail: (
    <Trans i18nKey='skills.details.react'>
      <p>
        La mayoría de mis proyectos están desarrollados con React, por lo que tengo una amplia experiencia en el uso de
        esta librería.
      </p>
      <p>Manejo varias librerías y herramientas que se utilizan en el ecosistema de React.</p>
    </Trans>
  ),
  links: [
    {
      title: 'React',
      url: 'https://reactjs.org/',
    },
    {
      title: 'React Router',
      url: 'https://reactrouter.com/',
    },
    {
      title: 'React Admin',
      url: 'https://marmelab.com/react-admin/',
    },
    {
      title: 'React Select',
      url: 'https://react-select.com/',
    },
    {
      title: 'React PDF',
      url: 'https://react-pdf.org/',
    },
  ],
}

export default React
