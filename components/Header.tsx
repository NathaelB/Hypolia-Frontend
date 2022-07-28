import Image from 'next/image'
import LogoText from '../public/logo.png'
const Header = () => {
  return (
    <div className="min-h-[100vh] relative header">

      <div className="home-cover h-screen">
        <div className="text-white">
          <div className=" mx-auto h-screen flex flex-col gap-4  place-content-center -translate-y-20">
            <span className="text-white font-thin font-serif text-7xl self-center">Rejoins-nous sur</span>
            <div className="self-center w-1/3">
              <Image src={LogoText} alt={"Logo"} />
            </div>
          </div>


        </div>

      </div>
    </div>
  )
}

export default Header