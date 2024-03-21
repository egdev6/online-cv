import styled from 'styled-components'

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  position: relative;
  top: 50%;
  transform: translateY(-80%);
  margin: auto;
  padding: 24px;
  background-color: transparent;
  border-radius: 8px;
  transition: transform 400ms;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 915px) {
    height: auto;
    max-height: calc(100vh - 240px);
    max-width: 800px;
    position: relative;
    top: 50%;
    transform: translateY(-80%);
  }
`

export const ContentWrapper = styled.div`
  width: 0;
  height: auto;
  overflow: hidden;
  min-height: 360px;
  max-height: calc(100% - 80px);
  padding: 0;
  background-color: var(--color-text);
  position: relative;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  transition: 0.4s ease-in-out 0.4s;

  > div {
    width: 452px;
    overflow: hidden;
    padding: 20px;
  }

  > button {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    apperance: none;
    border: 0;
    transition: 0.3s ease-in-out;
    background-color: transparent;
    margin-bottom: 10px;
    > svg {
      width: 30px;
      height: 30px;
      fill: var(--color-background);
    }

    &:hover {
      transform: scale(1.2);
      background-color: transparent;
    }
  }

  @media only screen and (max-width: 915px) {
    max-width: calc(100vw - 160px);
    max-height: calc(100vh - 160px);
  }
`
export const ChildrenContent = styled.div`
  opacity: 0;
  transition: 0.4s ease-in-out 0.8s;
`

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  z-index: 7;
  background-color: var(--color-background-opacity);
  opacity: 0;
  transition: 0.4s ease-in-out;

  &.fade-in {
    opacity: 1;
    ${Content} {
      transform: translateY(-50%);

      ${ContentWrapper} {
        width: calc(100% - 300px);

        ${ChildrenContent} {
          opacity: 1;
        }
      }
    }
  }
`

export const Heading = styled.div`
  width: 300px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  background: var(--color-background-opacity-top);
  padding: 20px;
  border-radius: 20px;
  > h5 {
    color: var(--color-text);
    font-size: 24px;
    margin-bottom: 20px;
  }
  > svg {
    width: calc(100% - 40px);
    margin: 0 auto 20px;
  }

  .main-stack {
    padding: 5px 10px;
    border: 1px solid var(--color-yellow);
    color: var(--color-text);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-bottom: 10px;

    > svg {
      width: 20px;
      height: 20px;
      margin-right: 10px;

      > path:last-child {
        fill: var(--color-yellow);
      }
    }
  }

  .skill-description {
    color: var(--color-text);
    line-height: 1.2;
    margin-bottom: 20px;
  }
`
