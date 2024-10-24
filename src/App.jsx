import './App.css'
import BMI from './components/bmi'
import Classes from './components/classes'
import Contact from './components/contact'
import Footer from './components/footer'
import Header from './components/header'
import Hero from './components/hero'
import Purchase from './components/purchase'
import Reviews from './components/reviews'
import Statistics from './components/statistics'
import Trainers from './components/trainers'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Statistics />
      <Classes />
      <BMI />
      <Trainers />
      <Purchase />
      <Reviews />
      <Contact />
      <Footer />
    </>
  )
}

export default App
