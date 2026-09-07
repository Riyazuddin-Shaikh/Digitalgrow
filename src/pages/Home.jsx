import Banner from '../components/Home/H-Bannar'; 
import About from '../components/Home/H-About'; 
import Service from '../components/Home/H-Service'; 
import Work from '../components/Home/H-Work'; 
import Blog from '../components/Home/H-Blog'; 
import Contact from '../components/Home/H-Contact'; 

export default function Home() {
  return (
    <div className="home-page-container" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
     
      <Banner />
      <About/>
      <Service/>
      <Work/>
      <Blog/>
      <Contact/>

    </div>
  );
}