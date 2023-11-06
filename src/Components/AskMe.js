import { useRef, useState } from "react"

const AskMe = () => {
    const [response, setResponse] = useState(null)
    const question = useRef();
    const getResponse = async () => {
        setResponse(question.current.value)
        question.current.value = "";
    }
    return (
        <>
            <br />
            <div className="project-heading text-xl md:text-3xl pb-3 md:pb-8 font-mono font-extrabold" >
                Ask Me <strong className="text-green-100">Anything</strong>!!!
            </div>
            <div className="md:mx-5 rounded-xl h-auto text-xs md:text-xl">
                <input type="text"  ref={question} onKeyDown={(e) => { if (e.key === 'Enter'){ e.preventDefault(); getResponse(); } }} name="question" id="question" rows={1} className="w-full rounded-md p-1 mb-2 bg-[#2ea692] text-gray-200 placeholder:text-gray-200 placeholder:text-opacity-50" placeholder="How do you manage so much in such littel time?"/>
                {response && <div className="bg-[#0f3d36] w-full h-auto rounded-md text-sm text-white p-2 bg-opacity-50" style={{ whiteSpace: 'pre-wrap' }}>
                    {response}
                    {response && <div onClick={()=>{setResponse(null)}} className="bg-green-950 cursor-pointer text-gray-300 w-min ml-auto rounded-md p-0.5">Close&nbsp;&uarr;</div>}
                </div>}
            </div>
        </>
    )
}

export default AskMe