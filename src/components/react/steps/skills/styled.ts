import { BounceInTop, SlideInFwdCenter, FadeInCenter } from 'src/styles/animations'
import styled from 'styled-components'

interface SkillItemProps {
  $child: number
}

export const SkillsContainer = styled.div`
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
      animation: ${BounceInTop} 0.6s ease-in-out 0.4s 1 forwards;
    }

    > h3{
      animation: ${FadeInCenter} 0.8s ease-in-out 1s 1 forwards;
    }

    >.skills-grid{
      >div{
        >.skill-item{
          animation: ${SlideInFwdCenter} 0.6s ease-in-out 1s 1 forwards;
        }
      }

       &.fixed{
        >div{
          >.skill-item{
            animation: none !important;
            transform: scale(1);
            transition:0.6s ease-in-out;

            &:hover{
              background: var(--color-text);
              transform: scale(1.5);
              z-index: 1;
  
              > .skill-item-content {
                background-color: var(--color-primary);
                > svg {
                  opacity: 0.1;
                }
                .skill-item-info {
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
  }
`

export const SkillsWrapper = styled.div`
  padding: 160px 120px;
  display: flex;
  margin-bottom: 40px;

  > div {
    width: 100%;
    max-width: 1080px;
    font-size: 0;
    margin: 0 auto;

    &::before {
      content: '';
      width: calc(var(--s) / 2 + var(--m));
      float: left;
      height: 100%;
      shape-outside: repeating-linear-gradient(#0000 0 calc(var(--r) - 3px), #000 0 var(--r));
    }
  }
`

export const SkillItem = styled.button<SkillItemProps>`
  appearance: none;
  border: 0;
  width: var(--s);
  max-width: var(--s);
  margin: var(--m);
  height: var(--s);
  max-height: var(--s);
  display: inline-block;
  font-size: initial;
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  background: var(--color-text-opacity);
  margin-bottom: calc(var(--m) - var(--s) * 0.5);
  position: relative;
  transition: 0.6s ease-in-out;
  transform: scale(0);

  > .skill-item-content {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 18px;
    left: 18px;
    bottom: 18px;
    right: 18px;
    background-color: var(--color-background);
    overflow: hidden;
    transform: rotate(-45deg);
    transition: 0.2s ease-in-out;
    cursor: pointer;

    > svg {
      width: auto;
      height: 40px;
      transform: rotate(45deg);
      opacity: 1;
      transition: 0.2s ease-in-out;
    }

    .skill-item-info {
      display: flex;
      flex-direction: column;
      opacity: 0;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      transform: rotate(45deg);
      transition: 0.6s ease-in;
      align-items: center;
      justify-content: center;

      > svg {
        width: 15px;
        height: 15px;
        path:last-child {
          fill: var(--color-yellow);
        }
      }
      > p {
        padding: 5px;
        color: var(--color-text);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        text-align: center;
      }
    }
  }
`
