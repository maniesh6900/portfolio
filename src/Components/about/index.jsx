"use client"
import ItemLayout from './itemLayout'

const AboutDetails = () => {
    return (<>
      <section className="py-20 w-full">
        <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
          <ItemLayout
            className={
              " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
            }>
            <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
              Architect of Enchantment
            </h2>
            <p className="font-light  text-xs sm:text-sm md:text-base   ">
              My journey in web development is powered by an array of mystical
              tools and languages, with JavaScript casting the core of my
              enchantments. I wield frameworks like React.js and Next.js with
              precision, crafting seamless portals (websites) that connect realms
               across the digital universe. The ancient arts of the
              Jamstack empower me to create fast, secure, and dynamic experiences,
              while my design skills ensure every creation is not only functional
              but visually captivating. Join me as I continue to explore new
              spells and technologies to shape the future of the web.
            </p>
            </ItemLayout>
            <ItemLayout className={"col-span-full lg:col-span-4 !p-0 "}>
              <img src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs/?username=maniesh6900&layout=compact`} 
                className='w-full h-auto'
              />
            </ItemLayout>


        </div> 
        </section>
    </>
  )
} 

export default AboutDetails