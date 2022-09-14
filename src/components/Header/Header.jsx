import { useContext } from "react"
import { ThemeContext } from "styled-components"
import { HeaderContainer } from "./styles"

export function Header () {

  const { title } = useContext(ThemeContext)

  return (
    <HeaderContainer>
      <img src="/logo.svg" alt="splitter logo image" className={title} />
      <img src="ClickMe.png" alt="click me to change theme text and arrow pointing to left" className={`clickMeImg ${title}`}/>
    </HeaderContainer>
  )
}