import {useRouteError} from "react-router-dom"

const Error = ()=>{
    const err = useRouteError()
    return(
        <div>
            {err.status}, {err.statusText} {err.data}
        </div>
    )
}

export default Error