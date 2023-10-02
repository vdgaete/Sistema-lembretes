import styled from "styled-components";
import { useApi } from "../contexts/ApiContext";
import { useForm } from "react-hook-form";
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
  padding: 10px;
  
`;
const Input = styled.input`
    flex: 1;
    margin-right: 10px;
  width: 60%;
  height: 35px;
  border-radius: 5px;
  border: 2px solid #ccc;
`;
const InputBox = styled.div`
  display: flex;
    flex-direction: row;
  justify-content: space-between;
`;

const Button = styled.button`
margin-right: 10px;
  flex: 1;
  align-content: center;
  border-radius: 10px;
  border: 1px solid #aaa;
  align-self: flex-end;
`;
const Label = styled.label`
width:25%;

  display: flex;
  
  align-self: center;
  font-size: 15px;
  font-weight: bold;
  
`;

const InputDiv = styled.div`
  flex-direction: column;
  width: 100%;
`;

const ToDoForm = () => {
  const { postTarefas } = useApi();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });

  const onSubmit = async (data) => {
    
    const dados = {
      nome: data.nome,
      dataLembrete: data.dataLembrete,
    };
    console.log(dados);
    postTarefas(dados.nome, dados.dataLembrete);
    return true;
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} name="cadastro">
      <InputDiv>
        <InputBox>
          <Label htmlFor="nome">Nome:</Label>

          <Input
            id="nome"
            type="text"
            {...register("nome", {
              required: {
                value: true,
                message: "Nome do lembrete não pode ser vazio",
              },
              minLength: 1,
              maxLength: 200,
            })}
            placeholder="Nome da atividade"
          />
        </InputBox>
        {errors.nome && (
          <p style={{ color: "red", fontSize: "12px", flex:1, alignSelf: "flex-end", 
          textAlign: "right", marginRight: "10px", fontWeight: "bold"
          }}>
            {errors.nome.message}
          </p>
        )}
      </InputDiv>

      <InputDiv>
        <InputBox>
          <Label htmlFor="dataLembrete">Data:</Label>

          <Input
            id="dataLembrete"
            type="date"
            {...register("dataLembrete", {
              required: true,
              validate: (value) => {
                // Data considerada válida: data atual ou futura
                const now = new Date();
                const dataLembrete = new Date(value);

                // Verificar se data de entrega é hoje
                if (
                  value.split("-")[2] == now.getDate() &&
                  value.split("-")[1] == now.getMonth()  &&
                  value.split("-")[0] == now.getFullYear()
                ) {
                  return true;
                }
                // Verificar se data de entrega é futura
                if (dataLembrete > now) {
                  return true;
                }
                return "Data de entrega deve ser hoje ou no futuro";
              },
            })}
            placeholder="Data de entrega"
          />
        </InputBox>
        {errors.dataLembrete && (
            <p style={{ color: "red", fontSize: "12px", flex:1, alignSelf: "flex-end", 
          textAlign: "right", marginRight: "10px", fontWeight: "bold"
          }}>
            {errors.dataLembrete.message}
          </p>
        )}
      </InputDiv>

      <Button type="submit">Adicionar</Button>
    </Form>
  );
};

export default ToDoForm;
