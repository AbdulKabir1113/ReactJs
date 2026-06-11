import CompB from "./CompB"

function CompA({num}){
    return(
        <>
        <h1>Hello</h1>
        <CompB num={num} />

        </>
    )
}
export default CompA