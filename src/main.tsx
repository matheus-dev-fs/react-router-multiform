import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.component.tsx'
import { GlobalStyles } from './styles/Global.styles.ts'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GlobalStyles />
        <App />
    </StrictMode>,
)
