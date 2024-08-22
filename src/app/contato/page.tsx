import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaFacebook, FaInstagram, FaPhoneSquareAlt } from 'react-icons/fa';

const Contato = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main className="flex flex-col items-center justify-center py-20">
        <section className="text-center mb-10 max-w-4xl">
          <h1 className="text-5xl font-extrabold leading-tight mb-4">
            Fale Conosco
          </h1>
          <p className="text-lg mb-6">Estamos sempre prontos para ajudar você com suas necessidades elétricas. Se tiver dúvidas, precisar de uma cotação ou desejar agendar um serviço, não hesite em entrar em contato conosco. Nossa equipe está à disposição para oferecer o suporte que você precisa.
          </p>
        </section>

        <section className="w-full max-w-lg bg-white text-gray-900 shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Acesse nossas redes</h2>
          <div className="flex justify-center items-center space-x-8 mb-6">
            <div className="flex flex-col items-center">
              <a
                href="https://instagram.com/seuperfil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition duration-300"
              >
                <FaInstagram size={50} />
              </a>
            </div>
            <div className="flex flex-col items-center">
              <a
                href="https://facebook.com/seuperfil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition duration-300"
              >
                <FaFacebook size={50} />
              </a>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-6 text-center">ou</h2>
          <h2 className="text-3xl font-bold mb-6 text-center">Envie sua mensagem</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-lg font-medium mb-2" htmlFor="nome">
                Nome
              </label>
              <input
                className="w-full p-4 border focus:ring-4 focus:ring-gray-300"
                id="nome"
                type="text"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-4 border focus:ring-4 focus:ring-gray-300"
                id="email"
                type="email"
                placeholder="Seu email"
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2" htmlFor="mensagem">
                Mensagem
              </label>
              <textarea
                className="w-full p-4 border focus:ring-4 focus:ring-gray-300"
                id="mensagem"
                rows="5"
                placeholder="Sua mensagem"
              />
            </div>
            <div className="text-center">
              <button
                className="w-full py-3 px-6 bg-primary text-white font-bold shadow-lg hover:bg-gray-900 transition duration-300"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;
