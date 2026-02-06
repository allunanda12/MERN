import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Signup from './component/Signup'
import Todo from './component/Todo'
import Counter from './component/Counter'
import Hook from './Hooks/Hook'
import UseState from './Hooks/UseState'
import UseEffect from './Hooks/UseEffect'
import UseEffectApi from './Hooks/UseEffectApi'
import UseRef from './Hooks/UseRef'
import UseMemo from './Hooks/UseMemo'
import UseCallback from './Hooks/UseCallback'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Services />} />

        <Route path="/login" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />

        <Route path="/hook" element={<Hook />} />
        <Route path="/useState" element={<UseState />} />
        <Route path="/useEffect" element={<UseEffect />} />
        <Route path="/useEffectApi" element={<UseEffectApi />} />
        <Route path="/useRef" element={<UseRef />} />
        <Route path="/usememo" element={<UseMemo />} />
        <Route path="/useCallback" element={<UseCallback />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App