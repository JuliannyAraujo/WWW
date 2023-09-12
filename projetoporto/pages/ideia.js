import Head from 'next/head'
import Header from '@/src/components/header/header'
import Footer from '@/src/components/footer/footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div>

        <section>
          <h2>Nossa ideia</h2>
          <p>

            Tendo em vista as solicitações do projeto e as características do atual chatbot da Porto, pensamos em
            uma otimização, para que as informações sejam completas, evitando retornos e
<<<<<<< HEAD
            “mensagens de erros” e com intuito de oferecer uma melhor experiência para o cliente, ou seja, um apontamento de que o chatbot não entendeu o que foi passado. Assim,
=======
            “mensagens de erros” e oferecendo uma melhor experiência para o cliente, ou seja, um apontamento de que o chatbot não entendeu o que foi passado. Assim,
>>>>>>> e316462f06a8a3d0cad1cba4f98a399b21e260bc
            podemos melhorar essas questões com itens práticos;
          </p>

          <p>
            Primeiro a criação de um banco de dados, que se trata de um armazenamento das informações do veículo
            e
            pode ser atualizado diretamente pelo cliente sobre as características do veículo, que incluem
            mudanças
            físicas, tipo e peso de carga (se houver);
            Um alerta com funcionalidade periódica (de três em três meses, por exemplo) que, no próprio
            aplicativo ou por mensagem de texto, dará um aviso ao cliente a respeito da necessidade da
            atualização das informações referentes às características do veículo;
            Utilização de reconhecimento de voz para maior acessibilidade, para que algumas pessoas tenham maior
            facilidade no momento de um acidente;
            Incremento de reconhecimento de imagens por uma Inteligencia Artificial, para auxiliar com o recurso
            visual qual o melhor modal.
          </p>


          <p>
          Resumindo, a meta consiste em desenvolver um chatbot com um modelo prático e compreensível,capaz de gerar
          todas as informações cruciais sem intervenção humana. Para aprimorar a eficiência e a facilidade de uso,
          estamos buscando integrar um sistema de reconhecimento de imagens baseado em IA,
          reduzindo o tempo necessário para selecionar o modal adequado em diferentes situações e aumentando 
          a automação do serviço.
          </p>

        </section>
        <Footer />
      </div>

    </>
  )
}