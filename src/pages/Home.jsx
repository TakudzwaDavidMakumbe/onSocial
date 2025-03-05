import Navbar from '../components/Navbar'

const Home = () => {

  return (
    <div className='w-full h-full'>
      <div className="md:w-screen md:h-full" style={{backgroundImage: `url()`, backgroundSize: 'cover'}}>
        <Navbar />
      </div>
     

    </div>
  )
}

export default Home