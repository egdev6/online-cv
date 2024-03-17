import i18n from 'i18next'
import { Trans } from 'react-i18next'
import React from '@icons/React.svg?react'
import NextJs from '@icons/NextJs.svg?react'
import Astro from '@icons/Astro.svg?react'
import JavaScript from '@icons/JavaScript.svg?react'
import TypeScript from '@icons/TypeScript.svg?react'
import HTML5 from '@icons/HTML5.svg?react'
import CSS3 from '@icons/CSS3.svg?react'
import VSCode from '@icons/VSCode.svg?react'
import Git from '@icons/Git.svg?react'
import Jira from '@icons/Jira.svg?react'
import StyledComponents from '@icons/StyledComponents.svg?react'
import Sass from '@icons/Sass.svg?react'
import Bootstrap from '@icons/Bootstrap.svg?react'
import MaterialUI from '@icons/MaterialUI.svg?react'
import Redux from '@icons/Redux.svg?react'
import ReduxSaga from '@icons/ReduxSaga.svg?react'
import ReactQuery from '@icons/ReactQuery.svg?react'
import NPM from '@icons/NPM.svg?react'
import Yarn from '@icons/Yarn.svg?react'
import Vite from '@icons/ViteJs.svg?react'
import Webpack from '@icons/Webpack.svg?react'
import NodeJs from '@icons/NodeJs.svg?react'
import MySQL from '@icons/MySQL.svg?react'
import Docker from '@icons/Docker.svg?react'
import Postman from '@icons/Postman.svg?react'
import Figma from '@icons/Figma.svg?react'
import AdobeXD from '@icons/AdobeXD.svg?react'
import Storybook from '@icons/Storybook.svg?react'
import Jest from '@icons/Jest.svg?react'
import PlayWright from '@icons/PlayWright.svg?react'
import ESLint from '@icons/ESLint.svg?react'
import Prettier from '@icons/Prettier.svg?react'
import I18n from '@icons/i18n.svg?react'
import GithubCopilot from '@icons/GithubCopilot.svg?react'
import Firefox from '@icons/Firefox.svg?react'
import Chrome from '@icons/Chrome.svg?react'
import Safari from '@icons/Safari.svg?react'
import Ubuntu from '@icons/Ubuntu.svg?react'

