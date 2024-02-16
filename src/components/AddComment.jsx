import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getCurrentUser, getWindow } from "../redux/selectors"
import { addComment } from "../redux/slice.js";
import { SendBtn } from "./SendBtn";


export function AddComment( ) {
    const windowSize = useSelector(getWindow)
    
    const currentUser = useSelector(getCurrentUser);
    const dispatch = useDispatch();

    const handleSubmit = event => {
      event.preventDefault();
      const form = event.target;
      dispatch(addComment(form.elements.comment.value, "today", currentUser));
      form.reset();
    }

    if (windowSize.window < 768) {
        return(
            <section id="add_comment" className="px-4 mt-4">
                <form className="p-4 rounded-lg bg-white mb-2" onSubmit={handleSubmit}>
                    <textarea name="comment" rows="3"placeholder="Add a comment..." 
                    className="block px-5 py-3 w-full border resize-none mb-4 rounded-lg focus:border-light-grayish-blue outline-none hover:cursor-pointer">
                    </textarea>
                    <div className="flex justify-between items-center">
                      <img src={currentUser.image.png} alt={currentUser.username} className="w-7"/>
                      <SendBtn text="SEND"/>
                    </div>
                    
                </form>
            </section>
        )
        
    } else {
        return(
            <section id="add_comment" className="w-c mx-auto mt-5">
                <form className="add-c rounded-lg bg-white mb-2 flex"
                onSubmit={handleSubmit}>
                  <img src={currentUser.image.png} alt={currentUser.username} className="img-add"/>
                  <textarea name="comment" rows="3"placeholder="Add a comment..." 
                    className="border resize-none rounded-lg text-add focus:border-light-grayish-blue outline-none hover:cursor-pointer">
                  </textarea>
                  <SendBtn text="SEND"/>  
                </form>
            </section>
        )
    }


}