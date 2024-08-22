// ./src/app/page.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import GalleryImage from '@/components/GalleryImage';

const Home = () => {
  const services = [
    { title: "Instalação elétrica residencial e comercial", description: "Planejamento e execução de projetos elétricos completos, garantindo segurança e eficiência energética para residências e empresas.", image: "" },
    { title: "Manutenção e reparos elétricos", description: "Serviços de manutenção preventiva e corretiva, identificando e solucionando problemas elétricos para evitar falhas e garantir o funcionamento contínuo.", image: "" },
    { title: "Instalação de iluminação", description: "Projetos personalizados de iluminação interna e externa, focados em eficiência energética e estética, adequados para ambientes residenciais e comerciais.", image: "" }
  ]

  const gallery_images = [
    { link: "" },
    { link: "" },
    { link: "" },
    { link: "" }
  ];

  return (
    <div>
      <Header />
      <main className="bg-gray-100">
        <div className="mx-auto px-4 py-6">
          {/* Seção de Introdução */}
          <section id="introducao" className="py-10">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex flex-col lg:flex-row justify-between items-center mb-6 h-56">
                <div className="md:w-3/4 text-right">
                  <h2 className="text-6xl font-semibold text-gray-800">Energia que impulsiona com segurança e eficiência.</h2>
                </div>
                <div className="md:w-1/4 text-right">
                  <a href="#contato">
                    <button className="bg-primary text-white py-2 px-4">Contate-nos</button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Seção Quem Somos */}
          <section id="quem-somos" className="py-10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 mr-4 text-justify pr-8">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">Quem somos nós?</h2>
                <p className="text-gray-600">A <b>Reivax Instalações Elétricas</b> é uma empresa curitibana, atuando desde o início dos anos 2000 com excelência em serviços de instalações elétricas. Com mais de duas décadas de experiência, nosso compromisso é fornecer soluções seguras e eficientes, que atendem às necessidades de nossos clientes, tanto no setor residencial quanto comercial. Acreditamos que energia é fundamental para o progresso, e trabalhamos incansavelmente para garantir que ela chegue com qualidade e segurança aos nossos clientes.</p>
              </div>
              <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 mt-4 md:mt-0">
                {[...Array(4)].map((_, index) => (
                  <Image key={index} src="/generic.jpeg" alt="Imagem genérica" width={600} height={400} className="w-full object-cover" />
                ))}
              </div>
            </div>
          </section>

          {/* Seção Serviços */}
          <section id="servicos" className="py-10">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-semibold mb-8 text-gray-800">O que fazemos?</h2>
              <div className="flex flex-col md:flex-row justify-between space-y-6 space-x-4 md:space-y-0 text-justify">
                {services.map((_, index) => (
                  <div key={index} className="w-full md:w-1/3">
                    <Image src="/generic.jpeg" alt="Imagem de serviço" width={600} height={400} className={"w-full object-cover"} />
                    <h3 className="text-xl font-semibold mt-6 text-left">{_.title}</h3>
                    <p className="text-gray-600 mt-2">{_.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Seção Galeria */}
          <section id="galeria" className="py-10">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-semibold mb-8 text-gray-800">Confira nossas redes sociais!</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {
                  gallery_images.map((_, index) => (<GalleryImage key={index} image={_}></GalleryImage>))
                }
              </div>
            </div>
          </section>

          {/* Seção Contato */}
          <section id="contato" className="py-10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 bg-white p-6">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">Contate-nos</h2>
                <div className="mb-5">
                  <p className="font-semibold text-gray-800 mb-2">Informações de Contato</p>
                  <p className="text-gray-600 flex mb-3"><FaPhoneSquareAlt size={24} />&nbsp;&nbsp;+55 (41) 9 9199-9968</p>
                  <p className="text-gray-600 flex mb-3"><IoIosMail size={24} />&nbsp;&nbsp;reivax_eletrica@yahoo.com.br</p>
                  <p className="text-gray-600 flex mb-3"><FaMapLocationDot size={24} />&nbsp;&nbsp;Cidade Industrial, Curitiba - Paraná</p>
                </div>
                <div className="mb-5">
                  <p className="font-semibold text-gray-800">Horários de Atendimento</p>
                  <p className="text-gray-600">Segunda a Sexta: 08:00 - 18:00</p>
                  <p className="text-gray-600">Sábado: 09:00 - 13:00</p>
                </div>
                <div>
                  <div className="flex space-x-4">
                    <a
                      href="https://instagram.com/seuperfil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 transition duration-300"
                    >
                      <FaInstagram size={24} />
                    </a>
                    <a
                      href="https://facebook.com/seuperfil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 transition duration-300"
                    >
                      <FaFacebook size={24} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 bg-white p-6">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">Envie uma mensagem</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="nome" className="block text-gray-700">Nome</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      className="w-full border border-gray-300 p-2 rounded-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700">E-mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full border border-gray-300 p-2 rounded-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="mensagem" className="block text-gray-700">Mensagem</label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      className="w-full border border-gray-300 p-2 rounded-none"
                      rows={4}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-primary text-white py-2 px-4 rounded-none hover:bg-blue-700 transition duration-300"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;