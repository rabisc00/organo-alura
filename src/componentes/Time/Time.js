import Colaborador from "../Colaborador";
import "./Time.css";

export const Time = (props) => {
    const timeEstilo = {
        backgroundColor: props.corSecundaria
    };

    const styleH3 = {
        borderColor: props.corPrimaria
    };

    return (
        props.colaboradores.length > 0 &&
        <section className="time" style={timeEstilo}>
            <h3 style={styleH3}>{props.nome}</h3>

            <div className="colaboradores">
                {props.colaboradores.map(colab => 
                    <Colaborador
                        nome={colab.nome}
                        cargo={colab.cargo}
                        imagem={colab.imagem}
                        corDeFundo={props.corPrimaria}
                        key={colab.nome}
                    />
                )}
            </div>
        </section>
    );
};