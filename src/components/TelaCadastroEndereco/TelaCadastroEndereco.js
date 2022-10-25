import { FormContainer, Form, StyledLabel, Input, SendButton} from "./styled"

function TelaCadastroEndereco (props) {
    return (
        <FormContainer>
          <h1>Cadastro de Endereço</h1>
          <Form>
            <StyledLabel htmlFor="endereco">
              Endereço:
              <Input id="endereco" type="text"/>
            </StyledLabel>
            <StyledLabel htmlFor="numero">
              Número da residência:
              <Input id="numero" type="number"/>
            </StyledLabel>
            <StyledLabel htmlFor="telefone">
              Telefone:
              <Input id="telefone" type="tel" />
            </StyledLabel>
            <StyledLabel htmlFor="complemento">
              Complemeto:
              <Input id="complemento" />
            </StyledLabel>
            <SendButton onClick={() => props.mudarTela(4)}>Cadastrar</SendButton>
          </Form>
        </FormContainer>
      );
    }
    
export default TelaCadastroEndereco;
