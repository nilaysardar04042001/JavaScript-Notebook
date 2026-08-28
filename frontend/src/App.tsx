import { AppShell } from './components/layout/AppShell'
import { Header } from './components/layout/Header'
// import './App.css'

function App() {
  return (
    <AppShell>
      <Header>
        Header
      </Header>

      <main className="app-shell__main">
        <aside className="app-shell__explorer">
          Explorer
        </aside>

        <section className="app-shell__workspace">
          Main Workspace
        </section>

        <aside className="app-shell__analysis">
          Analysis
        </aside>
      </main>

      <section className="app-shell__bottom-panel">
        Bottom Panel
      </section>

      <footer className="app-shell__statusbar">
        Status Bar
      </footer>
    </AppShell>
  )
}

export default App