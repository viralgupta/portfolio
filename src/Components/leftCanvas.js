import React from 'react'
import Model from '../Me'
import Type from "../Components/Type"

const LeftCanvas = () => {
    return (
        <>
            <div className="w-1/3 fixed z-20 top-0 h-full">
                <Model opacityconstant={1} />
            </div>
            <div className="text-white p-10 z-0 top-0 fixed w-1/3 h-full flex flex-col justify-end">
                <div className="font-serif text-3xl">
                    Hey There!{" "}
                    <span className="wave" role="img" aria-labelledby="wave">
                        👋🏻
                    </span>
                </div>
                <br />
                <div className="w-full text-4xl font-serif flex justify-end pr">
                    Its's Me,&nbsp;<span className='text-green-100'> <Type/> </span>
                </div>
                <img src="/Assets/arrow.png" className="h-44 absolute bottom-20 right-5" alt="" />
            </div>
        </>
    )
}

export default LeftCanvas