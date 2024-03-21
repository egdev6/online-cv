import { Trans } from 'react-i18next'
import GithubCopilotIcon from '@icons/GithubCopilot.svg?react'
import { type Skill } from '@model/skill'

const githubCopilot: Skill = {
  title: 'Github Copilot',
  icon: <GithubCopilotIcon />,
  mainStack: true,
  description: <Trans i18nKey='skills.descriptions.copilot' />,
  detail: (
    <Trans i18nKey='skills.details.copilot'>
      <p>
        Es una herramienta que he incorporado hace poco pero estoy encantado con los que me aporta. Me ayuda a escribir
        código más rápido y a aprender nuevas formas de hacer las cosas.
      </p>
      <p>
        Los autocompletados son muy útiles y me ahorran mucho tiempo. Aunque a veces no acierta, me ayuda a pensar en
        diferentes formas de resolver un problema.
      </p>
    </Trans>
  ),
  links: [
    {
      title: 'Github Copilot',
      url: 'https://copilot.github.com/',
    },
  ],
}

export default githubCopilot
