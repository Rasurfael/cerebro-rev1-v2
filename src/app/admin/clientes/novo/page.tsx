'use client';

import { useState } from 'react';

export default function NovoClientePage() {
  const [cliente, setCliente] = useState({
    cnpj: '',
    nomeEmpresa: '',
    telefone: '',
    cep: '',
    rua: '',
    bairro: '',
    cidade: '',
    estado: '',
    segmentos: '', // Novo campo de segmento
    contatos: [{ nome: '', cargo: '', telefoneContato: '', email: '' }],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCliente({
      ...cliente,
      [name]: value,
    });
  };

  const handleContatoChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedContatos = [...cliente.contatos];
    updatedContatos[index] = { ...updatedContatos[index], [name]: value };
    setCliente({ ...cliente, contatos: updatedContatos });
  };

  const addContato = () => {
    setCliente({
      ...cliente,
      contatos: [
        ...cliente.contatos,
        { nome: '', cargo: '', telefoneContato: '', email: '' },
      ],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de envio dos dados.
    console.log(cliente);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-2xl font-bold mb-6">Novo Cliente</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-lg">
        {/* Campos da Empresa */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="text"
              id="cnpj"
              name="cnpj"
              value={cliente.cnpj}
              onChange={handleChange}
              placeholder=" "
              className="w-full p-4 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black peer"
            />
            <label htmlFor="cnpj" className="absolute left-4 top-4 transform text-gray-500 peer-focus:top-0 peer-focus:text-blue-500 peer-focus:text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500">
              CNPJ
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="nomeEmpresa"
              name="nomeEmpresa"
              value={cliente.nomeEmpresa}
              onChange={handleChange}
              placeholder=" "
              className="w-full p-4 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black peer"
            />
            <label htmlFor="nomeEmpresa" className="absolute left-4 top-4 transform text-gray-500 peer-focus:top-0 peer-focus:text-blue-500 peer-focus:text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500">
              Nome da Empresa
            </label>
          </div>
        </div>

        {/* Endereço */}
        <div className="grid grid-cols-4 gap-4">
          <div className="relative">
            <input
              type="text"
              id="telefone"
              name="telefone"
              value={cliente.telefone}
              onChange={handleChange}
              placeholder=" "
              className="w-full p-4 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black peer"
            />
            <label htmlFor="telefone" className="absolute left-4 top-4 transform text-gray-500 peer-focus:top-0 peer-focus:text-blue-500 peer-focus:text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500">
              Telefone
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="cep"
              name="cep"
              value={cliente.cep}
              onChange={handleChange}
              placeholder=" "
              className="w-full p-4 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black peer"
            />
            <label htmlFor="cep" className="absolute left-4 top-4 transform text-gray-500 peer-focus:top-0 peer-focus:text-blue-500 peer-focus:text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500">
              CEP
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="rua"
              name="rua"
              value={cliente.rua}
              onChange={handleChange}
              placeholder=" "
              className="w-full p-4 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black peer"
            />
            <label htmlFor="rua" className="absolute left-4 top-4 transform text-gray-500 peer-focus:top-0 peer-focus:text-blue-500 peer-focus:text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500">
              Rua
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="bairro"
              name="bairro"
              value={cliente.bairro}
              onChange={handleChange}
              placeholder=" "
              className="w-full p-4 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black peer"
            />
            <label htmlFor="bairro" className="absolute left-4 top-4 transform text-gray-500 peer-focus:top-0 peer-focus:text-blue-500 peer-focus:text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500">
              Bairro
            </label>
          </div>
        </div>

        {/* Segmento da Empresa */}
        <div className="relative">
          <select
            id="segmentos"
            name="segmentos"
            value={cliente.segmentos}
            onChange={handleChange}
            className="w-full p-4 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black peer"
          >
            <option value="" disabled>Selecione o Segmento</option>
            <option value="Condomínio Residencial">Condomínio Residencial</option>
            <option value="Condomínio Comercial">Condomínio Comercial</option>
            <option value="Condomínio Corporativo">Condomínio Corporativo</option>
            <option value="Indústria">Indústria</option>
            <option value="Portuário">Portuário</option>
            <option value="Aeroportuário">Aeroportuário</option>
            <option value="Hospitalar">Hospitalar</option>
            <option value="Educacional">Educacional</option>
            <option value="Varejo">Varejo</option>
            <option value="Governamental">Governamental</option>
          </select>
          <label htmlFor="segmentos" className="absolute left-4 top-4 transform text-gray-500 peer-focus:top-0 peer-focus:text-blue-500 peer-focus:text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500">
            Segmento
          </label>
        </div>

        {/* Contatos da Empresa */}
        <h2 className="text-xl font-semibold mt-8 text-black">Contatos da Empresa</h2>
        {cliente.contatos.map((contato, index) => (
          <div key={index} className="grid grid-cols-2 gap-4 mt-4">
            <div className="relative">
              <input
                type="text"
                id={`nomeContato-${index}`}
                name="nome"
                value={contato.nome}
                onChange={(e) => handleContatoChange(index, e)}
                placeholder=" "
                className="w-full p-4 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black peer"
              />
              <label htmlFor={`nomeContato-${index}`} className="absolute left-4 top-4 transform text-gray-500 peer-focus:top-0 peer-focus:text-blue-500 peer-focus:text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500">
                Nome do Contato
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id={`cargoContato-${index}`}
                name="cargo"
                value={contato.cargo}
                onChange={(e) => handleContatoChange(index, e)}
                placeholder=" "
                className="w-full p-4 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black peer"
              />
              <label htmlFor={`cargoContato-${index}`} className="absolute left-4 top-4 transform text-gray-500 peer-focus:top-0 peer-focus:text-blue-500 peer-focus:text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500">
                Cargo
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id={`telefoneContato-${index}`}
                name="telefoneContato"
                value={contato.telefoneContato}
                onChange={(e) => handleContatoChange(index, e)}
                placeholder=" "
                className="w-full p-4 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black peer"
              />
              <label htmlFor={`telefoneContato-${index}`} className="absolute left-4 top-4 transform text-gray-500 peer-focus:top-0 peer-focus:text-blue-500 peer-focus:text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500">
                Telefone do Contato
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                id={`emailContato-${index}`}
                name="email"
                value={contato.email}
                onChange={(e) => handleContatoChange(index, e)}
                placeholder=" "
                className="w-full p-4 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black peer"
              />
              <label htmlFor={`emailContato-${index}`} className="absolute left-4 top-4 transform text-gray-500 peer-focus:top-0 peer-focus:text-blue-500 peer-focus:text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500">
                E-mail do Contato
              </label>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addContato}
          className="text-blue-500 hover:underline mt-4"
        >
          Adicionar Novo Contato
        </button>

        <button
          type="submit"
          className="w-full mt-8 bg-black text-white py-2 rounded-xl"
        >
          Salvar Novo Cliente
        </button>
      </form>
    </div>
  );
}

