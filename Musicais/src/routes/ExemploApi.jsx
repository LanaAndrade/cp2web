	import '../css/estilo.css';
//npm install react-hook-form
import { useForm } from 'react-hook-form'

const ExemploApi =()=>{

    const {register, handleSubmit,setValue,setFocus}= useForm();


    function buscarCep(e){
        //regex (/\D/g,'')
        const cep= e.target.value.replace(/\D/g,'');
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res)=> res.json())
        .then((dados)=> {
            setValue('rua',dados.logradouro);
            setValue('bairro',dados.bairro);
            setFocus('numero')
        });

    }
    return( 

        <section className="exemplo">
        <form className="frmCep" onSubmit={handleSubmit}>
        <fieldset>
            <legend>Dados</legend>
            <p id="texto">
                CEP:
                <input type="text" {...register("cep")} onBlur={buscarCep}/>
            </p>
            <p id="texto">
                Rua:
                <input type="text" {...register("rua")}/>
            </p>
            <p id="texto">
                Bairro:
                <input type="text" {...register("bairro")}/>
            </p>
            <p id="texto">
                Numero:
                <input type="text" {...register("numero")}/>
            </p>
        </fieldset>

        </form>
        </section>
    )
}
export default ExemploApi