import styled from 'styled-components'

export const MenuContainer = styled.header`
  position: fixed;
  top: 0;
  left: 45px;
  right: 45px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 8;

  @media (max-width: 686px) {
    left: 0px;
    right: 0px;
    height: 40px;
  }
`

export const LogoContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: relative;
  top: -4px;
  left: 30px;

  > svg {
    width: 40px;
    height: auto;
  }

  > h4 {
    font-family: var(--font-primary);
    color: var(--color-text);
    margin-left: 10px;
    margin-top: 10px;

    > span {
      font-family: var(--font-primary);
      color: var(--color-primary);
    }
  }

  @media (max-width: 686px) {
    left: 0px;
    padding: 0 45px;
    top: 7px;
  }
`

export const LanguageContainer = styled.nav`
  width: 100px;
  height: 48px;
  position: relative;
  top: 10px;
  right: 55px;

  @media (max-width: 686px) {
    right: 40px;
    top: 18px;
  }

  .switch {
    position: relative;
    display: inline-block;
    margin: 0 5px;
    display: flex;
    align-items: center;

    > label {
      border: 1px solid var(--color-text);
    }

    > span {
      position: absolute;
      top: 5px;
      pointer-events: none;
      width: 50%;

      &.on {
        filter: grayscale(0);
        left: 0;
        padding-left: 2px;

        &.grey {
          filter: grayscale(1);
        }
      }

      &.off {
        filter: grayscale(0);
        right: 0;
        padding-right: 12px;

        &.grey {
          filter: grayscale(1);
        }
      }

      > svg {
        width: 25px;
        height: auto;
      }
    }

    > input {
      position: absolute;
      top: -20px;
      visibility: hidden;
    }
  }

  .check-toggle + label {
    display: block;
    position: relative;
    cursor: pointer;
    outline: none;
    user-select: none;
  }

  input.check-toggle-round-flat + label {
    padding: 2px;
    width: 97px;
    height: 35px;
    background-color: var(--color-background);
    border-radius: 60px;
  }
  input.check-toggle-round-flat + label:before,
  input.check-toggle-round-flat + label:after {
    display: block;
    position: absolute;
    content: '';
  }

  input.check-toggle-round-flat + label:before {
    top: 2px;
    left: 2px;
    bottom: 2px;
    right: 2px;
    background-color: var(--color-background);
    border-radius: 60px;
  }
  input.check-toggle-round-flat + label:after {
    top: 4px;
    left: 4px;
    bottom: 4px;
    width: 40px;
    background-color: var(--color-text);
    border-radius: 52px;
    transition: margin 0.2s;
  }

  input.check-toggle-round-flat:checked + label:after {
    margin-left: 38px;
  }
`
