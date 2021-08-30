import { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, FormLeg, FormInput, FormButton, FormLabel, FormSelect, FormFieldset, FormL1, FormL2, FormL3, FormL4, FormL5, FormL6, FormL7, FormL8 } from './styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// App

toast.configure()

const App = () => {
  
  <ToastContainer autoClose={8000} />

  //API endereço

  const fetchAddress = async () => {
    const address = await axios.get(`https://viacep.com.br/ws/${form.cep}/json/`);
    setForm({ ...form, endereco: address.data.logradouro, cidade: address.data.localidade, bairro: address.data.bairro });

  };

  //Validacao CPF


  
  //   handleEntailmentRequest(e)=> {
  //     e.preventDefault();

  // } ;

  

  
   const createCandidate = async (candidate) => {
    const user = await axios.post('https://formreact.herokuapp.com/register', form);
    if (user.status === 200) {
      alert('Cadastrado com sucesso');
    }
    alert('Erro');
  };

  const [form, setForm] = useState({
    nome: '',
    cargo: '',
    nascimento: '',
    ecivil: '',
    genero: '',
    endereco: '',
    bairro: '',
    cidade: '',
    cep: '',
    telefone1: '',
    telefone2: '',
    celular: '',
    contato: '',
    email: '',
    identidade: '',
    cpf: '',
    veiculo: '',
    habilitacao: '',

  });

  useEffect(() => {
    console.log(form);
  }, [form]);

  const ValidaCPF = async () => {

    if (form.cpf.length != 11) {
  return false;
} else {

  // Percorrer até o 9 e pegar os valores
  let numeros = form.cpf.substring(0, 9);

  // Percorrer até o 9 e pegar do 9 para frente

  let digitos = form.cpf.substring(9);

  let soma = 0;

  for (var i = 10; i > 1; i--) {

    // Buscar posições e ao encontrar algo retornar ela
    soma += numeros.charAt(10 - i) * i;
  }

  console.log(soma);

  //Já pergunta se é menor que 2, se sim, resultado é 0, se não, :

  let resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

  // Resultado do primeiro dígito

  if (resultado != digitos.charAt(0)) {
    return false;
  }

  soma = 0;
  numeros = form.cpf.substring(0, 10);

  for (var k = 11; k > 1; k--) {
    soma += numeros.charAt(11 - k) * k;
  }

  console.log(soma);

  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);


  // //    Validação do segundo dígito

  if (resultado != digitos.charAt(1)) {
    return false;
  }

  return true;

}
};

