import Image from 'next/image'
import Typography from './typography'

const Built = ({children}) => {
  return (
    <div className=' flex gap-3 items-center'>
        <Image alt='built' src={"/img/built.png"} height={25} width={25}/>
        <Typography variant='p'>{children}</Typography>
    </div>
  )
}

export default Built