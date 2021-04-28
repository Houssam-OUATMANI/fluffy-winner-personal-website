
import MainHero from '../components/hero/MainHero';
import PictureCard from '../components/presentation/PictureCard';
import PresentationCard from '../components/presentation/PresentationCard';
export default function Home() {
  return (
    <div>
       <MainHero>
         <PresentationCard/>
         <PictureCard/>
       </MainHero>
     <div className="container">
     </div>
    </div>
  )
}
