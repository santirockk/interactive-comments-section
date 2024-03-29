import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCurrentUser, getWindow } from "../redux/selectors"
import { SendBtn } from "./SendBtn";

export function AddReply ({replyHandler}) {
    const windowSize = useSelector(getWindow)
    const currentUser = useSelector(getCurrentUser)

    return(
        <div className="flex bg-white m-4 rounded-lg p-4 md:m-auto md:mt-2 md:ar">
            {windowSize.window < 768 && <img className="w-7 h-7 mr-4 mt-2" src={currentUser.image.png} alt={currentUser.username}/>}
            <form 
            className="w-full text-right md:flex" 
            onSubmit={replyHandler}>
                {windowSize.window > 767 && <img className="ar-i mr-4" src={currentUser.image.png} alt={currentUser.username}/>}
                <textarea name="reply" rows="3"placeholder="Your reply..." 
                className="block px-5 py-3 w-full border resize-none mb-4 rounded-lg text-black focus:border-light-grayish-blue outline-none hover:cursor-pointer md:ar-text" 
                ></textarea>
                <SendBtn text='REPLY'/>
            </form>
        </div>

    )
    

}