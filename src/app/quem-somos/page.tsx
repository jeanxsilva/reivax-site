import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

const QuemSomos = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main className="flex flex-col items-center py-20">
        <section className="text-center mb-16 max-w-4xl">
          <h1 className="text-5xl font-extrabold leading-tight mb-8">
            Sobre Nós
          </h1>
          <p className="text-xl mb-6">
            Conheça a nossa história, entenda o que nos motiva e como podemos ajudá-lo a alcançar seus objetivos.
          </p>
        </section>

        <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col justify-center p-6 bg-white shadow-lg transform transition duration-300 hover:scale-105">
            <h2 className="text-3xl font-bold mb-4">A Reivax</h2>
            <p className="text-gray-600">A Reivax Instalações Elétricas é uma empresa curitibana que, desde o início dos anos 2000, vem se destacando na prestação de serviços elétricos com qualidade e compromisso. Fundada com o propósito de oferecer soluções elétricas seguras e eficientes, a Reivax cresceu junto com a cidade, adaptando-se às novas tecnologias e demandas do mercado.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image src="/generic.jpeg" alt="Nossa equipe" width={300} height={300} className="shadow-lg" />
          </div>
        </section>

        <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <Image src="/generic.jpeg" alt="Nossa trajetória" width={300} height={300} className="shadow-lg" />
          </div>
          <div className="flex flex-col justify-center p-6 bg-white shadow-lg transform transition duration-300 hover:scale-105">
            <h4 className="text-3xl font-bold mb-4">Nossa Trajetória</h4>
            <p className="text-gray-600 mb-4">Nossa jornada começou há mais de duas décadas, em Curitiba, com a visão de proporcionar um serviço elétrico confiável para lares e empresas. Ao longo dos anos, construímos uma reputação sólida, baseada na confiança e na satisfação dos nossos clientes. Com uma equipe qualificada e dedicada, continuamos a expandir nossos serviços, sempre focados em inovação e na segurança de cada projeto que realizamos.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QuemSomos;