import { Trans } from 'react-i18next'
import DockerIcon from '@icons/Docker.svg?react'
import { type Skill } from '@model/skill'

const docker: Skill = {
  title: 'Docker',
  icon: <DockerIcon />,
  mainStack: false,
  description: <Trans i18nKey='skills.descriptions.docker' />,
  detail: (
    <Trans i18nKey='skills.details.docker'>
      <p>
        He trabajado con Docker en varios proyectos, levantando contenedores para aplicaciones web y consumiendo sus
        servicios en el desarrollo de aplicaciones.
      </p>
      <p>
        En algún caso he tenido que hacer modificaciones en imágenes personalizadas para adaptarlas a las necesidades
        del proyecto.
      </p>
    </Trans>
  ),
  links: [
    {
      title: 'Docker',
      url: 'https://www.docker.com/',
    },
  ],
}

export default docker
