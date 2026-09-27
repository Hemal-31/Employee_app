import NavBar from './components/Navbar'
import Fotter from './components/Fotter'
import Content from './components/Content'

function App() {
  return (
    <>
      <div className='container'>
        <header className='app-header'>
          <h1 className='app-title'>Employement Management System</h1>
          <NavBar />
        </header>
        <main className='content'>
          <Content />
        </main>
      </div>
      <Fotter />
    </>
  )
}

export default App
