import { Github, Home, Linkedin, NotebookIcon, Palette, Phone, Twitter, User } from 'lucide-react';
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";
const NavButton = ({x, y, label, icon, newTab, link }) => {

    const getIcon = (icon) =>{
        switch (icon) {
            case "home":
                return <Home className='w-full h-auto' strokeWidth={1.5} /> 
            case "about":
                return <User className='w-full h-auto' strokeWidth={1.5} />
            case "projects":
                return <Palette className='w-full h-auto' strokeWidth={1.5} />;
            case "contact":
                return <Phone className='w-full h-auto' strokeWidth={1.5} />;
            case "github":
                return    <Github className='w-full h-auto' strokeWidth={1.5} />;
            case "linkedin":
                return  <Linkedin className='w-full h-auto' strokeWidth={1.5} />;
            case "twitter":
                return <Twitter className='w-full h-auto' strokeWidth={1.5} />;
            case "resume":
                return <NotebookIcon className='w-full h-auto' strokeWidth={1.5} />;
            default:
                return <Home className='w-full h-auto' strokeWidth={1.5} />;
        }
    }

    const NavLink = motion(Link);

  return (
        <div 
            className='absolute z-50'
            style={{transform : `translate(${x}, ${y})`}}
        >
            <NavLink
                href={link}
                target={newTab ? '_blank' : "_self"}
                className='text-foreground rounded-full flex items-center justify-center
                    bg-background/20 border border/accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm
                    hover:pause'
                aria-label={label}
                name={label}
            >   
                <span className='relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent cursor:pointer loading:lazy'>{getIcon(icon)}
                    <span className='peer bg-tranparent absolute left-0 top-0 h-full w-full '/>
                    <span className='absolute hidden peer-hover:block px-2 py-2 mx-3 top-1/2 left-full -translate-y-1/2 bg-background text-foreground 
                    text-sm rounded-md shadow-lg whitespace-nowrap'>
                    {label}
                    </span>
                </span>
            </NavLink>
        </div>
   
  )
}

export default NavButton