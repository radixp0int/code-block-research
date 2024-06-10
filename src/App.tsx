import './App.css'
import CodeMirrorCodeBlock from './components/CodeMirrorCodeBlock'
import { MonacoCodeBlock } from './components/MonacoCodeBlock'
import { SandBoxCodeBlock } from './components/SandBoxCodeBlock'

function App() {

  return (
    <>
      <p className="read-the-docs">
        Testing
      </p>
      <MonacoCodeBlock />
    </>
  )
}

export default App
