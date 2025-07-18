import { render } from 'solid-js/web'
import { Router } from '@solidjs/router'
import { I18nProvider } from './lib/i18n'
import { ThemeProvider } from './lib/theme'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './styles/globals.css'
import App from './App'

render(
 () => (
 <Router root={(props) => (
 <ThemeProvider>
 <I18nProvider>
 {props.children}
 </I18nProvider>
 </ThemeProvider>
 )}>
 <App />
 </Router>
 ),
 document.getElementById('root')
)
