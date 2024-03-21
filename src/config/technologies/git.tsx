import { Trans } from 'react-i18next'
import Git from '@icons/Git.svg?react'
import { type Skill } from '@model/skill'

const git: Skill = {
  title: 'Git',
  icon: <Git />,
  mainStack: true,
  description: <Trans i18nKey='skills.descriptions.git' />,
  detail: (
    <Trans i18nKey='skills.details.git'>
      <p>
        Git es mi sistema de control de versiones preferido. Lo uso a diario para llevar un control de los cambios en
        mis proyectos y para trabajar en equipo.
      </p>
      <p>
        He usado diferentes plataformas como GitHub, GitLab o Bitbucket para alojar mis repositorios y he trabajado con
        diferentes flujos de trabajo como GitFlow o GitHub Flow.
      </p>
    </Trans>
  ),
  links: [
    {
      title: 'Git',
      url: 'https://git-scm.com/',
    },
    {
      title: 'GitHub',
      url: 'https://github.com',
    },
    {
      title: 'GitLab',
      url: 'https://gitlab.com',
    },
    {
      title: 'Bitbucket',
      url: 'https://bitbucket.org',
    },
  ],
}

export default git
