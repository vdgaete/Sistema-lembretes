export interface TarefaProps {
  id: string;
  nome: string;
  data_fim: Date;
}

export class Tarefa {
  private props: TarefaProps;
  // contrutor base
  constructor(props: TarefaProps) {
    this.props = props;
  }
  // getters e setters
  public getId(): string {
    return this.props.id;
  }
  public getNome(): string {
    return this.props.nome;
  }
  public setNome(nome: string): void {
    this.props.nome = nome;
  }
  public getData_fim(): Date {
    return this.props.data_fim;
  }
  public setData_fim(data_fim: Date): void {
    this.props.data_fim = data_fim;
  }  
}


