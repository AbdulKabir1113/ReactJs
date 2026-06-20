import {useState} from 'react'

function ControlledEg8(){

    let [languages , setLanguages] = useState([])

    let handleChange = e =>{
        if(e.target.checked){
            setLanguages([...languages,e.target.value])
        }else{
            setLanguages(languages.filter(ele =>{return ele !=e.target.value}))
        }
    }
    return(
        <>
        <h2>ControlledEg8</h2>
        Languages:
        <input type="checkbox" name='language' value='English' onChange={e=>handleChange(e)}/> English
        <input type="checkbox" name='language' value='Hindi' onChange={e=>handleChange(e)}/> Hindi
        <input type="checkbox" name='language' value='urdu' onChange={e=>handleChange(e)}/> Urdu
        <input type="checkbox" name='language' value='Marathi' onChange={e=>handleChange(e)}/> Marathi

        <div>
            <h3>Selected Languages:</h3>
            {languages.map(ele=>{
                return <li>{ele}</li>
            })}
        </div>
        </>

    )
}

export default ControlledEg8