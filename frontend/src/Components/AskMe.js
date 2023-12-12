import { useRef, useState } from "react"

const AskMe = () => {
    const [response, setResponse] = useState('')
    const [thinking, setThinking] = useState(false)
    const question = useRef();


    const getResponse = () => {
        setThinking(true)
        setResponse("Model is thinking...")
        if (!thinking) {
            let ques = question.current.value;
            question.current.value = "";
            
            const eventSource = new EventSource(`http://localhost:5000/api/askme/${ques}`);

            eventSource.onmessage = function (event) {
                if (event.data){
                    setResponse((res) => res !== "Model is thinking..." ? res + event.data + ' ' : event.data + ' ');
                }
            };            

            eventSource.onerror = function (event) {
                eventSource.close();
                setThinking(false)
                setResponse(res => res == null ? "Some error occured, Please try again later :(" : res === "Model is thinking..." || res === "Some error occured, Please try again later :(" || res.length < 1 ? "Some error occured, Please try again later :(" : res)
            };
        }
    };

    return (
        <>
            <br />
            <div className="project-heading text-xl md:text-3xl pb-3 md:pb-8 font-mono font-extrabold" >
                Ask Me!!!<strong className="text-green-100">&nbsp;&#40;Experimental&#41;</strong>
            </div>
            <div className="md:mx-5 rounded-xl h-auto text-xs md:text-xl">
                <input type="text" ref={question} disabled={thinking} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); getResponse(); } }} name="question" id="question" rows={1} className="w-full rounded-md p-1 mb-2 bg-[#2ea692] text-gray-200 disabled:cursor-not-allowed placeholder:text-gray-200 placeholder:text-opacity-50" placeholder="How did you make the digibooking project?" />
                {response && <div className="bg-[#0f3d36] w-full relative h-auto rounded-md text-sm text-white p-2 bg-opacity-50 overflow-hidden">
                    {response}{thinking && <div className="inline-block absolute bg-yellow-50 w-3 ml-1 h-full bg-opacity-80"></div>}
                    {response && <button onClick={() => { setResponse(null) }} disabled={thinking} className="bg-green-950 absolute bottom-0 right-0 disabled:cursor-not-allowed cursor-pointer text-gray-300 w-min rounded-md p-0.5">Close&nbsp;&uarr;</button>}
                </div>}
            </div>
        </>
    )
}

export default AskMe