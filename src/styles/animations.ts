import { keyframes } from 'styled-components'

export const BounceInRight = keyframes`
  0% {
    transform: translateX(600px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateX(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateX(68px);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateX(32px);
    animation-timing-function: ease-in;
  }
  90% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  95% {
    transform: translateX(8px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateX(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
`
export const BounceInLeft = keyframes`
  0% {
    transform: translateX(-600px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateX(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateX(-68px);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateX(-28px);
    animation-timing-function: ease-in;
  }
  90% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  95% {
    transform: translateX(-8px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateX(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
`
export const BounceInBottom = keyframes`
  0% {
    transform: translateY(500px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateY(65px);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateY(28px);
    animation-timing-function: ease-in;
  }
  90% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  95% {
    transform: translateY(8px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
`
export const BounceOutBottom = keyframes`
  0%{
    transform: translateY(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  38%{
    transform: translateY(8px);
    animation-timing-function: ease-in;
  }
  55%{
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  72%{
    transform: translateY(28px);
    animation-timing-function: ease-in;
  }
  81%{
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  90%{
    transform: translateY(65px);
    animation-timing-function: ease-in;
  }
  95%{
    transform: translateY(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  100%{
    transform: translateY(500px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
`
export const BounceInTop = keyframes`
  0% {
    transform: translateY(-500px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateY(-65px);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateY(-28px);
    animation-timing-function: ease-in;
  }
  90% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  95% {
    transform: translateY(-8px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
`
export const FadeInBottom = keyframes`
  0% {  
    opacity: 0; 
    transform: translateY(calc(100vw / 2));
  }
  70%{
    opacity:0;
  }
  100% {  
    opacity: 1; 
    transform: translateY(0);
  }
`
export const FadeInCenter = keyframes`
  0% {  
    opacity: 0;
  }
  100% {  
    opacity: 1;
  }
`
export const SlideOutRight = keyframes`
  0% {
    transform: translateZ(0) translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateZ(-600px) translateX(-1000px);
    opacity: 0;
  }
`
export const SlideOutLeft = keyframes`
  0% {
    transform: translateZ(0) translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateZ(600px) translateX(1000px);
    opacity: 0;
  }
`
export const TopBottom = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(3px);
  }
  100% {
    transform: translateY(-3px);
  }
`
export const TopBottomRotated = keyframes`
  0% {
    transform: rotate(-180deg) translateY(0);
  }
  50% {
    transform: rotate(-180deg) translateY(3px);
  }
  100% {
    transform: rotate(-180deg) translateY(-3px);
  }
`
export const LeftRight = keyframes`
  0% {
    transform: rotate(-90deg) translateY(0);
  }
  50% {
    transform: rotate(-90deg) translateY(3px);
  }
  100% {
    transform: rotate(-90deg) translateY(-3px);
  }
`
export const LeftRightRotated = keyframes`
  0% {
    transform: rotate(90deg) translateY(0);
  }
  50% {
    transform: rotate(90deg) translateY(3px);
  }
  100% {
    transform: rotate(90deg) translateY(-3px);
  }
`
export const SlideInEllipticTopFwd = keyframes`
  0% {
    transform: translateY(-600px) rotateX(-30deg) scale(0);
    transform-origin: 50% 100%;
    opacity: 0;
  }
  100% {
    transform: translateY(0) rotateX(0) scale(1);
    transform-origin: 50% 1400px;
    opacity: 1;
  }
`
export const SlideInFwdCenter = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`
export const SlitInVerical = keyframes`
  0% {
    transform: translateZ(-800px) rotateY(90deg);
    opacity: 0;
  }
  54% {
    transform: translateZ(-160px) rotateY(87deg);
    opacity: 1;
  }
  100% {
    transform: translateZ(0) rotateY(0);
    opacity: 1;
  }
`
