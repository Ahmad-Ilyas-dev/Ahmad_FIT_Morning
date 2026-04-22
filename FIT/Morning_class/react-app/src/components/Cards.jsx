import { GrLike } from "react-icons/gr";
import { BiSolidLike } from "react-icons/bi";



import { useState } from "react"

function Cards(props) {

    const [isLike, setIsLike] = useState(false)


    return (
        <div>
            {/* <button onClick={() => setIsLike(!isLike)}>{isLike ? <BiSolidLike /> : <GrLike />}</button> */}

            <div className="flex flex-col justify-center items-center m-20 bg-white rounded-2xl p-5 w-80  gap-10 content-center shadow-lg">
                <h1 className="text-xl font-bold py-3 text-blue-700">{props.title}</h1>
                <span className="relative left-30 bottom-18" onClick={() => setIsLike(!isLike)}>{isLike ? <BiSolidLike /> : <GrLike />}</span>
                            <img src={props.img} alt="" />
                <p className="text-sm text-gray-500 py-2">{props.desc}</p>
                <button className="text-amber-400 py-2 px-5 bg-blue-600 rounded-2xl">{props.btn}</button>
            </div>
        </div>
    )
}

export default Cards