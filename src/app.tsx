import { LocationProvider, Router, Route } from 'preact-iso';
import { Header } from './components/index';
import { Home, Media, NotFound } from './pages/index';
import { LanguageProvider } from './contexts';
import { BASEURL } from './shared/variables.ts';
import './app.css'

export function App() {

  return (
    <>
    
      <LocationProvider>
        <LanguageProvider>
        <Header />
        <main>
          <Router>
            <Route path={BASEURL} component={Home} />
            <Route path={`${BASEURL}media`} component={Media} />
            <Route default component={NotFound} />
          </Router>
        </main>
        </LanguageProvider>
		  </LocationProvider>
    
    </>
  )
}
