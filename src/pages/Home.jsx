import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <img
          src="/perfil.jpg"
          alt="Minha foto"
          className="profile-photo"
        />
        <h1>Olá, eu sou Miriam Lenzi!</h1>
        <p>
          Sou estudante de <strong>Análise e Desenvolvimento de Sistemas</strong> e estou dando meus primeiros passos no mundo do desenvolvimento web.
          Gosto de aprender novas tecnologias e estou constantemente evoluindo na programação. Esse portfólio é um dos meus primeiros projetos para 
          praticar React. 🚀
        </p>
      </div>
    </div>
  );
};

export default Home;

