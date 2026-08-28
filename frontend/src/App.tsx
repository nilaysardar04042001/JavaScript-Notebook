import { AppShell } from './components/layout/AppShell'
import { Header } from './components/layout/Header'
import { MainWorkspace } from './components/layout/MainWorkspace'
import { ExplorerPanel } from './components/layout/ExplorerPanel'
// import './App.css'

function App() {
  return (
    <AppShell>
      <Header>
        Header
      </Header>

      <MainWorkspace>
        <ExplorerPanel>
          Explorer
        </ExplorerPanel>
        <section>Main Workspace</section>
        <aside>Analysis</aside>
      </MainWorkspace>

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