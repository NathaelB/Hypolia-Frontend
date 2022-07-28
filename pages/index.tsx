import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="text-gray-700">

      <Navbar />
      <div className="content">
        <Header />
        <div className="content-wrapper min-h-[100vh]">
          <div className="separator">
            <div className="separator--container">
              <h3
                className="absolute top-0 text-white mx-auto w-full text-center h-full items-center justify-center flex">exploration
                and adventure</h3>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Home
