function Student({name,id,skills,education:{SSC,HSC,DEGREE},exp,pfBal,desg,add}){
    return(
        <>
            <h1>My name is {name} and id is {id}</h1>
            <p>my skills are</p>
            <ul>
                {skills.map((ele)=>{
                    return <li>{ele}</li>
                })}
            </ul>
            <h2>Education</h2>
            <p>SSC-{SSC}</p>
            <p>HSC-{HSC}</p>
            <p>DEGREE-{DEGREE}</p>
            <p>Im {exp?'experinced':'fresher'}</p>
            <p>My PF balance is - {pfBal ?? "no"}</p>
            <p>My designation is {desg ?? 'unemployed'}</p>
            <p>My address is {add()}</p>
        </>
    )
}

export default Student