import { AppShell } from './components/layout/AppShell'
import { Header } from './components/layout/Header'
import { MainWorkspace } from './components/layout/MainWorkspace'
import { ExplorerPanel } from './components/layout/ExplorerPanel'
import { AnalysisPanel } from './components/layout/AnalysisPanel'
import { BottomPanel } from './components/layout/BottomPanel'
import { StatusBar } from './components/layout/StatusBar'
import {Notebook} from './components/notebook/Notebook'
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
        <Notebook>
          Main Workspace
        </Notebook>
        <AnalysisPanel>
          Analysis
        </AnalysisPanel>
      </MainWorkspace>

      <BottomPanel>
        Bottom Panel
      </BottomPanel>

      <StatusBar>
        Status Bar
      </StatusBar>
    </AppShell>
  )
}

export default App