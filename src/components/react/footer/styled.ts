import { TopBottomRotated, TopBottom } from '@styles/animations'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
  height: 40px;
  position: fixed;
  bottom: 0;
  left: 45px;
  right: 45px;
  z-index: 8;

  @media (max-width: 686px) {
    left: 24px;
    right: 24px;
  }

  > ul {
    position: absolute;
    left: 52px;
    bottom: 25px;
    list-style: none;
    display: flex;
    gap: 20px;

    @media (max-width: 686px) {
      width: 180px;
      position: relative;
      bottom: -5px;
      left: initial;
      margin: auto;
    }

    > li {
      width: 30px;
      height: 30px;

      > a {
        cursor: pointer;
        border-radius: 50%;
        background-color: var(--color-background);
        border: 1px solid var(--color-text);
        transform-origin: center center;
        transition: 0.3s ease-in-out;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;

        > svg {
          width: 20px;
          stroke: var(--color-text);
        }

        &:hover {
          transform: scale(1.5);
          background-color: var(--color-primary);
        }
      }
    }
  }
`

export const MouseContainer = styled.div`
  width: 40px;
  height: 94px;
  position: absolute;
  bottom: 50px;
  left: calc(calc(100vw / 2) - 65px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  z-index: 5;

  > .arrow-up-icon {
    width: 20px;
    height: 20px;
    opacity: 1;
    transition: 0.3s ease-in-out;
    > svg {
      width: 20px;
      transform: rotate(-180deg);
      animation: ${TopBottomRotated} 1s infinite;
      fill: var(--color-text);
    }
    &.hidden {
      opacity: 0;
    }
  }
  > .mouse-icon {
    width: 30px;
    height: 30px;
    > svg {
      width: 30px;
      height: 30px;
      fill: var(--color-text);
    }
  }
  > .arrow-down-icon {
    width: 20px;
    height: 20px;
    opacity: 1;
    transition: 0.3s ease-in-out;
    > svg {
      width: 20px;
      animation: ${TopBottom} 1s infinite;
      fill: var(--color-text);
    }
    &.hidden {
      opacity: 0;
    }
  }

  @media (max-width: 686px) {
    bottom: 0px;
    left: calc(calc(100vw / 2) - 35px);
    width: 20px;

    > .arrow-up-icon {
      width: 15px;
      height: 15px;
      opacity: 1;
      transition: 0.3s ease-in-out;
      > svg {
        width: 15px;
        transform: rotate(-180deg);
        animation: ${TopBottomRotated} 1s infinite;
        fill: var(--color-text);
      }
      &.hidden {
        opacity: 0;
      }
    }
    > .mouse-icon {
      width: 20px;
      height: 20px;
      > svg {
        width: 20px;
        height: 20px;
        fill: var(--color-text);
      }
    }
    > .arrow-down-icon {
      width: 15px;
      height: 15px;
      opacity: 1;
      transition: 0.3s ease-in-out;
      > svg {
        width: 15px;
        animation: ${TopBottom} 1s infinite;
        fill: var(--color-text);
      }
      &.hidden {
        opacity: 0;
      }
    }
  }
`
