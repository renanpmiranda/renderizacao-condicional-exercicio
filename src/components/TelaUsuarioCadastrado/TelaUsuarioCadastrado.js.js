import { Div, Titulo, BotaoDeRetorno } from "./styled";

function TelaUsuarioCadastrado (props){
    return (
        <Div>
            <Titulo>Você concluiu o cadastro, parabéns!!!</Titulo>
            <BotaoDeRetorno onClick={()=>props.mudarTela(1)}>Voltar para o início</BotaoDeRetorno>
        </Div>
    )
}

export default TelaUsuarioCadastrado;