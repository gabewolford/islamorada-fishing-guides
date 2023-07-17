import Hero from './components/HomeComponents/Hero'
import CharterTypes from './components/HomeComponents/CharterTypes'
import PhotoLeftCard from './components/HomeComponents/PhotoLeftCard'
import PhotoRightCard from './components/HomeComponents/PhotoRightCard'

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl pt-4 md:pt-24 animate__animated animate__fadeIn">
      <Hero />
      <CharterTypes />
      <PhotoLeftCard />
      <PhotoRightCard />
    </div>
  )
}
