import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

const Servicos = () => {
  const services = [
    {
      title: "Instalações Elétricas Residenciais", description: "Garanta o funcionamento seguro e eficiente da eletricidade em sua casa com nossas instalações elétricas residenciais.", image: "", list: [
        "Instalação de quadros de distribuição",
        "Fiação e cabeamento",
        "Pontos de energia e iluminação",
        "Sistemas de aterramento e proteção"
      ]
    },
    {
      title: "Instalações Elétricas Comerciais", description: "Para manter o seu negócio funcionando sem interrupções, oferecemos soluções elétricas comerciais de alta qualidade, incluindo:", image: "", list: [
        "Instalação de sistemas de iluminação interna e externa",
        "Pontos de energia e circuitos dedicados",
        "Manutenção e atualização de sistemas elétricos existentes",
        "Instalação de sistemas de segurança elétrica"
      ]
    },
    {
      title: "Manutenção e Reparos", description: "Manter sua instalação elétrica em perfeito estado é essencial para garantir a segurança e eficiência. Nossos serviços de manutenção e reparos incluem:", image: "", list: [
        "Inspeção e diagnóstico de problemas elétricos",
        "Substituição e reparo de componentes defeituosos",
        "Atualização de sistemas antigos",
        "Correção de falhas e sobrecargas"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main className="flex flex-col items-center py-20">
        <section className="text-center mb-16 max-w-4xl">
          <h1 className="text-5xl font-extrabold leading-tight mb-8">
            Nossos Serviços
          </h1>
          <p className="text-xl mb-6">Na Reivax Instalações Elétricas, temos o compromisso de fornecer soluções elétricas confiáveis e de alta qualidade para nossos clientes em Curitiba. Com mais de duas décadas de experiência no setor, nossa equipe de especialistas está pronta para atender a todas as suas necessidades elétricas com eficiência e segurança. Confira abaixo os serviços que oferecemos:
          </p>
        </section>

        <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((_, index) => (
            <div key={index} className="bg-white shadow-lg p-6 transform transition duration-300 hover:scale-105">
              <Image src="/generic.jpeg" alt="Serviço 1" width={400} height={200} className="" />
              <h2 className="text-2xl font-bold mt-4">
                {_.title}
              </h2>
              <p className="mt-2 text-gray-600 text-justify">
                {_.description}
              </p>
              <ul className='list-disc mt-4 ml-4 text-justify'>
                {
                  _.list.map((o, j) => (<li key={j}>{o}</li>))
                }
              </ul>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Servicos;
