import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import IocContainer from "../ioc/Container";
import Http from "../services/Http";
IocContainer.init()

IocContainer.bind(IocContainer.services.HTTP, new Http())
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return <Component key={router.asPath} {...pageProps} />
}

export default MyApp
