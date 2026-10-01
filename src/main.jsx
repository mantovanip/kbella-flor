import React from 'react';
import { createRoot } from 'react-dom/client';
import { MapPin, Phone, Instagram, MessageCircle, Flower2, Gift, Sprout, TreePine, Heart, ArrowRight, Clock3, Star, Menu, X, ChevronRight } from 'lucide-react';
import './styles.css';

const WA = '5548998152507';
const mapsUrl = 'https://www.google.com/maps/place/Kbella+Flor+Floricultura/@-28.80407,-49.2477869,17z/data=!4m8!3m7!1s0x9523d658f3ac71e1:0xc64f4d6f0bd892c1!8m2!3d-28.80407!4d-49.245212!9m1!1b1!16s%2Fg%2F11c2p1zt67';

function whatsapp(message) {
  return 'https://wa.me/' + WA + '?text=' + encodeURIComponent(message);
}

const products = [
  { icon: Flower2, title: 'Buquês & flores', text: 'Opções para presentear, celebrar ou simplesmente transformar o dia de alguém.', tag: 'Presentes' },
  { icon: Gift, title: 'Cestas de café', text: 'Cestas para aniversários, datas especiais e momentos que merecem um carinho a mais.', tag: 'Momentos especiais' },
  { icon: Sprout, title: 'Plantas & vasos', text: 'Plantas ornamentais, vasos e opções para levar mais verde para casa.', tag: 'Casa & jardim' },
  { icon: TreePine, title: 'Jardinagem & paisagismo', text: 'Materiais e soluções para jardins, incluindo terra, pedras e outros itens.', tag: 'Jardim' }
];

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="site">
      <header className="header">
        <div className="container nav">
          <a href="#inicio" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark"><Flower2 size={22} strokeWidth={1.7} /></span>
            <span><strong>Kbella</strong><small>FLOR</small></span>
          </a>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Abrir menu">{open ? <X/> : <Menu/>}</button>
          <nav className={open ? 'nav-links open' : 'nav-links'}>
            <a href="#produtos" onClick={() => setOpen(false)}>Produtos</a>
            <a href="#sobre" onClick={() => setOpen(false)}>A Kbella</a>
            <a href="#jardins" onClick={() => setOpen(false)}>Jardins</a>
            <a href="#contato" onClick={() => setOpen(false)}>Contato</a>
            <a className="nav-cta" href={whatsapp('Olá! Encontrei a Kbella Flor pelo site e gostaria de saber sobre os produtos disponíveis.')} target="_blank" rel="noreferrer">Pedir pelo WhatsApp <ArrowRight size={16}/></a>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-glow one"></div><div className="hero-glow two"></div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span></span> Balneário Rincão • SC</div>
              <h1>Flores que dizem o que <em>palavras</em> não conseguem.</h1>
              <p className="hero-lead">Buquês, cestas, plantas e tudo para deixar presentes e momentos especiais ainda mais bonitos.</p>
              <div className="hero-actions">
                <a className="button primary" href={whatsapp('Olá! Gostaria de fazer um pedido na Kbella Flor.')} target="_blank" rel="noreferrer">Falar pelo WhatsApp <ArrowRight size={18}/></a>
                <a className="button secondary" href="#produtos">Ver o que fazemos <ChevronRight size={18}/></a>
              </div>
              <div className="trust">
                <div className="rating"><Star fill="currentColor" size={15}/><strong>4,4</strong><span>16 avaliações no Google</span></div>
                <span className="dot"></span><span>Desde Pedreiras, Rincão</span>
              </div>
            </div>
            <div className="hero-art" aria-label="Composição floral">
              <div className="art-card main-card">
                <div className="flower-scene">
                  <span className="petal p1"></span><span className="petal p2"></span><span className="petal p3"></span><span className="petal p4"></span>
                  <span className="stem s1"></span><span className="stem s2"></span><span className="stem s3"></span>
                  <div className="bouquet-center"></div>
                </div>
                <div className="art-caption"><span>feito para</span><strong>momentos especiais</strong></div>
              </div>
              <div className="floating-note"><Heart size={17} fill="currentColor"/><span>Um presente<br/><b>com significado.</b></span></div>
              <div className="leaf leaf-a"></div><div className="leaf leaf-b"></div>
            </div>
          </div>
        </section>

        <section className="intro-strip">
          <div className="container strip-grid">
            <div><span className="strip-number">01</span><strong>Escolha</strong><p>Flores, presentes, plantas ou jardim.</p></div>
            <div><span className="strip-number">02</span><strong>Chame</strong><p>Converse direto pelo WhatsApp.</p></div>
            <div><span className="strip-number">03</span><strong>Encante</strong><p>Transforme um momento em memória.</p></div>
          </div>
        </section>

        <section id="produtos" className="section products">
          <div className="container">
            <div className="section-head">
              <div><span className="kicker">Para cada ocasião</span><h2>Escolha o seu <em>jeito</em> de presentear.</h2></div>
              <p>Do pequeno gesto ao projeto completo de jardim, a Kbella reúne opções para presentes, casa e espaços verdes.</p>
            </div>
            <div className="product-grid">
              {products.map(({icon: Icon, title, text, tag}) => (
                <article className="product-card" key={title}>
                  <div className="product-icon"><Icon size={25} strokeWidth={1.5}/></div>
                  <span className="tag">{tag}</span>
                  <h3>{title}</h3><p>{text}</p>
                  <a href={whatsapp('Olá! Gostaria de saber mais sobre ' + title + ' na Kbella Flor.')} target="_blank" rel="noreferrer">Quero saber mais <ArrowRight size={15}/></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="section story">
          <div className="container story-grid">
            <div className="story-visual">
              <div className="story-frame"><div className="line-art"><Flower2 size={112} strokeWidth={0.8}/></div><span>KBELLA<br/>FLOR</span></div>
              <div className="story-stamp">Rincão<br/><b>SC</b></div>
            </div>
            <div className="story-copy">
              <span className="kicker">A Kbella Flor</span>
              <h2>Um cantinho de flores, presentes e <em>vida.</em></h2>
              <p>A Kbella Flor está em Pedreiras, no Balneário Rincão, próxima ao Abimar Supermercados. A loja reúne flores, buquês, cestas de café da manhã, plantas ornamentais, vasos e itens para jardinagem.</p>
              <p>Também atende quem quer cuidar de espaços verdes, com produtos e soluções para jardins e paisagismo.</p>
              <div className="contact-mini"><MapPin size={18}/><span><b>SC-445 • Pedreiras</b><small>Balneário Rincão — SC</small></span></div>
            </div>
          </div>
        </section>

        <section id="jardins" className="garden">
          <div className="container garden-inner">
            <div><span className="kicker light">Além das flores</span><h2>Seu jardim também pode<br/><em>começar aqui.</em></h2><p>Plantas ornamentais, vasos, terra, pedras e itens para transformar ambientes. Para projetos maiores, fale com a equipe sobre jardinagem e paisagismo.</p><a className="button light-button" href={whatsapp('Olá! Gostaria de saber sobre jardinagem/paisagismo e produtos para jardim.')} target="_blank" rel="noreferrer">Falar sobre meu jardim <ArrowRight size={18}/></a></div>
            <div className="garden-orbit"><div className="orbit-ring"></div><Sprout size={86} strokeWidth={0.8}/><span>verde<br/><b>que fica.</b></span></div>
          </div>
        </section>

        <section className="occasion section">
          <div className="container occasion-grid">
            <div><span className="kicker">Quando a data chegar</span><h2>Presentes para dias que <em>merecem ser lembrados.</em></h2></div>
            <div className="occasion-list">
              {['Aniversários','Dia das Mães','Dia dos Namorados','Natal e datas especiais'].map((x,i)=><a key={x} href={whatsapp('Olá! Estou procurando um presente para ' + x + '. Podem me mostrar as opções?')} target="_blank" rel="noreferrer"><span>0{i+1}</span>{x}<ArrowRight size={17}/></a>)}
            </div>
          </div>
        </section>

        <section id="contato" className="contact">
          <div className="container contact-inner">
            <div><span className="kicker light">Vamos conversar?</span><h2>Seu próximo presente<br/><em>começa com uma mensagem.</em></h2><p>Chame a Kbella Flor e veja as opções disponíveis.</p></div>
            <div className="contact-actions">
              <a className="button light-button large" href={whatsapp('Olá! Vim pelo site da Kbella Flor e gostaria de fazer um pedido.')} target="_blank" rel="noreferrer"><MessageCircle size={19}/> WhatsApp</a>
              <a className="text-link light-link" href={mapsUrl} target="_blank" rel="noreferrer"><MapPin size={18}/> Ver no Google Maps</a>
            </div>
          </div>
        </section>

        <section className="location">
          <div className="container location-grid">
            <div><span className="kicker">Onde encontrar</span><h2>Venha conhecer a Kbella.</h2><p><b>SC-445, Pedreiras</b><br/>Balneário Rincão — SC<br/><small>Próxima ao Abimar Supermercados</small></p><a className="button outline" href={mapsUrl} target="_blank" rel="noreferrer">Abrir no Google Maps <ArrowRight size={17}/></a></div>
            <div className="hours"><div className="hours-icon"><Clock3/></div><span>Horário informado nas redes</span><strong>Segunda a sábado</strong><b>08h às 20h</b><small>Confirme a disponibilidade antes de sair.</small></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="brand footer-brand"><span className="brand-mark"><Flower2 size={22}/></span><span><strong>Kbella</strong><small>FLOR</small></span></div>
          <div className="footer-info"><span>SC-445 • Pedreiras • Balneário Rincão — SC</span><span>(48) 3468-5018</span></div>
          <div className="footer-links"><a href="https://instagram.com/kbellaflorfloricultura" target="_blank" rel="noreferrer"><Instagram size={17}/> @kbellaflorfloricultura</a><a href={whatsapp('Olá! Gostaria de falar com a Kbella Flor.')} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp</a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Kbella Flor Floricultura. Todos os direitos reservados.</span><span>Flores • Presentes • Jardins</span></div>
      </footer>
      <a className="floating-wa" href={whatsapp('Olá! Vim pelo site da Kbella Flor.')} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp"><MessageCircle size={25}/></a>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
