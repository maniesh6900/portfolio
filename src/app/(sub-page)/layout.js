import HomeBtn from "@/Components/HomeBtn";


export default function SubLayout({ children }) {
    return (
       <main 
        className="flex min-h-screen flex-col items-center  px-16 py-20 justify-start text-accent font-inter">
            <HomeBtn />
            {children}
        </main>
    );
  }