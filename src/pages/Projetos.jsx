import "../styles/PageStyles.css";

const Projetos = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h2>📂 Meus Projetos</h2>
        <p>Confira alguns dos meus trabalhos:</p>
        <ul>
          <li>🖥️ <a href="https://github.com/MiriamLenzi/Trabalho-Avaliativo-CRUD" target="_blank">Projeto 1</a></li>
          <li>📱 <a href="https://github.com/MiriamLenzi/Consulta-de-Endere-o-via-API-CEP" target="_blank">Projeto 2</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Projetos;