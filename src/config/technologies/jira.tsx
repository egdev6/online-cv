import { Trans } from 'react-i18next'
import JiraIcon from '@icons/Jira.svg?react'
import { type Skill } from '@model/skill'

const jira: Skill = {
  title: 'Jira',
  icon: <JiraIcon />,
  mainStack: true,
  description: <Trans i18nKey='skills.descriptions.jira' />,
  detail: (
    <Trans i18nKey='skills.details.jira'>
      <p>
        Es una herramienta que utilizo para gestionar proyectos. Me permite tener una visión global de los proyectos y
        tareas que tengo que realizar.
      </p>
      <p>
        Me ayuda a organizar mi trabajo y el de mi equipo. También me permite hacer un seguimiento de las tareas y
        proyectos y coumentarme con mis compañeros ante posibles dudas, problemas o mejoras.
      </p>
    </Trans>
  ),
  links: [
    {
      title: 'Jira',
      url: 'https://www.atlassian.com/software/jira',
    },
  ],
}

export default jira
