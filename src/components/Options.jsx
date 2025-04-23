import { Link } from 'react-router-dom';


const Options = () => {
  return (
    <div className="md:p-20 p-5 bg-emerald-950 h-full">
      <div className="md:flex">
      <div className="bg-amber-200 md:w-1/2  md:m-2.5 md:ml-0 my-5 h-96 rounded-4xl relative">
        <img src='/StarGate/Green/GreenBed.JPG'  className="h-full w-full object-cover rounded-4xl"></img>
        <div className="absolute top-0 left-0 text-white  h-96 w-full rounded-4xl">
        <div className="absolute top-10 left-10">
        <h1 className=" text-4xl font-black ">1BHK</h1>
        <p>This property has: <b>1 bedrooms</b>, <b>one hall</b>, <b>one kitchen</b>.</p>
        <p>Unlimited internet access through <b>Wifi</b> present all over your space.</p>
        <p>Lounge back to enjoy your favourite series on different OTT platforms with <b>Smart TVs</b>.</p>
        <Link to='/green'><button className="bg-white text-black font-bold rounded-4xl px-5 py-3">Explore </button></Link>
          </div>
        
        </div>
        
      </div>

      <div className="bg-amber-500 md:w-1/2  md:m-2.5 md:mr-0 my-5 h-96 rounded-4xl relative">
         <img src='/StarGate/PinkDouble/BedPainting.jpeg' className="h-full w-full object-cover rounded-4xl"></img>
         <div className="absolute top-4 left-8 text-white">
        <h1 className=" text-4xl font-black">2BHK</h1>
        <p>This property has: <b>2 bedrooms</b>, <b>one hall</b>, <b>one kitchen</b>.</p>
        <p>Unlimited internet access through <b>Wifi</b> present all over your space.</p>
        <p>Lounge back to enjoy your favourite series on different OTT platforms with <b>Smart TVs</b>.</p>
        <Link to='/pink'><button className="bg-white text-black font-bold rounded-4xl px-5 py-3">Explore </button></Link>
        </div>
      </div>
      </div>

      <div className="bg-white my-5 h-120 rounded-4xl relative">
        <img src='/StarGate/BrownDouble/BrownPainting.jpeg' className="h-full w-full object-cover rounded-4xl"></img>
        <div className="absolute top-4 left-8 text-white">
        <h1 className=" text-4xl font-black">3BHK</h1>
        <p>This property has: <b>3 bedrooms</b>, <b>one hall</b>, <b>one kitchen</b>.</p>
        <p>Unlimited internet access through <b>Wifi</b> present all over your space.</p>
        <p>Lounge back to enjoy your favourite series on different OTT platforms with <b>Smart TVs</b>.</p>
        <Link to='/brown'><button className="bg-white text-black font-bold rounded-4xl px-5 py-3">Explore </button></Link>

        </div>
      </div>

      <div className="bg-amber-800 my-5 h-120 rounded-4xl relative">
        <img src='/StarGate/GraySingle/MainSingle.JPG' className="h-full w-full object-cover rounded-4xl"></img>
        <div className="absolute top-4 left-8 text-white">
        <h1 className=" text-4xl font-black">3BHK</h1>
        <p>This property has: <b>3 bedrooms</b>, <b>one hall</b>, <b>one kitchen</b>.</p>
        <p>Unlimited internet access through <b>Wifi</b> present all over your space.</p>
        <p>Lounge back to enjoy your favourite series on different OTT platforms with <b>Smart TVs</b>.</p>
        <Link to='/grey'><button className="bg-white text-black font-bold rounded-4xl px-5 py-3">Explore </button></Link>

        </div>
      </div>
    </div>
  )
}

export default Options
