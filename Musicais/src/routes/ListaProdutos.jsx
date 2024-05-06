import React, { useState, useEffect } from 'react';
import '../css/produto.css';
import pencil from '../assets/pencil.png';
import trash from '../assets/trash-can.png';

function Produto() {
    const [database, setDatabase] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        try {
            const response = await fetch('dados.json');
            if (!response.ok) {
                throw new Error('Erro ao carregar os dados');
            }
            const jsonData = await response.json();
            const produtos = jsonData.produto; 
            setDatabase(produtos);
        } catch (error) {
            console.error('Erro:', error.message);
        }
    }

    function createData() {
        const newProduct = {};

        newProduct.nome = prompt("Digite o nome do produto:");
        if (!newProduct.nome) {
            return; 
        }

        newProduct.qtd = parseInt(prompt("Digite a quantidade do produto:"), 10);
        if (isNaN(newProduct.qtd) || newProduct.qtd <= 0) {
            alert("Quantidade inválida!");
            return; 
        }

        newProduct.valor = parseFloat(prompt("Digite o preço do produto:"));
        if (isNaN(newProduct.valor) || newProduct.valor <= 0) {
            alert("Preço inválido!");
            return; 
        }

        newProduct.id = database.length + 1; 

        setDatabase([...database, newProduct]);
    }

    function readData() {
      return database.map(item => (
          <tr key={item.id} className='tr-body'>
              <td>{item.nome}</td>
              <td>{item.qtd}</td>
              <td>{item.valor}</td>
              <td>
                  <img className='icon' src={pencil} onClick={() => updateData(item.id)} />
              </td>
              <td>
                  <img className='icon' src={trash} onClick={() => deleteData(item.id)} />
              </td>
          </tr>
      ));
  }
  

    function updateData(id) {
        const index = database.findIndex(item => item.id === id);
        if (index !== -1) {
            const newProduct = {};

            newProduct.nome = prompt("Digite o novo nome do produto:");
            if (!newProduct.nome) {
                return; 
            }

            newProduct.qtd = parseInt(prompt("Digite a nova quantidade do produto:"), 10);
            if (isNaN(newProduct.qtd) || newProduct.qtd <= 0) {
                alert("Quantidade inválida!");
                return; //
            }

            newProduct.valor = parseFloat(prompt("Digite o novo preço do produto:"));
            if (isNaN(newProduct.valor) || newProduct.valor <= 0) {
                alert("Preço inválido!");
                return;
            }

            const updatedDatabase = [...database];
            updatedDatabase[index] = { ...database[index], ...newProduct };
            setDatabase(updatedDatabase);
        }
    }

    function deleteData(id) {
        const updatedDatabase = database.filter(item => item.id !== id);
        setDatabase(updatedDatabase);
    }

    return (
      <div>
          <h1>Tabela de Produtos</h1>
          <table>
              <thead>
                  <tr className='tr-header'>
                      <th className='header-item' >Produto</th>
                      <th className='header-item' >Quantid.</th>
                      <th className='header-item' >Preço</th>
                      <th className='header-item' >Editar</th>
                      <th className='header-item' >Deletar</th>
                  </tr>
              </thead>
              <tbody className='table-body'>
                  {readData()}
              </tbody>
          </table>
          <div className="button-cadastro">
              <button onClick={createData}>Cadastrar produto</button>
          </div>
      </div>
  );  
}

export default Produto;
