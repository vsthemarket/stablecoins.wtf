import { Global } from '@emotion/react'
import 'nprogress/nprogress.css'
import 'tippy.js/dist/tippy.css'
import tw, { css, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css`
  html {
    scroll-behavior: smooth;
  }
  body {
    ${tw`antialiased bg-black text-white font-mono`}
    font-variant-ligatures: no-common-ligatures;
  }
  #__next {
    ${tw`min-h-screen h-screen relative flex flex-col`}
  }
  #nprogress > .bar {
    ${tw`bg-white`}
  }
  #nprogress > .spinner {
    ${tw`hidden!`}
  }
  .tippy-arrow {
    ${tw`hidden`}
  }
  .tippy-box {
    ${tw`bg-bbg-gray2/50 backdrop-blur text-white text-sm px-1 py-0.5 rounded`},
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles