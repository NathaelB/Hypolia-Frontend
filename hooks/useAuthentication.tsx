import IocContainer from "../ioc/Container"
import Http from "../services/Http"
import {useRouter} from "next/router"
import {useCookies} from "react-cookie";

type User = {
  id: string,
  username: string,
  email: string,
  password: string,
  account_id: string
}

const useAuthentication = () => {
  const [cookie, setCookie] = useCookies(['hypolia_token'])
  const http = IocContainer.singleton<Http>(IocContainer.services.HTTP).http

  const login = async (email: string, password: string) => {
    const response = await http.post('/auth/login', {
      email: email, password: password
    })
    const data = response.data
    setCookie('hypolia_token', `Bearer ${data.auth.token}`, {
      path: '/',
      maxAge: 3600,
      sameSite: true
    })
    http.defaults.headers.common['Authorization'] = `Bearer ${data.auth.token}`
  }

  const getUser = async (): Promise<undefined | User> => {
    if (!cookie.hypolia_token) {
      console.log("Le cookie en queston n'existe pas")
      return undefined
    }
    http.defaults.headers.common['Authorization'] = cookie.hypolia_token
    const request = await http.get('/me')
    return request.data.user
  }

  return {
    login,
    getUser
  }
}
    
export default useAuthentication