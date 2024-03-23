import { Trans } from 'react-i18next'
import { type Experience } from '@model/experience'

const ExperienceList: Experience[] = [
  {
    title: 'Junior videogame developer',
    company: 'Nerlaska Studio',
    image: 'src/assets/images/nerlaska.png',
    startDate: new Date('2014-12-01'),
    finishDate: new Date('2016-05-30'),
    location: "Vall d'Uixo (Castellón)",
    modality: <Trans i18nKey='messages.presential' />,
    competencies: [
      <Trans key='1' i18nKey='experience.competencies.nerlaska.1' />,
      <Trans key='2' i18nKey='experience.competencies.nerlaska.2' />,
      <Trans key='3' i18nKey='experience.competencies.nerlaska.3' />,
      <Trans key='4' i18nKey='experience.competencies.nerlaska.4' />,
      <Trans key='5' i18nKey='experience.competencies.nerlaska.5' />,
    ],
  },
  {
    title: 'Junior SQA developer',
    company: 'Imaweb 2000',
    image: 'src/assets/images/imaweb.png',
    startDate: new Date('2017-03-01'),
    finishDate: new Date('2018-08-30'),
    location: 'Madrid',
    modality: <Trans i18nKey='messages.presential' />,
    competencies: [
      <Trans key='6' i18nKey='experience.competencies.imaweb.1' />,
      <Trans key='7' i18nKey='experience.competencies.imaweb.2' />,
      <Trans key='8' i18nKey='experience.competencies.imaweb.3' />,
      <Trans key='9' i18nKey='experience.competencies.imaweb.4' />,
    ],
  },
  {
    title: 'Frontend web developer',
    company: 'Cloud District',
    image: 'src/assets/images/cloud.png',
    startDate: new Date('2018-09-01'),
    finishDate: new Date('2024-02-23'),
    location: 'Madrid',
    modality: <Trans i18nKey='messages.remote' />,
    competencies: [
      <Trans key='10' i18nKey='experience.competencies.cloud.1' />,
      <Trans key='11' i18nKey='experience.competencies.cloud.2' />,
      <Trans key='12' i18nKey='experience.competencies.cloud.3' />,
      <Trans key='13' i18nKey='experience.competencies.cloud.4' />,
      <Trans key='14' i18nKey='experience.competencies.cloud.5' />,
      <Trans key='15' i18nKey='experience.competencies.cloud.6' />,
      <Trans key='16' i18nKey='experience.competencies.cloud.7' />,
    ],
  },
  {
    title: 'Senior Frontend web developer',
    company: 'SCRM Lidl international hub',
    image: 'src/assets/images/scrm.png',
    startDate: new Date('2024-04-15'),
    finishDate: null,
    location: 'Barcelona',
    modality: <Trans key='17' i18nKey='messages.remote' />,
    competencies: [],
  },
]

export default ExperienceList
