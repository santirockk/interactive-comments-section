
export function DeleteModal ({cancelHandler, yesHandler, clickClose}) {
   
    return (
        <div onClick={clickClose}
        className="fixed inset-0 bg-black w-full h-full bg-opacity-50 flex items-center justify-center z-10">
            <div className="bg-white w-80 py-6 px-7 rounded-lg md:del-modal md:px-10 md:py-7">
                <h2 className="text-xl text-dark-blue font-medium mb-4 md:text-2xl">Delete comment</h2>
                <p className="text-sm mb-5 md:text-base">
                    Are you sure you want to delete this comment? This will remove th comment and can't be undone
                </p>
                <button onClick={cancelHandler}
                className="bg-grayish-blue text-white px-5 py-3 rounded-md text-sm md:text-base md:px-6">NO, CANCEL</button>
                <button onClick={yesHandler}
                className="bg-soft-red text-white ml-4 px-5 py-3 rounded-md text-sm md:text-base md:px-6">YES, DELETE</button>
            </div>
        </div>
    )
}