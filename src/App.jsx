import Footer from "./components/Footer/Footer"
import { Home } from "./components/Home/Home"
import { Header } from "./components/Header/Header"
import GlobalStyles from "./styles/global"
import { ThemeProvider } from "styled-components"
import { light , dark } from "./styles/themes"
import { useState } from "react"

function App() {

  const [theme, setTheme] = useState(dark)

  function toggleTheme(e) {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div id="themeChange">
          <div onClick={toggleTheme}></div>
          <Header />
        </div>
        <Home />
        <Footer />
      </ThemeProvider>
  )
}

export default App