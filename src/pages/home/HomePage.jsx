import Navbar from "../../components/Navbar"
import home from "../../assets/Img/home.jpg"
import '../style.css'

export const HomePage = () => {

    return (
        <>
            <Navbar />
            <div className="hero min-h-screen" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${home})` }}>
                <div className="hero-overlay  "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Find Your Perfect Hotel</h1>
                        <p className="py-6">Explore a wide selection of hotels in popular destinations. Reserve with us and get the best guaranteed rates!</p>
                        <button className=" bg-[#887063] hover:bg-[#947c6c] transition text-white font-semibold rounded-md py-2 px-4 ">book now </button>
                    </div>
                </div>
            </div>
        </>

    )
}
