import useAuthentication from "../../hooks/useAuthentication"
import ButtonGreen from "../buttons/ButtonGreen"
import {useEffect, useState} from "react"
import { Menu } from '@headlessui/react'
import Profil from "./Profil";

type state = undefined | {
  id: string
  username: string,
  email: string,
  password: string,
  account_id: string
}
const Login = () => {
  const { getUser } = useAuthentication()
  const [user, setUser] = useState<state>()
  useEffect(() => {
    const asyncFunction = async () => {
      const userData = await getUser()
      setUser(userData)
    }
    asyncFunction()
  }, [getUser])

  return (
    <>
      {user
        ? (
          <div>
            <Menu>
              <Menu.Button>
                <ButtonGreen className={"px-6 py-3"} text={user.username} />
              </Menu.Button>
              <Profil user={user}/>
            </Menu>
          </div>
        )
        : (
          <a href={"/authentication/login"}>
            <ButtonGreen className={"px-6 py-3"} text={"Se Connecter"} />
          </a>
        )
      }
    </>
  )
}
    
export default Login