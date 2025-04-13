import { useEffect, useRef, useState } from "react"
import { Bg } from "./components/Bg"
import { images, flightOffers} from "./data"

const getRandomNumber = () => Math.floor(Math.random() * 41) -20;


function App() {
  const modalWrapper = useRef(null)
  const [showModal, setShowModal] = useState(false)

  const handleClickOutside = (event) => {
    if (modalWrapper.current === event.target) {
      setShowModal(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    };
  })

  return (
    <>
      <Bg />
      <div className="centerChild h-screen">
        {/* Button */}
        <button onClick={() => setShowModal(true)} className=" relative cursor-pointer group overflow-hidden py-3 perspective-midrange">
          <div className={`bg-zinc-700 px-7 py-3 border-dotted border-[3px] border-cyan-400 bg-clip-padding rounded-lg
          hover:-rotate-y-[25deg] duration-500 transition-transform ${showModal ? "overflow-visible -rotate-y-[25deg]" : "overflow-hidden" }`}>
            <span className={`text-white text-2xl group-hover:opacity-0 group-hover:-translate-y-24 transition-all 
          duration-300 block group-hover:delay-75 delay-300 ${showModal && "-translate-y-24"}`}>Bookk your flight</span>
            <span className={`absolute h-[2px] w-full border border-dashed border-white left-0 top-1/2 -translate-y-1/2
          scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right group-hover:delay-200 ${showModal && "scale-x-100" }`}/>
            <img
              src="./assets/plane.png"
              alt="Plane Icon"
              className={`absolute -left-28 -top-5 -traslate-y-1/2 group-hover:left-20 group-hover:transition-all 
              group-hover:delay-500 duration-500 ${showModal && "transition-all !left-44 !scale-200 !opacity-0 !delay-[0s]"}`} />
          </div>
        </button>
        {/* Modal wrapper */}
        <div 
        ref={modalWrapper}
        className={`centerChild absolute w-full h-full bg-fuchsia-200/50 -z-10 opacity-0 invisible transition-opacity 
          ${showModal && "!opacity-100 !visible !z-10 !delay-500"}`}>
          {/* Modal */}
          <div className="centerChild flex-col gap-y-8 relative w-[730px] h-[600px] bg-white rounded-3xl">
            {/* Close button */}
            <button onClick={() => setShowModal(false)} className="absolute top-5 right-5 cursor-pointer hover:scale-110 transition-transform">
              <img src="public/assets/cancel.png" alt="Cancel icon" width={25} />
            </button>
            {/* Moddal Heading */}
            <h1 className="centerChild gap-x-3 text-3xl font-semibold text-gray-800">Book your trip around the
            <div className="relative globeWrapper">
              <div className="globe"></div>
              <img
              src="./assets/plane.png"
              alt="Plane Icon"
              className={`absolute right-52 top-[2px] -traslate-y-1/2 scale-200 opacity-40
              ${showModal && "!-right-1 transition-all !scale-100 delay-500 duration-500 opacity-100"}`} />
            </div>
            </h1>
            {/* Gallery */}
            <div className="centerChild gap-x-6">
              {images.map((img, index) => 
              <img key={index} 
              src={img} 
              alt={`Image ${index}`} className="w-32 aspect-square object-cover border-[3px]
              border-dotted border-cyan-500 rounded-3xl opacity-80 hover:z-10 hover:opacity-100
              hover:scale-125 transition-all" 
              style={{transform: `rotate(${getRandomNumber()}deg)`}}
                />)}
            </div>
            {/* Flight offers */}
            <div className="grid grid-cols-2 gap-3 w-full px-10">
              {flightOffers.map((offer, index) => 
              <p key={index} className="text-xs font-semibold text-gray-700">{offer}</p>)}
            </div>
            {/* Book buttons */}
            <div className="absolute bottom-4 right-4 space-x-2">
              <button className="rounded-sm px-2 text-sm cursor-pointer bg-cyan-500 text-white hover:bg-cyan-600 
              transition-colors">
                Book Now
              </button>
              <button 
              onClick={() => setShowModal(false)}
              className="rounded-sm px-2 text-sm cursor-pointer bg-gray-100 border border-gray-300 text-cyan-600
              hover:bg-gray-200 transition-colors">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
