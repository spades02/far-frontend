import Topbar from '@/components/Topbar'
import '../App.css'
import '../index.css'
import Search from '@/components/Search'
import CarouselSearch from '@/components/CarouselSearch'
import ExploreNearMe from '@/components/ExploreNearMe'
import FeaturedRotations from '@/components/FeaturedRotations'
import MostAffordable from '@/components/MostAffordable'
import ClinicalRotations from '@/components/ClinicalRotations'
import Footer from '@/components/Footer'

function Home() {
  return (
    <>
    <Topbar/>
    <Search />
    <CarouselSearch />
    <ExploreNearMe/>
    <div className='md:flex'>
      <FeaturedRotations/>
      <MostAffordable />
    </div>
    <ClinicalRotations/>
    <Footer/>
    </>
  )
}

export default Home
