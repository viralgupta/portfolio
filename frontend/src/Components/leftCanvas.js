import React from 'react'
import Model from './Me'
import Type from "../Components/Type"

const LeftCanvas = () => {
    return (
        <>
            <div className="md:w-1/3 fixed md:z-20 z-[-10] md:top-0 md:h-full w-full h-screen bottom-0">
                <Model opacityconstant={1} zoomLevel={window.innerWidth > 1280 ? 10 : 8 }/>
            </div>
            <div className="text-white pb-10 z-0 top-0 fixed w-1/3 h-full hidden flex-col justify-end  md:flex">
                <div className="font-serif lg:text-4xl text-3xl">
                    Hey&nbsp;There!{" "}
                    <span className="wave" role="img" aria-labelledby="wave">
                        👋🏻
                    </span>
                </div>
                <br />
                <div className="w-full lg:text-4xl text-2xl font-serif flex justify-end pr">
                    Its's&nbsp;Me,&nbsp;<span className='text-green-100 text-3xl'> <Type/> </span>
                </div>
                <img src="/Assets/arrow.png" className="h-44 absolute bottom-20 right-5" alt="" />
            </div>
        </>
    )
}

export default LeftCanvas