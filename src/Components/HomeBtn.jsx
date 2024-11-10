import { Home } from "lucide-react"
import Link from "next/link"

const HomeBtn = () => {
  return (
    <Link
    href={"/"}
    target={"_self"}
    className='text-foreground rounded-full flex items-center justify-center
        bg-background/20 border border/accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm
        hover:pause fixed top-4 left-4 w-fit self-start z-50'
    aria-label={"Home"}
    name={"home"}
    >   
    <span className='relative w-16 h-16 p-5 hover:text-accent'>{<Home/>}
        <span className='peer bg-tranparent absolute left-0 top-0 h-full w-full '/>
        <span className='absolute hidden peer-hover:block px-2 py-2 mx-3 top-1/2 left-full -translate-y-1/2 bg-background text-foreground 
        text-sm rounded-md shadow-lg whitespace-nowrap'>
        Home
        </span>
    </span>
    </Link>
  )
}

export default HomeBtn