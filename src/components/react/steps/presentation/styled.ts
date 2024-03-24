import styled from 'styled-components'
import { BounceInLeft, BounceInRight, BounceInTop, BounceInBottom, FadeInBottom } from '@styles/animations'

export const PresentationContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;

  &.start-animation {
    .presentation-text {
      animation: ${BounceInLeft} 1s ease-in-out 0.8s 1 forwards;
    }

    .presentation-image {
      animation: ${BounceInRight} 1s ease-in-out 0.8s 1 forwards;
    }

    .presentation-me {
      animation: ${FadeInBottom} 1s ease-in-out 0.2s 1 forwards;
    }
  }

  @media (max-width: 1124px) {
    height: 100vh;
    padding: 80px 40px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;º
    left: 0px;
    padding: 40px 24px;
    top: 7px;

    &.start-animation {
      .presentation-text {
        animation: ${BounceInTop} 1s ease-in-out 0s 1 forwards;
      }
      .presentation-image {
        animation: ${BounceInBottom} 1s ease-in-out 0s 1 forwards;
      }

      .presentation-me {
        animation: ${BounceInBottom} 1s ease-in-out 0s 1 forwards;
      }
    }
  }
`

export const PresentationText = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 25% 0 120px;
  opacity: 0;

  > h4 {
    color: var(--color-primary);
    font-weight: 400;
    margin-bottom: 20px;
  }

  .presentation-header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    > h1 {
      font-weight: 500;
      color: var(--color-text);
    }

    @media (max-width: 1124px) {
      flex-direction: row;
      gap: 20px;
    }

    @media (max-width: 986px) {
      flex-direction: column;
      gap: 0;
    }
  }

  > p {
    font-size: 1.2rem;
    color: var(--color-text);
    font-weight: 300;
  }

  @media (max-width: 1280px) {
    max-width: calc(100% - 150px);
    padding-left: 80px;
    padding-right: 0;
  }

  @media (max-width: 1124px) {
    padding: 60px 40px;
    max-width: 100%;
    z-index: 3;
  }

  @media (max-width: 686px) {
    padding: 24px;
    > p {
      font-size: 0.9rem;
    }
  }

  .presentation-separator {
    width: 30%;
    height: 4px;
    background-color: var(--color-primary);
    margin: 40px 0 20px;

    @media (max-width: 915px) {
      margin: 20px 0;
    }
  }
`

export const PresentationImage = styled.div`
  max-width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  opacity: 0;

  @media (max-width: 1124px) {
    width: 100vw;
    height: calc(100vh - 50vh);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  > img {
    object-fit: cover;
    filter: grayscale(100%);
  }

  > .presentation-image-filter {
    width: 50vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background: var(--color-background-opacity-right);

    @media (max-width: 1124px) {
      width: 100vw;
      height: 50vh;
      background: var(--color-background-opacity-bottom);
    }
  }
`

export const PresentationMe = styled.div`
  max-width: 30%;
  min-width: 400px;
  position: absolute;
  top: calc(calc(100vh / 2) - 300px);
  left: calc(calc(100vw / 2) - 15%);
  z-index: 5;
  opacity: 0;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 1124px) {
    min-width: 400px;
    bottom: -520px;
    top: initial;
    left: calc(calc(100vw / 2) - 200px);
  }
`
