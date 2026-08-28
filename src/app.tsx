import { LocationProvider, Router, Route } from 'preact-iso';
import { Header } from './components/Header.tsx';
import { Home } from './pages/Home/Home.tsx';
import { NotFound } from './pages/_404.tsx';
import './app.css'

export function App() {

  return (
    <>
      <LocationProvider>
        <Header />
        <main>
          <Router>
            <Route path="/" component={Home} />
            <Route default component={NotFound} />
          </Router>
        </main>
		  </LocationProvider>
    </>
  )
}
