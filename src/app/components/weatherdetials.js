import { MdSunny } from "react-icons/md";

export default function WeatherDetials() {
    return (
        <div className="flex  min-w-full items-center justify-center space-between gap-60 h-120 bg-sky-700">
            <div >
                <MdSunny style={{color: 'white', fontSize: '89px'}}/>
            </div>
            <div className="text-white">
                <h1 className="text-9xl">14<sup>o</sup> </h1>
               <p>Humidity: <span className="px-16">44%</span></p>
               <p>Wind Speed: <span className="px-10">10 mph</span></p>
            </div>
        </div>
    )
}