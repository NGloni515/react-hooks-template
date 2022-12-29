import { memo } from "react"

export const Small = memo(({value}) => {

    console.log('Rendering again')
    return(
        <small>{value}</small>
    )
})