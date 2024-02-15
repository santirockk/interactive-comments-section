import { useEffect, useRef } from "react";
import { SendBtn } from "./SendBtn"

export function Update ({content, updateHandler}) {
    const textareaRef = useRef(null);

    useEffect(() => {
        if(textareaRef.current) {
            const length = textareaRef.current.value.length;
            textareaRef.current.setSelectionRange(length, length);
        }
    }, []);

    return(
        <form className="text-right" onSubmit={updateHandler}>
            <textarea name="update" rows="4"
            defaultValue={content}
            ref={textareaRef}
            className="block px-5 py-3 w-full border resize-none mb-4 rounded-lg focus:border-light-grayish-blue hover:cursor-pointer outline-none" 
            autoFocus
            ></textarea>
            <SendBtn text="UPDATE"/>
        </form>
    )
}