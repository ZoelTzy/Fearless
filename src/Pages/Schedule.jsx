import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import Senin from "../components/Mapel/Senin"
import Selasa from "../components/Mapel/Selasa"
import Rabu from "../components/Mapel/Rabu"
import Kamis from "../components/Mapel/Kamis"
import Jumat from "../components/Mapel/Jumat"

const Schedule = () => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const currentDayIndex = new Date().getDay()
    const currentDay = daysOfWeek[currentDayIndex]

    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])

    let piketGroup = [
        ["Rifai", "Audrey", "Ghaby", "Dimas", "Angel", "Reza"],
        ["Aulia", "Altha", "Raehan", "Fitria", "Keenan", "Desvita"],
        ["Irma", "Zaki", "Hafiz", "Nafasat", "Jelita", "Marsya", "Maylyana"],
        ["Meita", "Rama", "Orieviano", "Natasya", "Raka", "Naura"],
        ["Renata", "Rio", "Dicky", "Sellina", "Gilang", "Sherin"],
    ]

    const dayComponents = [null, Senin, Selasa, Rabu, Kamis, Jumat]
    const TodayComponent = dayComponents[currentDayIndex]
    const currentPiketNames = piketGroup[currentDayIndex - 1]

    return (
        <>
            <div className="lg:flex lg:justify-center lg:gap-32 lg:mb-10 lg:mt-16 ">
                <div className="text-white flex flex-col justify-center items-center mt-8 md:mt-3 overflow-y-hidden">
                    <div className="text-2xl font-medium mb-2" data-aos="fade-up" data-aos-duration="500">
                        {currentDay}
                    </div>
                    <div className="text-sm text-white opacity-50 mb-4">Hari ke-{currentDayIndex}</div>
                    <div data-aos="fade-up" data-aos-duration="400">
                        {TodayComponent ? (
                            <TodayComponent />
                        ) : (
                            <p className="opacity-50">Prei Bolo Sekolahe</p>
                        )}
                    </div>
                </div>
            </div>

            <div className="text-white flex flex-col justify-center items-center mt-8 lg:mt-0 lg:mb-[10rem] mb-10 overflow-y-hidden">
                <div className="text-2xl font-medium mb-5 text-center" data-aos="fade-up" data-aos-duration="500">
                    Piket
                </div>
                {currentPiketNames && currentPiketNames.length > 0 ? (
                    currentPiketNames.map((piketName, index) => (
                        <div key={index} className={` border-t-2 border-white flex justify-center py-[0.50rem] w-72 px-3 ${index === currentPiketNames.length - 1 ? "border-b-2" : ""}`} data-aos="fade-up" data-aos-duration={600 + index * 100}>
                            <div className="text-base font-medium">{piketName}</div>
                        </div>
                    ))
                ) : (
                    <p className="opacity-50">Prei Bolo Sekolahe</p>
                )}
            </div>
        </>
    )
}

export default Schedule
