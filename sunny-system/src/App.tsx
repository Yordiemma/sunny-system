import { Checklist } from './components/Checklist'

function App() {
  return (
    <main className="app-shell">
      <section className="app-intro">
        <p className="app-kicker">Checklist app</p>
        <h1>My Checklist</h1>
        <p className="app-subtitle">
          One working app built from the design rules, tokens, and state
          behavior in the spec.
        </p>
      </section>

      <Checklist />
    </main>
  )
}

export default App
