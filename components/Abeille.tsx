import AbeillePicture from '../public/images/abeille.png'
import Image from 'next/image'

type Props = {
  className: string
}
const Abeille = ({className}: Props) => {
  return (
    <div className={`w-12 absolute z-50 abeille ${className}`} id="abeille">
      <Image src={AbeillePicture} alt="" />
    </div>
  )
}

export default Abeille