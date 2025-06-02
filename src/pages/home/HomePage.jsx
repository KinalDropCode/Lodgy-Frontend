import { useEffect } from "react"
import Navbar from "../../components/navbar/Navbar"
import home from "../../assets/Img/home.jpg"
import '../style.css'
import { useHotel } from "../../hooks/useHotel";
import { useUserDetails } from "../../hooks/useUserDetails";
import { Card } from "../../components/hotel/Card"

export const HomePage = () => {
    const { userDetails } = useUserDetails();
   

    const { getHotel, hotels } = useHotel();

    useEffect(() => {
        getHotel()
    }, []);


    return (
        <>
            <Navbar />
            <div className="hero min-h-screen" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${home})` }}>
                <div className="hero-overlay  "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Find Your Perfect Hotel</h1>
                        <p className="py-6">Explore a wide selection of hotels in popular destinations. Reserve with us and get the best guaranteed rates!</p>
                        <button className=" bg-[#887063] hover:bg-[#947c6c] transition text-white font-semibold rounded-md py-2 px-4 " onClick={() => window.location.href='#hotels'}>Reserve now</button>
                    </div>
                </div>
            </div>
            <div id="hotels" className="max-w-screen-2xl mx-auto p-5 sm:p-10 md:p-16">
                <div className="flex flex-col justify-center items-center gap-4 w-full">
                    {hotels.map(hotel => (
                        <Card key={hotel._id} data={hotel} />
                    ))}
                </div>
            </div>

        </>

    )
}
