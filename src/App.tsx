import GithubMark from './GithubMark'
import './styles/sonar.scss'

function App() {
  return (
    <div className="App">
      <div className="sonar">
        <div className="ring radius-20" />
        <div className="ring radius-40" />
        <div className="ring radius-60" />
        <div className="ring radius-80" />
        <div className="ping" />
        <div className="sweep" />
        <div className="gridLine" />
        <div className="gridLine rotate-45" />
        <div className="gridLine rotate-90" />
        <div className="gridLine rotate-135" />
        <div className="bogey bogey-1" />
        <div className="bogey bogey-2" />
        <div className="bogey bogey-3" />
        <div className="bogey bogey-4" />
      </div>
      <GithubMark />
    </div>
  )
}

export default App
