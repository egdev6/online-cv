import { Trans } from 'react-i18next'
import TailwindIcon from '@icons/Tailwind.svg?react'
import { type Skill } from '@model/skill'

const tailwind: Skill = {
  title: 'Tailwind CSS',
  icon: <TailwindIcon />,
  mainStack: false,
  description: <Trans i18nKey='skills.descriptions.tailwind' />,
  detail: (
    <Trans i18nKey='skills.details.tailwind'>
      <p>
        Pese a llevar poco tiempo trabajando con Tailwind CSS, he de decir que me ha sorprendido gratamente. La idea de
        poder crear interfaces de usuario de forma rápida y sencilla es algo que me atrae mucho.
      </p>
      <p>
        Creo que Tailwind CSS es una herramienta muy potente que puede ayudar a mejorar la productividad en el
        desarrollo de aplicaciones web. Además, su curva de aprendizaje es bastante baja, lo cual es un punto a favor.
      </p>
    </Trans>
  ),
  links: [
    {
      title: 'Tailwind CSS',
      url: 'https://tailwindcss.com/',
    },
  ],
}

export default tailwind
