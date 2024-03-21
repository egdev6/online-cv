import { Trans } from 'react-i18next'
import Nextjs from '@icons/NextJs.svg?react'
import { type Skill } from '@model/skill'

const NextJs: Skill = {
  title: 'Next.js',
  icon: <Nextjs />,
  mainStack: true,
  description: <Trans i18nKey='skills.descriptions.next' />,
  detail: (
    <Trans i18nKey='skills.details.next'>
      <p></p>
      <p>
        Con Next he podido desarrollar algunos proyectos muy enfocados al SEO, a la mejora de la velocidad de carga y
        usando Server side rendering para mejorar la indexación de los motores de búsqueda.
      </p>
    </Trans>
  ),
  links: [
    {
      title: 'Next.js',
      url: 'https://nextjs.org/',
    },
    {
      title: 'SSR',
      url: 'https://cio-wiki.org/wiki/Server-Side_Rendering',
    },
    {
      title: 'SEO',
      url: 'https://es.wikipedia.org/wiki/Posicionamiento_en_buscadores',
    },
  ],
}

export default NextJs
