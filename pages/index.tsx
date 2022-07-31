import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <div className="text-gray-700">
        <Navbar />
        <div className="content">
          <Header />
          <div className="">
            <div className="min-h-[100vh] part--one">
              <div className="separator bg-red-500">
                <div className="separator--container">
                  <h3
                    className="absolute top-0 text-white mx-auto w-full text-center h-full items-center justify-center flex">exploration
                    and adventure</h3>
                </div>
              </div>
              <div>
                <div className="section--panel--decoration">
                  <div className="decoration--left z-20">
                    <span/>
                  </div>
                  <div className="decoration--right z-20">
                    <span/>
                  </div>
                </div>
              </div>
              <div className="max-w-[90%] mx-auto flex gap-32 flex-row z-10 relative min-h-screen items-center  justify-between ">
                <div className="hidden lg:block w-3/6">
                  <div className="render w-full object-cover">

                    <span className="render--border--top">
                      <span className="render--border--bottom">

                      </span>
                    </span>
                  </div>
                </div>

                <div className=" relative lg:w-1/2 right-0 space-y-8 text-gray-200">
                  <h3 className="title  w-2/3">the new skyblock</h3>
                  <div className="description lg:w-2/3 space-y-4">
                    <p className="">
                      Discover our first game, the Hypolia skyblock called Arkhane. After long hours of work, and
                      experience in this game mode, we managed to review the very functioning of the Skyblock. By putting
                      forward a free side on the guideline you can take during your adventure. By adding a more advanced
                      synergy of each of our mechanics, and a LevelDesign thought to make the immersion more realistic
                      with a real interest of exploration !
                    </p>
                    <p>
                      We dont limit our gameplay to a banal objective of linear evolution. We exploit to the maximum the
                      resources available on Minecraft in order to guarantee a pleasure to all types of players, be it
                      PvE, adventure, farm and so on. Let your creativity take over!
                    </p>
                  </div>

                </div>

              </div>
            </div>
            <div className="min-h-[100vh] part--two">
              <video className="" autoPlay loop>
                <source src="https://d2vkoy1na2a6o6.cloudfront.net/videos/fsg-bg-wide-1d7a662b187e51758a166d75380b8e7bcb62ce97ddfd50f0eb0aefef32b27f478fbe293ea6cfff31f8b5e6b1ed2b5fbe1c0e0ca48bbf0408ddf6d4bc0172073b.mp4"/>
              </video>
              <div className="section--panel--decoration">
                <div className="decoration--left z-20">
                  <span/>
                </div>
                <div className="decoration--right z-20">
                  <span/>
                </div>
              </div>
              <div className="content">
                <div className="text--left">
                  <div className="text--rotate">
                    <div >
                      modes de jeu
                    </div>
                  </div>
                </div>
                <div className="content--body h-screen">
                  <div className="grid-image">
                    <div className="item">
                      <div>
                        <span>Test 1</span>
                        <p>Lorem ipsum</p>
                      </div>

                    </div>
                    <div className="item">
                      <div>
                        <span>Test 1</span>
                        <p>Lorem ipsum</p>
                      </div>

                    </div>
                    <div className="item">
                      <div>
                        <span>Test 1</span>
                        <p>Lorem ipsum</p>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>

  )
}

export default Home
