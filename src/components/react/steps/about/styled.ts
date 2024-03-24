import styled from 'styled-components'
import {
  BounceInLeft,
  BounceInRight,
  SlideOutRight,
  SlideOutLeft,
  LeftRightRotated,
  LeftRight,
  BounceOutBottom,
  FadeInBottom,
} from '@styles/animations'

export const AboutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  > h3 {
    width: 100%;
    text-align: center;
    color: var(--color-text);
    margin-bottom: 40px;
    position: absolute;
    top: 80px;
    z-index: 5;

    @media (max-width: 915px) {
      top: 55px;
    }
  }
`
export const AboutWrapper = styled.div<{ translate?: number }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: 915px) {
    flex-direction: column;
    justify-content: flex-start;

    &:last-child {
      flex-direction: column-reverse;
      justify-content: flex-start;
    }
  }

  > .about-professional {
    width: 0;
    padding: 0;
    overflow: hidden;

    > .about-professional-info {
      width: 50vw;
      z-index: 1;
      opacity: 0;
      transition: 1s ease-in-out;

      @media (max-width: 915px) {
        width: 100vw;
      }

      > h5 {
        color: var(--color-text);
      }

      > .presentation-separator {
        width: 100%;
        height: 4px;
        background-color: var(--color-primary);
        margin: 20px 0 40px;

        @media (max-width: 915px) {
          margin: 20px 0;
        }
      }

      > div {
        > p {
          color: var(--color-text);
          line-height: 1.4;
          font-weight: 300;
          margin-bottom: 20px;

          > strong {
            font-weight: 600;
          }

          @media (max-width: 915px) {
            line-height: 1.2;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
  > .about-selection-professional {
    transform: translateX(50vw);
    animation: ${SlideOutLeft} 0.6s ease-in-out forwards;
    z-index: 3;

    @media (max-width: 915px) {
      transform: translateX(0) translateY(-100vh);
      animation: ${BounceOutBottom} 0.4s ease-in-out forwards;
    }
  }
  > .about-selection-personal {
    transform: translateX(-50vw);
    animation: ${SlideOutRight} 0.6s ease-in-out forwards;
    z-index: 3;

    @media (max-width: 915px) {
      transform: translateX(0) translateY(-100vh);
      animation: ${BounceOutBottom} 0.4s ease-in-out forwards;
    }
  }
  > .about-personal {
    width: 0;
    padding: 0;
    overflow: hidden;

    > .about-personal-info {
      width: 50vw;
      z-index: 1;
      opacity: 0;
      transition: 1s ease-in-out;

      @media (max-width: 915px) {
        width: 100vw;
      }

      > h5 {
        color: var(--color-text);
      }

      > .presentation-separator {
        width: 100%;
        height: 4px;
        background-color: var(--color-primary);
        margin: 20px 0 40px;

        @media (max-width: 915px) {
          margin: 20px 0;
        }
      }

      > div {
        > p {
          color: var(--color-text);
          line-height: 1.4;
          font-weight: 300;
          margin-bottom: 20px;

          > strong {
            font-weight: 600;
          }

          @media (max-width: 915px) {
            line-height: 1.1;
            margin-bottom: 10px;
          }
        }
      }
    }
  }

  &.active {
    > .about-professional {
      padding: 160px 120px;
      width: 50vw;

      @media (max-width: 1124px) {
        padding: 80px;
      }

      @media (max-width: 915px) {
        width: 100vw;
        padding: 140px 80px 40px;
      }

      > .about-professional-info {
        z-index: 2;
        opacity: 1;
      }
    }

    > .about-selection-professional {
      animation: ${BounceInRight} 0.6s ease-in-out 0.4s 1 forwards;
      @media (max-width: 915px) {
        animation: ${FadeInBottom} 0.6s ease-in-out 0.6s 1 forwards;
      }
    }

    > .about-selection-personal {
      animation: ${BounceInLeft} 0.6s ease-in-out 0.4s 1 forwards;
      @media (max-width: 915px) {
        animation: ${FadeInBottom} 0.6s ease-in-out 0.6s 1 forwards;
      }
    }

    > .about-personal {
      padding: 160px 120px;
      width: 50vw;

      @media (max-width: 1124px) {
        padding: 80px;
      }

      @media (max-width: 915px) {
        width: 100vw;
        padding: 140px 80px 40px;
      }

      > .about-personal-info {
        z-index: 2;
        opacity: 1;
      }
    }
  }
`
export const AboutProfessional = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: var(--color-background);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 915px) {
    width: 100vw;
    height: 75vh;
    align-items: flex-start;
  }
`

export const AboutSelection = styled.div`
  width: 50vw;
  height: 100vh;
  z-index: 1;

  @media (max-width: 915px) {
    width: 100vw;
    height: 50vh;
  }
`

export const AboutPersonal = styled.div`
  width: 50vw;
  padding: 160px 80px;
  height: 100vh;
  background-color: var(--color-background);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  @media (max-width: 915px) {
    width: 100vw;
    height: 50vh;
    align-items: flex-start;
  }
`

export const AboutButton = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  > img {
    object-fit: cover;
    filter: grayscale(100%);
  }

  > .filter-background {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;

    &.professional-dist {
      background: var(--color-background-opacity-right);
    }

    &.personal-dist {
      background: var(--color-background-opacity-left);
    }

    @media (max-width: 915px) {
      &.professional-dist,
      &.personal-dist {
        background: var(--color-background-opacity-bottom);
      }
    }
  }

  > button {
    min-width: 0px;
    appearance: none;
    border: 2px solid var(--color-primary);
    background-color: var(--color-background-opacity);
    border-radius: 20px;
    position: absolute;
    bottom: 80px;
    display: flex;
    align-items: center;
    padding: 15px 20px;
    cursor: pointer;
    z-index: 5;

    &:hover {
      transition: 0.4s ease-in-out;
      background-color: var(--color-background);
    }

    > p {
      font-size: 1.2rem;
      color: var(--color-text);
    }

    &.professional-button {
      right: 80px;
      > svg {
        width: 20px;
        height: 20px;
        transform: rotate(-90deg);
        margin-left: 10px;
        fill: var(--color-text);
      }

      &:hover {
        > svg {
          animation: ${LeftRight} 1s infinite;
        }
      }

      @media (max-width: 915px) {
        max-height: 60px;
        top: 40px;
        right: 60px;
      }
    }

    &.personal-button {
      left: 80px;
      > svg {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        transform: rotate(90deg);
        fill: var(--color-text);
      }

      &:hover {
        > svg {
          animation: ${LeftRightRotated} 1s infinite;
        }
      }

      @media (max-width: 915px) {
        max-height: 60px;
        top: 40px;
        right: 60px;
      }
    }
  }
`