const skillsList = [
  {
    title: 'React',
    icon: <React />,
    description: i18n.t('skills.descriptions.react'),
    detail: '',
    mainStack: true,
  },
  {
    title: 'Next.js',
    icon: <NextJs />,
    description: i18n.t('skills.descriptions.next'),
    detail: '',
    mainStack: true,
  },
  {
    title: 'Javascript',
    icon: <JavaScript />,
    description: i18n.t('skills.descriptions.javascript'),
    detail: '',
    mainStack: true,
  },
  {
    title: 'HTML5',
    icon: <HTML5 />,
    description: i18n.t('skills.descriptions.html'),
    detail: '',
    mainStack: true,
  },
  {
    title: 'CSS3',
    icon: <CSS3 />,
    description: i18n.t('skills.descriptions.css'),
    detail: '',
    mainStack: true,
  },
  {
    title: 'Styled Components',
    icon: <StyledComponents />,
    description: i18n.t('skills.descriptions.styledComponents'),
    detail: '',
    mainStack: true,
  },
  {
    title: 'Redux',
    icon: <Redux />,
    description: i18n.t('skills.descriptions.redux'),
    detail: '',
    mainStack: true,
  },
  {
    title: 'Git',
    icon: <Git />,
    description: i18n.t('skills.descriptions.git'),
    detail: '',
    mainStack: true,
  },
  {
    title: 'Astro',
    icon: <Astro />,
    description: i18n.t('skills.descriptions.astro'),
    detail: '',
    mainStack: false,
  },
  {
    title: 'Typescript',
    icon: <TypeScript />,
    description: i18n.t('skills.descriptions.typescript'),
    detail: '',
    mainStack: true,
  },
  {
    title: 'Bootstrap',
    icon: <Bootstrap />,
    description: i18n.t('skills.descriptions.bootstrap'),
    detail: '',
    mainStack: false,
  },
  {
    title: 'MaterialUI',
    icon: <MaterialUI />,
    description: i18n.t('skills.descriptions.material'),
    detail: '',
    mainStack: false,
  },
  {
    title: 'Sass',
    icon: <Sass />,
    description: i18n.t('skills.descriptions.sass'),
    detail: '',
    mainStack: false,
  },
  {
    title: 'Redux Sagas',
    icon: <ReduxSaga />,
    description: i18n.t('skills.descriptions.saga'),
    detail: '',
    mainStack: true,
  },
  {
    title: 'ReactQuery',
    icon: <ReactQuery />,
    description: i18n.t('skills.descriptions.query'),
    detail: '',
    mainStack: false,
  },
  {
    title: 'NPM',
    icon: <NPM />,
    description: i18n.t('skills.descriptions.npm'),
    detail: '',
    mainStack: true,
  },
  {
    title: 'Yarn',
    icon: <Yarn />,
    description: i18n.t('skills.descriptions.yarn'),
    detail: '',
    mainStack: false,
  },
  {
    title: 'Webpack',
    icon: <Webpack />,
    description: i18n.t('skills.descriptions.webpack'),
    detail: '',
    mainStack: false,
  },
  {
    title: 'Vite',
    icon: <Vite />,
    description: i18n.t('skills.descriptions.vite'),
    detail: '',
    mainStack: true,
  },
  {
    title: 'NodeJs',
    icon: <NodeJs />,
    description: i18n.t('skills.descriptions.node'),
    detail: '',
    mainStack: true,
  },
  {
    title: 'MySQL',
    icon: <MySQL />,
    description: i18n.t('skills.descriptions.mysql'),
    detail: '',
    mainStack: false,
  },
  {
    title: 'Docker',
    icon: <Docker />,
    description: i18n.t('skills.descriptions.docker'),
    detail: '',
    mainStack: false,
  },
  {
    title: 'Postman',
    icon: <Postman />,
    description: i18n.t('skills.descriptions.postman'),
    detail: '',
    mainStack: true,
  },
  {
    title: 'Figma',
    icon: <Figma />,
    description: i18n.t('skills.descriptions.figma'),
    detail: '',
    mainStack: true,
  },
  {
    title: 'Adobe XD',
    icon: <AdobeXD />,
    description: i18n.t('skills.descriptions.adobexd'),
    detail: '',
    mainStack: false,
  },
  {
    title: 'Storybook',
    icon: <Storybook />,
    description: i18n.t('skills.descriptions.storybook'),
    detail: '',
    mainStack: false,
  },
  {
    title: 'Jest',
    icon: <Jest />,
    description: i18n.t('skills.descriptions.jest'),
    detail: '',
    mainStack: true,
  },
  {
    title: 'PlayWright',
    icon: <PlayWright />,
    description: i18n.t('skills.descriptions.playwright'),
    detail: '',
    mainStack: false,
  },
  {
    title: 'ESLint',
    icon: <ESLint />,
    description: i18n.t('skills.descriptions.eslint'),
    detail: '',
    mainStack: true,
  },
  {
    title: 'Prettier',
    icon: <Prettier />,
    description: i18n.t('skills.descriptions.prettier'),
    detail: '',
    mainStack: true,
  },
  {
    title: 'i18next',
    icon: <I18n />,
    description: i18n.t('skills.descriptions.i18n'),
    detail: '',
    mainStack: true,
  },
  {
    title: 'VSCode',
    icon: <VSCode />,
    description: i18n.t('skills.descriptions.vscode'),
    detail: '',
    mainStack: true,
  },
  {
    title: 'Github Copilot',
    icon: <GithubCopilot />,
    description: i18n.t('skills.descriptions.copilot'),
    detail: '',
    mainStack: true,
  },
  {
    title: 'Firefox',
    icon: <Firefox />,
    description: i18n.t('skills.descriptions.firefox'),
    detail: '',
    mainStack: true,
  },
  {
    title: 'Chrome',
    icon: <Chrome />,
    description: i18n.t('skills.descriptions.chrome'),
    detail: '',
    mainStack: false,
  },
  {
    title: 'Safari',
    icon: <Safari />,
    description: i18n.t('skills.descriptions.safari'),
    detail: '',
    mainStack: false,
  },
  {
    title: 'Ubuntu',
    icon: <Ubuntu />,
    description: i18n.t('skills.descriptions.ubuntu'),
    detail: '',
    mainStack: true,
  },
  {
    title: 'Jira',
    icon: <Jira />,
    description: i18n.t('skills.descriptions.jira'),
    detail: '',
    mainStack: true,
  },
]

export default skillsList
