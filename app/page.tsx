import { ArrowRight, BriefcaseBusiness, CheckCircle2, ChevronRight, Mail, MapPin, Phone, ShieldCheck, Sun, Wrench, Zap } from 'lucide-react';
import { QuoteForm } from '@/components/quote-form';

export const dynamic = 'force-static';

const whatsappUrl = 'https://wa.me/5513997171493?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const assetPath = (path: string) => `${basePath}${path}`;
const segments = [
  { name: 'Residencial', image: '/segmento-residencial.webp', text: 'Segurança, conforto e eficiência para sua casa.' },
  { name: 'Predial', image: '/segmento-predial.webp', text: 'Infraestrutura confiável para condomínios e edifícios.' },
  { name: 'Industrial', image: '/segmento-industrial.webp', text: 'Alta performance para operações que não podem parar.' },
  { name: 'Naval', image: '/segmento-naval.webp', text: 'Soluções robustas para ambientes de alta exigência.' },
];
const services = [
  { icon: Zap, tag: '01', title: 'Engenharia e projetos', items: ['Projetos elétricos e fotovoltaicos', 'Laudos técnicos e consultoria', 'Carregadores para veículos elétricos'] },
  { icon: Wrench, tag: '02', title: 'Execução e manutenção', items: ['Instalações e reformas completas', 'Manutenção preventiva e corretiva', 'Automação, redes, SPDA e centros de medição'] },
  { icon: Sun, tag: '03', title: 'Energia e painéis', items: ['Sistemas solares on-grid, off-grid e híbridos', 'Painéis e quadros sob demanda', 'Materiais elétricos de alta qualidade'] },
];
const showcases = [
  {
    image: '/motriz-carregador-eletrico.png',
    eyebrow: 'Mobilidade elétrica',
    title: 'Instalação de carregadores veiculares',
    text: 'Projeto e instalação segura para preparar residências, condomínios e empresas para a nova mobilidade.',
  },
  {
    image: '/motriz-energia-solar.png',
    eyebrow: 'Energia renovável',
    title: 'Gere sua própria energia',
    text: 'Sistemas fotovoltaicos sustentáveis e econômicos, dimensionados para o seu perfil de consumo.',
  },
  {
    image: '/motriz-quadro-eletrico.png',
    eyebrow: 'Proteção e organização',
    title: 'Quadros preparados para o futuro',
    text: 'Montagem organizada reduz riscos, facilita a manutenção e aumenta a confiabilidade da instalação.',
  },
  {
    image: '/motriz-iluminacao-comercial.png',
    eyebrow: 'Projetos realizados',
    title: 'Iluminação comercial eficiente',
    text: 'Distribuição uniforme e eficiente, preparada para ambientes com alto fluxo de clientes.',
  },
  {
    image: '/motriz-manutencao-solar.png',
    eyebrow: 'Manutenção fotovoltaica',
    title: 'Energia limpa rende mais',
    text: 'Limpeza e manutenção profissional ajudam a preservar a eficiência e a vida útil dos painéis.',
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <div className="top-offer"><Zap size={14} fill="currentColor" /><strong>Projeto + orçamento solar gratuitos</strong><span>Comece em apenas um clique.</span></div>
        <header className="site-header">
          <a className="brand" href="#inicio" aria-label="Motriz Engenharia Elétrica — início"><img src={assetPath('/logo-motriz.webp')} alt="Motriz Engenharia Elétrica" /></a>
          <nav className="desktop-nav" aria-label="Navegação principal"><a href="#empresa">A Motriz</a><a href="#segmentos">Segmentos</a><a href="#servicos">Serviços</a><a href="#contato">Contato</a></nav>
          <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Solicitar orçamento <ArrowRight size={16} /></a>
          <a className="menu-button" href="#contato" aria-label="Ir para contato"><Phone /></a>
        </header>
        <div className="hero-backdrop" style={{ backgroundImage: `url('${assetPath('/hero-motriz.webp')}')` }} aria-hidden="true" /><div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-message">
            <p className="eyebrow"><Zap size={15} fill="currentColor" /> Energia solar sem complicação</p>
            <h1>Seu projeto solar, <span>grátis</span> em 1 clique.</h1>
            <p className="hero-copy">Descubra a solução ideal para economizar na conta de luz. A Motriz prepara seu projeto e orçamento inicial sem custo.</p>
            <div className="hero-actions"><a className="primary-button" href="#formulario-orcamento">Começar agora <ArrowRight size={18} /></a><a className="text-link" href="#servicos">Conheça nossas soluções</a></div>
            <div className="hero-trust" aria-label="Diferenciais"><span><CheckCircle2 size={17} /> Projeto inicial gratuito</span><span><CheckCircle2 size={17} /> Sem compromisso</span><span><CheckCircle2 size={17} /> Atendimento especializado</span></div>
          </div>
          <div id="formulario-orcamento"><QuoteForm /></div>
        </div>
      </section>

      <section className="about section" id="empresa">
        <div className="section-label"><span>02</span> A força por trás do projeto</div>
        <div className="about-grid">
          <div><p className="kicker">Engenharia que gera confiança</p><h2>Da ideia à energia em funcionamento.</h2></div>
          <div className="about-copy"><p>Na Motriz, cada projeto é uma oportunidade de transformar ideias em soluções inteligentes e sustentáveis. Atuamos no desenvolvimento, planejamento e execução de obras e serviços de engenharia com qualidade, inovação e eficiência.</p><p>Nosso time une conhecimento técnico, tecnologia de ponta e práticas responsáveis para entregar desempenho, segurança e respeito ao meio ambiente. Mais do que estruturas, construímos confiança e impulsionamos o crescimento de clientes e parceiros.</p><div className="principles"><span><ShieldCheck /> Segurança em primeiro lugar</span><span><Zap /> Eficiência em cada etapa</span></div></div>
        </div>
      </section>

      <section className="segments section" id="segmentos">
        <div className="section-heading"><div><p className="kicker">Onde atuamos</p><h2>Expertise para diferentes desafios.</h2></div><p>Uma equipe, múltiplos segmentos e a mesma exigência técnica em cada entrega.</p></div>
        <div className="segment-grid">{segments.map((segment, index) => <article className="segment-card" key={segment.name}><img src={assetPath(segment.image)} alt={`Solução elétrica para o segmento ${segment.name.toLowerCase()}`} /><div className="segment-overlay"><span>0{index + 1}</span><div><h3>{segment.name}</h3><p>{segment.text}</p></div><ChevronRight /></div></article>)}</div>
      </section>

      <section className="services section" id="servicos">
        <div className="section-heading light"><div><p className="kicker">Soluções completas</p><h2>Tudo o que seu projeto precisa.</h2></div><p>Do estudo inicial à manutenção, cuidamos de cada etapa com visão integrada.</p></div>
        <div className="service-grid">{services.map(({ icon: Icon, tag, title, items }) => <article className="service-card" key={title}><div className="service-top"><span>{tag}</span><Icon /></div><h3>{title}</h3><ul>{items.map(item => <li key={item}><CheckCircle2 />{item}</li>)}</ul></article>)}</div>
      </section>

      <section className="showcase section" id="projetos">
        <div className="section-heading"><div><p className="kicker">Soluções em destaque</p><h2>Engenharia aplicada à vida real.</h2></div><p>Serviços que resolvem necessidades atuais e deixam sua infraestrutura pronta para o futuro.</p></div>
        <div className="showcase-grid">
          {showcases.map((item, index) => (
            <article className={`showcase-card showcase-card-${index + 1}`} key={item.title}>
              <div className="showcase-image"><img src={assetPath(item.image)} alt={item.title} /></div>
              <div className="showcase-copy"><p className="kicker">{item.eyebrow}</p><h3>{item.title}</h3><p>{item.text}</p><a href={whatsappUrl} target="_blank" rel="noreferrer">Solicitar projeto <ArrowRight size={17} /></a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="process section">
        <div><p className="kicker">Nosso processo</p><h2>Clareza do primeiro contato à entrega.</h2></div>
        <ol className="process-list"><li><span>01</span><div><h3>Entendemos</h3><p>Conhecemos sua necessidade e o contexto do projeto.</p></div></li><li><span>02</span><div><h3>Planejamos</h3><p>Definimos a solução técnica mais segura e eficiente.</p></div></li><li><span>03</span><div><h3>Executamos</h3><p>Entregamos com qualidade, organização e transparência.</p></div></li></ol>
      </section>

      <section className="careers section" id="trabalhe-conosco">
        <div className="careers-image"><img src={assetPath('/motriz-vaga-eletricista.png')} alt="Oportunidade para eletricista na Motriz Engenharia" /></div>
        <div className="careers-copy"><p className="kicker">Trabalhe conosco</p><h2>Quer crescer junto com a Motriz?</h2><p>Buscamos profissionais organizados, com boa comunicação, experiência prática e vontade de evoluir. As atividades incluem instalações e manutenções elétricas, montagem de quadros, tomadas, iluminação e apoio em serviços técnicos.</p><a className="dark-button" href={whatsappUrl} target="_blank" rel="noreferrer"><BriefcaseBusiness size={19} /> Enviar currículo pelo WhatsApp</a></div>
      </section>

      <section className="contact section" id="contato">
        <div className="contact-bg" style={{ backgroundImage: `linear-gradient(90deg,rgba(4,20,40,.97),rgba(4,20,40,.68)),url('${assetPath('/servico-engenharia.webp')}')` }} aria-hidden="true" />
        <div className="contact-content"><p className="kicker">Vamos tirar seu projeto do papel?</p><h2>A energia certa começa com uma boa conversa.</h2><p>Conte o que você precisa. Nossa equipe está pronta para avaliar seu projeto e indicar o melhor caminho.</p><a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer">Solicitar orçamento no WhatsApp <ArrowRight /></a></div>
      </section>

      <footer><div className="footer-main"><img src={assetPath('/logo-motriz.webp')} alt="Motriz Engenharia Elétrica" /><p>Soluções elétricas inteligentes, seguras e eficientes.</p><div className="footer-contact"><a href="tel:+5513997171493"><Phone /> (13) 99717-1493</a><a href="mailto:motrizelettrica@gmail.com"><Mail /> motrizelettrica@gmail.com</a><a href="https://www.instagram.com/motriz.eletrica/" target="_blank" rel="noreferrer"><span aria-hidden="true">@</span> @motriz.eletrica</a><span><MapPin /> Baixada Santista — SP</span></div></div><div className="footer-bottom"><span>© 2026 Motriz Engenharia Elétrica.</span><a href="#inicio">Voltar ao topo ↑</a></div></footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar com a Motriz pelo WhatsApp"><Phone fill="currentColor" /></a>
    </main>
  );
}
