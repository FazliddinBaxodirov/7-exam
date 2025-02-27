import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { SpotifyContext } from './context/SpotifyContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <SpotifyContext>
            <App />
        </SpotifyContext>
    </BrowserRouter>
)
