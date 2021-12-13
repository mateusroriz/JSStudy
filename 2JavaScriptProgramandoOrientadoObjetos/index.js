import { Cliente } from "./Cliente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";



const diretor1 = new Diretor("Pedro", 10000, 123456780);
diretor1.cadastrarSenha("123456789");
const gerente1 = new Gerente("Rodrigo", 5000, 123456728);
gerente1.cadastrarSenha("2345567");

const cliente1 = new Cliente("Joao", 123456780, "987654321")

const estaLogadoDiretor = SistemaAutenticacao.login(diretor1, "123456789");;
const estaLogadoGerente = SistemaAutenticacao.login(gerente1, "2345567");
const estaLogadoCliente = SistemaAutenticacao.login(cliente1, "987654321");

console.log(estaLogadoGerente, estaLogadoDiretor, estaLogadoCliente);

