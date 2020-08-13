const semRetorno: (...args: string[]) => void = (...args) =>
  console.log(args.join(' '))

semRetorno('A', 'B', 'C')

const pessoa = {
  nome: 'Paulo',
  sobrenome: 'Goes',
  nomeCompleto(): void {
    console.log(`${this.nome} ${this.sobrenome}`)
  },
}

pessoa.nomeCompleto()
