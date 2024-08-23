import "./CampoTexto.css";

export const CampoTexto = (props) => {
    const placeholderModificado = props.placeholder + "...";
    
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input 
                value={props.valor} 
                onChange={evento => props.aoAlterar(evento.target.value)} 
                required={props.obrigatorio} 
                placeholder={placeholderModificado} 
            />
        </div>
    );
}