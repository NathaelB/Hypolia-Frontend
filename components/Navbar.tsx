import ButtonBlue from './buttons/ButtonBlue'
import ButtonGreen from './buttons/ButtonGreen'
import { useEffect } from 'react'
import Image from 'next/image'
import BranchPicture from '../public/images/navbar/branche.png'

const Navbar = () => {
  useEffect(() => {
    let lastScrollTop = 0
    window.onscroll = () => {
      let st = window.scrollY
      const navbar = document.getElementById('navbar')
      if (st < 300) {
        navbar!.style.top = "50px"
        return
      }
      if ( st > lastScrollTop ){
        navbar!.style.top = "-100px"
      } else {
        navbar!.style.top = "50px"
      }

      lastScrollTop = st

    }
  })
  return (
    <div className=" top-[50px] navbar fixed" id="navbar">
      {/* DESKTOP VERSION */}
      <div className="branch">
        <Image src={BranchPicture} alt={""} />
      </div>
      <div className="branch2">
        <Image src={BranchPicture} alt={""} />
      </div>
      <div className="navbar-container hidden lg:block">
        <div className="absolute top-0 flex flex-row h-full items-center justify-between w-full">
          <ul className="flex flex-row h-full items-center space-x-8">
            {/* LOGO */}
            <li className="menu-item-0 menu-item">
              <div className="icon">
                <img src="https://cdn.discordapp.com/attachments/883079588522131466/912147668308992060/icon.png" alt="" />
              </div>
            </li>

            <div className="links flex flex-row space-x-8">
              <li>
                <span>Home</span>
              </li>
            </div>

          </ul>
          <div className="flex flex-row place-items-center space-x-4 mr-8  ">
            <ButtonBlue className={"px-6 py-3"} text={"Recrutement"} />

            <a href="authentication/login" >
              <ButtonGreen className={"px-6 py-3"} text={'Se Connecter'} />
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar