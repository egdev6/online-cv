import { Trans } from 'react-i18next'
import MySQLIcon from '@icons/MySQL.svg?react'
import { type Skill } from '@model/skill'

const mysql: Skill = {
  title: 'MySQL',
  icon: <MySQLIcon />,
  mainStack: false,
  description: <Trans i18nKey='skills.descriptions.mysql' />,
  detail: (
    <Trans i18nKey='skills.details.mysql'>
      <p>He trabajado con MySQL en varios proyectos, tanto personales como profesionales.</p>
      <p>Mis responsabilidades incluyen la creación de bases de datos y la escritura de consultas SQL complejas.</p>
    </Trans>
  ),
  links: [
    {
      title: 'MySQL',
      url: 'https://www.mysql.com/',
    },
  ],
}

export default mysql
