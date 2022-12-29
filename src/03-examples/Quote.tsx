import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({ author, quotes}) => {

    const pRef: any = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0})

    useLayoutEffect(() => {
        const {height, width} = pRef.current.getBoundingClientRect()
        setBoxSize({height, width});

    }, [quotes])

    return(
        <>
            <blockquote 
                className="blockquote text-end"
                style={{ display: 'flex' }}
            >
                <p ref={pRef} className="mb-1"> { quotes } </p>
                <footer className="blockquote-footer"> {author}</footer>
            </blockquote>

            <code>{JSON.stringify(boxSize)}</code>
        </>
        
    )
}