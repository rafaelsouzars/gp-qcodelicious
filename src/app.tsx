import { LocationProvider, Router, Route } from 'preact-iso';
import { Header } from './components/index';
import { Home, NotFound } from './pages/index';
import { LanguageProvider } from './contexts'
import './app.css'

export function App() {

  return (
    <>
    
      <LocationProvider>
        <LanguageProvider>
        <Header />
        <main>
          <Router>
            <Route path="/" component={Home} />
            <Route default component={NotFound} />
          </Router>
        </main>
        </LanguageProvider>
		  </LocationProvider>
    
    </>
  )
}
