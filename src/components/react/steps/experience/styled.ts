import styled from 'styled-components'
import { BounceInLeft, FadeInCenter, SlitInVerical } from 'src/styles/animations'

export const ExperienceContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: 0;
    filter: grayscale(100%);
    translateY(-600px) rotateX(-30deg) scale(0);
    opacity:0;
  }
  > .image-wrapper {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 0;
    background-color: var(--color-background-opacity);
  }

  > h3 {
    width: 100%;
    text-align: center;
    color: var(--color-text);
    margin-bottom: 40px;
    position: absolute;
    top: 80px;
    z-index: 5;
    opacity: 0;

    @media (max-width: 915px) {
      top: 55px;
    }
  }

  &.start-animation {
    > img {
      animation: ${BounceInLeft} 0.6s ease-in-out 0.6s 1 forwards;
    }
    > h3 {
      animation: ${FadeInCenter} 0.8s ease-in-out 0.6s 1 forwards;
    }

    > .experience-list {
      > .experience-item {
        &:nth-child(1) {
          animation: ${SlitInVerical} 0.8s ease-in-out 1s 1 forwards;
        }
        &:nth-child(2) {
          animation: ${SlitInVerical} 0.8s ease-in-out 1s 1 forwards;
        }
        &:nth-child(3) {
          animation: ${SlitInVerical} 0.8s ease-in-out 1s 1 forwards;
        }
        &:nth-child(4) {
          animation: ${SlitInVerical} 0.8s ease-in-out 1s 1 forwards;
        }
      }

      &.fixed {
        > .experience-item {
          animation: none !important;
          transform: translateZ(0) rotateY(0);
          opacity: 1;

          &:hover {
            transform: scale(1.1);
            border: 1px solid var(--color-text);
          }
        }
      }
    }
  }
`

export const ExperienceList = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 1390px) {
    max-width: 740px;
    column-gap: 40px;
    margin-top: 80px;
  }

  @media (max-width: 915px) {
    column-gap: 20px;
  }
`

export const ExperienceItem = styled.div`
  width: calc(25% - 20px);
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: var(--color-background);
  border: 1px solid var(--color-text-opacity);
  overflow: hidden;
  padding-bottom: 10px;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  position: relative;
  transform: translateZ(-800px) rotateY(90deg);
  opacity: 0;

  > .hover-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: var(--color-primary-opacity);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: 0.4s ease-in-out;
    backdrop-filter: blur(10px);
    z-index: 2;

    > h6 {
      color: var(--color-text);
      font-weight: 600;
      width: 80%;
      text-align: center;
    }

    > svg {
      width: 60px;
      height: 60px;
      stroke: var(--color-text);
    }
  }

  > .image-wrapper {
    width: 100%;
    height: 150px;
    overflow: hidden;
    position: relative;

    > img {
      object-fit: cover;
      background-position: center center;
      transition: 0.4s ease-in-out;
    }
  }

  > .experience-title {
    width: 80%;
    color: var(--color-text);
    min-height: 70px;
    padding: 5px 0;
    margin-bottom: 10px;
    border-bottom: 5px solid var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: 0.4s ease-in-out;
  }

  > .experience-dates {
    font-weight: 600;
    color: var(--color-text);
  }

  > .experience-period {
    height: 14px;
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--color-text);
    margin-bottom: 10px;
  }

  > .experience-location {
    font-weight: 300;
    font-size: 0.8rem;
    color: var(--color-text);
    margin-bottom: 10px;
  }

  &:hover {
    transform: scale(1.1);
    border: 1px solid var(--color-text);

    > .hover-wrapper {
      opacity: 1;
    }
    > .image-wrapper {
      > img {
        transform: scale(1.8) rotate(-20deg);
      }
    }
  }

  @media (max-width: 1390px) {
    width: calc(50% - 40px);

    > .image-wrapper {
      width: 100%;
      height: 120px;
    }
  }
`

export const ModalHeading = styled.div`
  > h5 {
    color: var(--color-text);
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }
  > img {
    width: 100%;
    margin: 0 auto 20px;
    border-radius: 20px;
  }

  > h6 {
    color: var(--color-text);
    font-weight: 600;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 5px solid var(--color-primary);
    margin-bottom: 10px;
  }

  > .experience-dates {
    font-weight: 600;
    color: var(--color-text);
    text-align: center;
  }

  > .experience-period {
    height: 14px;
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--color-text);
    margin-bottom: 10px;
    text-align: center;
  }

  > .experience-location {
    font-weight: 300;
    font-size: 0.8rem;
    color: var(--color-text);
    margin-bottom: 10px;
    text-align: center;
  }
`

export const ModalContent = styled.div`
  width: 100%;
  height: auto;

  > h6 {
    width: calc(100% - 60px);
    border-bottom: 5px solid var(--color-secondary);
    padding-bottom: 10px;
    margin-bottom: 20px;
  }

  > div {
    margin-bottom: 20px;

    > p {
      margin-bottom: 10px;
    }
    > ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      > li {
        width: 100%;
        position: relative;
        font-size: 1rem;
        padding: 5px 10px;
        display: flex;
        align-items: center;

        > svg {
          width: 18px;
          height: 18px;
          fill: var(--color-primary);
          transform: rotate(-90deg);
          margin-right: 5px;
        }

        > p {
          width: calc(100% - 20px);
        }
      }
    }
  }
`
