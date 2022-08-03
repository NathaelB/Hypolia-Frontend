import { NextPage } from 'next'
import Link from "next/link";
import Image from "next/image";
import Icon from '../../public/icon.png'
import {useRef, useState} from "react";
import {useRouter} from "next/router";
import useAuthentication from "../../hooks/useAuthentication";

const Login: NextPage = () => {
  const router = useRouter()
  const { login } = useAuthentication()

  const userRef: any = useRef()
  //const errRef: any = useRef()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const handleSignIn = async (e: any) => {
    e.preventDefault()
    try {
      await login(email, password)
      setEmail('')
      setPassword('')
      await router.push('/')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="login">
      <div className="video">
        <video loop playsInline autoPlay>
          <source src="https://d2vkoy1na2a6o6.cloudfront.net/videos/fsg-bg-wide-1d7a662b187e51758a166d75380b8e7bcb62ce97ddfd50f0eb0aefef32b27f478fbe293ea6cfff31f8b5e6b1ed2b5fbe1c0e0ca48bbf0408ddf6d4bc0172073b.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="section--panel--decoration">
        <div className="decoration--left z-20">
          <span/>
        </div>
        <div className="decoration--right z-20">
          <span/>
        </div>
      </div>
      <div className="content gap-8 flex flex-col">
        <div className="w-32 mx-auto">
          <Link href={"/"}>
            <Image src={Icon} layout={"responsive"} alt={"Icon Hypolia"}/>
          </Link>
        </div>

        <div className="form mx-auto w-[90%] md:w-[60%] lg:w-[40%]">
          <div className="border-box"></div>
          <div className="box pt-12 px-12">
            <div className="">
              <h3 className="text-center uppercase text-gray-300 text-xl font-thin border-b border-gray-500 pb-6 mx-12">Se connecter</h3>
              <form className="space-y-12 mt-12" onSubmit={handleSignIn}>
                <div className="space-y-3">
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                      type="text" name="email" id="email"
                      ref={userRef} required value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="text-gray-500 shadow-sm py-2 px-3 focus:border-indigo-500 block w-full sm:text-sm border border-gray-700 bg-transparent rounded-md"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input
                      type="password" name="password" id="password"
                      required value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="text-gray-500 shadow-sm py-2 px-3 focus:border-indigo-500 block w-full sm:text-sm border border-gray-700 bg-transparent rounded-md"
                      placeholder="Mot de passe"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input id="remember-me"

                             name="remember-me" type="checkbox"
                             className="h-4 w-4 text-gray-500 border-gray-300 rounded-xl"/>
                      <label htmlFor="remember-me"
                             className="ml-2 block text-sm text-gray-500">
                        Se souvenir de moi
                      </label>
                    </div>

                    <div className="text-sm">
                      <a href="#"
                         className="font-normal text-gray-500 hover:text-gray-50 transition ease-in-out duration-200">
                        Mot de passe oublié ?
                      </a>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-gray-700 bg-button-login rounded-md shadow-sm text-sm font-medium text-white  focus:outline-none"
                    >
                      Se connecter
                    </button>
                  </div>
                  { errMsg }
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login