const notify = () => {

toast('CPF inválido!');

};


  return (



    <Form>

      <FormLeg> Dados pessoais </FormLeg>

      <FormFieldset>

        <FormL1>

          <FormLabel> Nome </FormLabel>
          <FormInput onChange={(e) => {
            setForm({ ...form, nome: e.target.value });
          }} value={form.nome}></FormInput>

        </FormL1>

        <FormL1>

          <FormLabel> Cargo pretendido </FormLabel>
          <FormInput onChange={(e) => {
            setForm({ ...form, cargo: e.target.value });
          }} value={form.cargo}></FormInput>

        </FormL1>

        <FormL2>

          <FormLabel> Data de nascimento </FormLabel>
          <FormInput type="date" onChange={(e) => {
            setForm({ ...form, nascimento: e.target.value });
          }} value={form.nascimento}></FormInput>

        </FormL2>

        <FormL2>


          <FormLabel> Estado civil </FormLabel>
          <FormSelect onChange={(e) => {
            setForm({ ...form, ecivil: e.target.value });
          }} value={form.ecivil}>

            <option value=""> </option>
            <option value="Solteira"> Pessoa solteira </option>
            <option value="Casada"> Pessoa casada </option>
            <option value="Separada"> Pessoa separada </option>
            <option value="Divorciada"> Pessopa divorciada </option>

          </FormSelect>

        </FormL2>

        <FormL2>

          <FormLabel> Gênero </FormLabel>

          <FormSelect onChange={(e) => {
            setForm({ ...form, genero: e.target.value });
          }} value={form.genero}>

            <option value=""> </option>
            <option value="Masculino"> Masculino </option>
            <option value="Feminino"> Feminino </option>
            <option value="Não-binárie">Não-Binárie </option>
            <option value="Agênero"> Agênero </option>


          </FormSelect>

        </FormL2>

        <FormL3>


          <FormLabel> Endereço </FormLabel>
          <FormInput placeholder="ex. Nome da Rua, 56, Bloco 2, AP 301" onChange={(e) => {
            setForm({ ...form, endereco: e.target.value });
          }} value={form.endereco}></FormInput>

        </FormL3>

        <FormL4>


          <FormLabel> Bairro </FormLabel>
          <FormInput onChange={(e) => {
            setForm({ ...form, bairro: e.target.value });
          }} value={form.bairro}></FormInput>

        </FormL4>

        <FormL4>

          <FormLabel> Cidade </FormLabel>
          <FormInput onChange={(e) => {
            setForm({ ...form, cidade: e.target.value });
          }} value={form.cidade}></FormInput>

        </FormL4>

        <FormL5>


          <FormLabel> Cep </FormLabel>
          <FormInput onBlur={() => {
            fetchAddress();
          }} onChange={(e) => {
            setForm({ ...form, cep: e.target.value });
          }} value={form.cep}></FormInput>

        </FormL5>

        <FormL5>

          <FormLabel> Telefone fixo 1 </FormLabel>
          <FormInput onChange={(e) => {
            setForm({ ...form, telefone1: e.target.value });
          }} value={form.telefone1}></FormInput>


        </FormL5>

        <FormL5>

          <FormLabel> Telefone fixo 2 </FormLabel>
          <FormInput onChange={(e) => {
            setForm({ ...form, telefone2: e.target.value });
          }} value={form.telefone2}></FormInput>

        </FormL5>

        <FormL6>


          <FormLabel> Celular </FormLabel>
          <FormInput onChange={(e) => {
            setForm({ ...form, celular: e.target.value });
          }} value={form.celular}></FormInput>


        </FormL6>

        <FormL6>

          <FormLabel> Contato </FormLabel>
          <FormInput onChange={(e) => {
            setForm({ ...form, contato: e.target.value });
          }} value={form.contato}></FormInput>

        </FormL6>

        <FormL6>

          <FormLabel> E-mail </FormLabel>
          <FormInput placeholder="ex: myname@example.com" type="email" onChange={(e) => {
            setForm({ ...form, email: e.target.value });
          }} value={form.email}></FormInput>

        </FormL6>

      </FormFieldset>

      <FormLeg> Documentos </FormLeg>

      <FormFieldset>

        <FormL7>

          <FormLabel> Identidade </FormLabel>
          <FormInput onChange={(e) => {
            setForm({ ...form, identidade: e.target.value });
          }} value={form.identidade}></FormInput>

        </FormL7>

        <FormL7>

          <FormLabel> CPF </FormLabel>
          <FormInput onChange={(e) => {
            setForm({ ...form, cpf: e.target.value });
          }} value={form.cpf}
            onBlur={() => {
              ValidaCPF(form.cpf)
              
              if (ValidaCPF() ? console.log('OK') : notify ());
            }}
          ></FormInput>

        </FormL7>

        <FormL7>

          <FormLabel> Possui veículo </FormLabel>
          <FormSelect onChange={(e) => {
            setForm({ ...form, veiculo: e.target.value });
          }} value={form.veiculo}>

            <option value=""> </option>
            <option value="sim"> Sim </option>
            <option value="não"> Não </option>

          </FormSelect>

        </FormL7>

        <FormL7>

          <FormLabel> Habilitação </FormLabel>
          <FormSelect onChange={(e) => {
            setForm({ ...form, habilitacao: e.target.value });
          }} value={form.habilitacao}>

            <option value=""> </option>
            <option value="não possuo"> Não possuo </option>
            <option value="A"> A </option>
            <option value="B"> B </option>
            <option value="A e B"> AB </option>
            <option value="C"> C </option>
            <option value="D"> D </option>
            <option value="E"> E </option>


          </FormSelect>

        </FormL7>



      </FormFieldset>



        <FormL8>

          <FormButton onClick={() => createCandidate()} >Cadastrar</FormButton>

        </FormL8>




    </Form>




  );
};

export default App;
