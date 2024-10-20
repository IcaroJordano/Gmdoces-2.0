import { CardPreview } from "./CardPreview"
import { Header } from "./Header"
import { NavBar } from "./NavBar"

function App() {
  return (
    <div className="bg-neutral-50 h-screen">
      <CardPreview></CardPreview>
      <Header></Header>
      <NavBar></NavBar>
    </div>
  )
}

export default App
