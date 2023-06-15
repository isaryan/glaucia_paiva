import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./ProductBanner.css";
import mundo from "../assets/mundo.png";
import olhe from "../assets/olhe.png";
import toque1 from "../assets/toque-1.png";
import toque2 from "../assets/toque-2.png";
import look from "../assets/look.png";

const ProductBanner = () => {
  const books = [
    {
      cover: olhe,
      title: "Olhe e veja além",
      description:
        "A Terapia Sistêmica é uma ferramenta que trabalha com mudanças de comportamentos e de situações que se repetem na nossa vida, independente da nossa vontade. Os conteúdos, conceitos e princípios descritos neste livro buscam esclarecer que, além da lógica racional sobre nossa história biográfica, existe uma Lógica Sistêmica que influencia profundamente nosso destino. Os resultados têm sido eficientes e sustentáveis.",
      quote:
        "A Justa Razão mostra, em poucos minutos, com clareza e precisão, como somos interligados no tecido humano, que nossas relações estão além da expressão do EU e do VOCÊ, mas que o contexto maior se expressa em nós e em nossos relacionamentos e que somos parte com responsabilidade sobre eles. Conseguir uma visão ampla facilita um entendimento maior do outro e ajuda a abrir o nosso coração”. (Dra. Ursula Franke-Bryson)",
      author: "Glaucia Paiva",
      price: "R$71",
      physical: "https://pag.ae/7ZpBe4VcH",
      digital: "https://www.amazon.com.br/dp/B0721N33KB",
    },
    {
      cover: mundo,
      title: "O mundo das constelações",
      description:
        "O livro surgiu da possibilidade concedida pela DGfS (Deutsche Gesellschaftfür Systemausfstellungen) para que pudéssemos traduzir e editar a revista comemorativa de 85 anos de Bert Hellinger e de 70 anos de Gunthard Weber. A primeira parte da revista está neste magnífico exemplar, conhecido como livro verde, o que demonstra a rápida intimidade com que os leitores se referiram a ele. Cada autor de artigo se esmerou para traduzir a essência de seu trabalho com o pensamento sistêmico e as constelações de uma forma didática e atualizada. Cada artigo corresponde a um capítulo profundo que nos leva a refletir sobre a abordagem e as suas possibilidades.",
      author: "autores diversos",
      price: "R$71",
      physical: "",
      digital: "https://www.amazon.com.br/dp/B01IAW16BG",
    },
    {
      cover: toque1,
      title: "Toques na alma: volume 1",
      description:
        "Um livro com 37 exercícios e recursos sistêmicos para caminhos e processos de transformação. A ideia deste livro nasceu dos encontros de um grupo de estudos chamado Intervisão, cujos autores se reúnem periodicamente com o objetivo de dar continuidade ao desenvolvimento pessoal e profissional, onde testaram e aprimoraram todos os exercícios sistêmicos contidos neste livro. Foram 4 anos de trabalho do grupo para o desenvolvimento de uma práxis sistêmica que pode ser utilizada como recursos por facilitadores sistêmicos em grupos, oficinas ou mesmo individualmente em consultórios.",
      quote:
        "Um dos sentidos de uma constelação ou exercício sistêmico é promover a autorregulação de um impulso. Esse movimento torna possível mudanças em padrões de comportamento, reconciliações, novos caminhos e principalmente uma conexão com a alma. Este livro proporciona 37 possibilidades de trilhar este caminho. Com toques na alma, ficamos mais perto de alimentar a paz. (Glaucia Paiva)",
      author: "autores diversos",
      price: "R$53",
      physical: "https://pag.ae/7ZpBeZfB2",
      digital: "https://www.amazon.com.br/dp/B087XCNDK6",
    },
    {
      cover: toque2,
      title: "Toques na alma: volume 2",
      description:
        "A continuidade do projeto Toques na Alma seguiu o impulso de compartilhar o resultado dos conteúdos do grupo de estudos dos autores, chamado Intervisão, aprimorando todos os exercícios contidos neste livro para o desenvolvimento de uma práxis sistêmica que pode ser utilizada como recursos por facilitadores sistêmicos em grupos, oficinas ou mesmo individualmente em consultórios.",
      quote:
        "Este livro reúne o desejo dos autores de partilhar conhecimento e promover a possibilidade de que muitos possam ter contato com vários formatos de constelações e exercícios sistêmicos que foram propostos com a intenção do crescimento pessoal e profissional daqueles a quem esta obra alcançar. Queremos honrar aqueles que fizeram parte do nosso caminho. Professores que dedicaram muitas horas para dar o melhor deles em cada workshop pelo mundo e que, em muitas oportunidades, tivemos a honra e a alegria de participar neste caminho do aprendiz, que aprende e que com responsabilidade leva adiante. Tudo isto para que todos se inspirem em seguir os passos daqueles que vieram antes e que muito contribuíram para todos nós. Que cada coração que receber este “toque na alma” possa tomar todo esse conhecimento. (Oswaldo Santucci)",
      author: "autores diversos",
      price: "R$71",
      physical: "https://pag.ae/7ZpBfxkm2",
      digital: "https://www.amazon.com.br/dp/B0C67MF97L",
    },
    {
      cover: look,
      title: "Look and See Beyond",
      description:
        "The Fundamental Reason shows, in a few minutes, with clarity and precision how we are interconnected in a human fabric, how our connections are beyond the expression of I and YOU, and how the bigger context expresses itself in us and in our relationships, of which we are part of and have our responsibilities. Acquiring a broad vision facilitates a better understanding of others and helps us open our hearts. We can no more live without knowing that there is something beyond what we can see. Ursula Franke-Bryson, Dr. Phil",
      quote: "For international shipping and payment, please contact us at: contato@conexaosistemica.com.br",
      author: "Glaucia Paiva",
      price: "R$71",
      physical: "https://pag.ae/7ZpBwTMjp",
      digital: "https://www.amazon.com.br/Look-See-beyond-FUNDAMENTAL-Constellations-ebook/dp/B07W5K82ZG/"
    }
  ];

  let Banners = [];
  for (let i = 0; i < books.length; i++) {
    Banners.push(
      <main key={i} className="product-banner" id={`product${i}`}>
        <div className="book-img">
          <img src={books[i].cover} alt={books[i].title} />
        </div>
        <section className={`book-info`}>
          <h2>{books[i].title}</h2>
          <h3>{books[i].author}</h3>
          <p>{books[i].description}</p>
          <em>{books[i].quote}</em>
          <h4>{books[i].price}</h4>
          <div className="buttons">
            <button>
              <a href={books[i].physical} target="_blank" rel="noopener">Cópia física</a>
            </button>
            <button>
              <a href={books[i].digital} target="_blank" rel="noopener">E-Book</a>
            </button>
            <Popup
              trigger={<button className="button"> PIX / Déposito </button>}
              modal
            >
              {(close) => (
                <div className="modal">
                  <span className="close" onClick={close}>
                    &times;
                  </span>
                  <div className="header"> Pagamento por pix ou depósito bancário </div>
                  <div className="content">
                    <p>Conta: Espaço Editora Conexão Sistêmica</p>
                    <p>Banco:  - Itaú – Agência 0742 – Conta 01927-6</p>
                    <p>PIX – CNPJ – 14692754000164</p>
                    <p>Ao fazer o deposito ou o pagamento via PIX mandar o comprovante para o email  ou whatsapp, com seu nome completo com CPF, endereço com CEP, seu email e CPF.</p>
                    <p>Email - glauciapaiva@glauciapaiva.com.br</p>
                    <p>Whatsapp - 011 98202 4087</p>
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </section>
      </main>
    );
  }
  return (
    <div className="ProductBanner">
        {Banners.map((banner) => {
          return banner;
        })}
    </div>
  );
};

export default ProductBanner;
