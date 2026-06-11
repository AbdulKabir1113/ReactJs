let Demo = ({ props }) => {
    // props immutable in nature
    // props.SSC='89.93' // it through error
    
    return(
         <p>{props.SSC}</p>
    )
}

export default Demo