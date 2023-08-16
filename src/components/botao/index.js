import { useState } from 'react'
import './botao.css'

export const Info = () => {
    const [Nome, setNome] = useState([]);

    const aoClicar = (event) => {
        setNome(event.target.value);
    }
   // const aoClicado = (event) =>{
   //     aoClicado == {setNome}
    //}
    return (
        <div>
            <div>
                <h2>
                    Digite seu Nome:<br></br>
                    <input onChange={aoClicar}></input><br></br>
                    <button className='botao' onChange={aoClicar}>Aperte</button><br></br>
                    <label>{Nome}</label>
                </h2>

            </div>
        </div>


    )
}
export default Info