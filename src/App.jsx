import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [deployCount, setDeployCount] = useState(0)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="app-container">
      <div className="header-section">
        <div className="logo-container">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo vite-logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react-logo" alt="React logo" />
          </a>
        </div>
        <h1 className="main-title">🚀 CI/CD Pipeline Demo</h1>
        <p className="subtitle">Automated Deployment with GitHub Actions</p>
      </div>

      <div className="content-grid">
        <div className="card gradient-card">
          <h2>✅ Pipeline Status</h2>
          <div className="status-badge failed">
            <span className="pulse-dot"></span>
            Deployed Failed
          </div>
          <p className="timestamp">
            Last Updated: {currentTime.toLocaleTimeString('en-IN', { 
              hour: '2-digit', 
              minute: '2-digit',
              second: '2-digit'
            })}
          </p>
        </div>

        <div className="card">
          <h2>🔄 Deployment Counter</h2>
          <div className="counter-display">{deployCount}</div>
          <button 
            className="deploy-button"
            onClick={() => setDeployCount(deployCount + 1)}
          >
            Simulate Deploy
          </button>
          <p className="hint">Click to increment deployment count</p>
        </div>

        <div className="card">
          <h2>📊 Tech Stack</h2>
          <ul className="tech-list">
            <li>⚛️ React + Vite</li>
            <li>🔧 GitHub Actions</li>
            <li>📄 GitHub Pages</li>
            <li>🎨 Modern CSS</li>
          </ul>
        </div>

        <div className="card info-card">
          <h2>🎯 How It Works</h2>
          <ol className="workflow-steps">
            <li>Push code to <code>main</code> branch</li>
            <li>GitHub Actions triggers automatically</li>
            <li>Build process runs tests & compiles</li>
            <li>Deploy to GitHub Pages instantly</li>
          </ol>
        </div>
      </div>

      <div className="footer-section">
        <div className="feature-badges">
          <span className="badge">⚡ Lightning Fast</span>
          <span className="badge">🔒 Secure</span>
          <span className="badge">🌐 Global CDN</span>
          <span className="badge">♻️ Auto Deploy</span>
        </div>
        <p className="footer-text">
          Edit <code>src/App.jsx</code>, commit, and watch it deploy automatically! 
        </p>
        <p className="repo-link">
          Repository: <a href="https://github.com/KTanuj62/ci-cd-react-app" target="_blank" rel="noopener noreferrer">
            KTanuj62/ci-cd-react-app
          </a>
        </p>
      </div>
    </div>
  )
}

export default App
