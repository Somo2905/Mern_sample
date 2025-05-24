import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, ColorModeScript,extendTheme} from "@chakra-ui/react"
import { BrowserRouter } from "react-router-dom";
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}
const theme = extendTheme({ config })
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
)
