

function Cards(props){
    return(
        <div>
            <img/>
            <div className="flex flex-col justify-center items-center m-20 bg-white rounded-2xl p-5 w-80 h-70 gap-10 content-center shadow-lg">
                <h1 className="text-xl font-bold py-3">{props.title}</h1>
                <p className="text-sm text-gray-500 py-2">{props.desc}</p>
                <button text-amber-400 py-4>Learn More</button>
            </div>
        </div>
    )
}

export default Cards