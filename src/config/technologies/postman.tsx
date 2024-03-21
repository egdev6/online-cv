import { Trans } from 'react-i18next'
import PostmanIcon from '@icons/Postman.svg?react'
import { type Skill } from '@model/skill'

const postman: Skill = {
  title: 'Postman',
  icon: <PostmanIcon />,
  mainStack: true,
  description: <Trans i18nKey='skills.descriptions.postman' />,
  detail: (
    <Trans i18nKey='skills.details.postman'>
      <p>
        He trabajado con esta herramienta en varios proyectos, realizando pruebas de API y validando estructuras de
        datos para poder establecer el tipado de los datos en el frontend.
      </p>
      <p>
        Suele formar parte de mi flujo de trabajo cuando desarrollo aplicaciones web, ya que me permite simular
        peticiones HTTP y obtener respuestas de forma rápida y sencilla.
      </p>
    </Trans>
  ),
  links: [
    {
      title: 'Postman',
      url: 'https://www.postman.com/',
    },
  ],
}

export default postman
