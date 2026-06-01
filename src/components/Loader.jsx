
const Loader = () => {
    return (
        <div className="fixed inset-0 bg-white/90 backdrop-blur-sm flex justify-center items-center z-50">

            <div className="flex flex-col items-center">

                {/* Outer spinner */}

                <div className="relative w-24 h-24">

                    {/* Spinner border */}

                    <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>

                    <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 border-r-indigo-600 rounded-full animate-spin"></div>



                    {/* Center logo*/}

                    <div className="absolute inset-0 flex items-center justify-center">

                        <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">

                            <span className="text-white font-bold text-lg">
                                LC
                            </span>

                        </div>

                    </div>

                </div>



                {/* Text */}

                <h2 className="mt-6 text-2xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Loading...
                </h2>

                <p className="text-gray-500 text-sm mt-2">
                    Please wait a moment
                </p>



                {/* Dots */}

                <div className="flex gap-2 mt-5">

                    <span className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></span>

                    <span
                        className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                    ></span>

                    <span
                        className="w-3 h-3 bg-purple-600 rounded-full animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                    ></span>

                </div>

            </div>

        </div>
    )
}

export default Loader