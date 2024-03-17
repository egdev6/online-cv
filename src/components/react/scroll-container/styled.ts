import styled, { keyframes } from 'styled-components'

const showTitle = keyframes`
  0% {
    max-width: 0px;
  }
  20%{
    max-width:150px;
  }
  80%{
    max-width:150px;
  }
  100% {
    max-width: 0px;
  }
`

export const ScrollContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 100vh;
  position: relative;

  > .step {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    hegiht: 100vh;
  }
`

export const NavigationDots = styled.nav`
  position: fixed;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 6;

  @media (max-width: 686px) {
    right: 10px;
  }

  > ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px 0;

    > li {
      border-radius: 50%;
      background-color: var(--color-background);
      width: 30px;
      height: 30px;
      border: 1px solid var(--color-text);
      cursor: pointer;
      transition: 0.3s ease-in-out;
      transform-origin: center center;
      display: flex;
      justify-content: center;
      align-items: center;

      > svg {
        width: 20px;
        stroke: var(--color-text);
      }

      &.active,
      &:hover {
        transform: scale(1.4);
        background-color: var(--color-primary);
      }

      &:hover {
        > .step-title {
          transition: 0.3s ease-in-out;
          max-width: 150px;
        }
      }

      &.active {
        > .step-title {
          animation: ${showTitle} 3s forwards;
        }
      }
    }
  }
`

export const FloatingTitle = styled.div`
  position: absolute;
  left: 0;
  transform: translateX(calc(-100% - 5px));
  max-width: 0;
  overflow: hidden;

  @media (max-width: 915px) {
    display: none;
  }

  > div {
    width: auto;
    height: 30px;
    min-width: 80px;
    background-color: var(--color-background);
    padding: 0 10px;
    border-radius: 50px;
    border: 1px solid var(--color-text-opacity);
    display: flex;
    align-items: center;
    justify-content: center;

    > p {
      color: var(--color-text);
      font-size: 12px;
    }
  }

  &::after {
    max-width: 150px;
  }
`
