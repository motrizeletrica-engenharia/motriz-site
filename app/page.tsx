import { ArrowRight, CheckCircle2, ChevronRight, Mail, MapPin, Phone, ShieldCheck, Sun, Wrench, Zap } from 'lucide-react';

const whatsappUrl = 'https://wa.me/5513997171493?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.';
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

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <header className="site-header">
          <a className="brand" href="#inicio" aria-label="Motriz Engenharia Elétrica — início"><img src="/logo-motriz.webp" alt="Motriz Engenharia Elétrica" /></a>
          <nav className="desktop-nav" aria-label="Navegação principal"><a href="#empresa">A Motriz</a><a href="#segmentos">Segmentos</a><a href="#servicos">Serviços</a><a href="#contato">Contato</a></nav>
          <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Solicitar orçamento <ArrowRight size={16} /></a>
          <a className="menu-button" href="#contato" aria-label="Ir para contato"><Phone /></a>
        </header>
        <div className="hero-backdrop" aria-hidden="true" /><div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow"><Zap size={15} fill="currentColor" /> Engenharia elétrica de ponta a ponta</p>
          <h1>Energia que <span>move</span> grandes projetos.</h1>
          <p className="hero-copy">Do planejamento à execução, soluções elétricas seguras, eficientes e sob medida para residências, edifícios, indústrias e embarcações.</p>
          <div className="hero-actions"><a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer">Fale com um especialista <ArrowRight size={18} /></a><a className="text-link" href="#servicos">Conheça nossas soluções</a></div>
          <div className="hero-trust" aria-label="Diferenciais"><span><CheckCircle2 size={17} /> Responsabilidade técnica</span><span><CheckCircle2 size={17} /> Soluções personalizadas</span><span><CheckCircle2 size={17} /> Atendimento ágil</span></div>
        </div>
        <div className="hero-note"><span>01</span><p>Projetos elétricos, energia solar, manutenção e automação com um único parceiro.</p></div>
      </section>

      <section className="about section" id="empresa">
        <div className="section-label"><span>02</span> A força por trás do projeto</div>
        <div className="about-grid">
          <div><p className="kicker">Engenharia que gera confiança</p><h2>Da ideia à energia em funcionamento.</h2></div>
          <div className="about-copy"><p>Na Motriz, cada projeto começa com escuta, análise técnica e responsabilidade. Unimos conhecimento, tecnologia e execução precisa para entregar soluções que funcionam hoje e continuam eficientes no futuro.</p><p>Mais do que instalações, construímos relações de confiança com clientes e parceiros.</p><div className="principles"><span><ShieldCheck /> Segurança em primeiro lugar</span><span><Zap /> Eficiência em cada etapa</span></div></div>
        </div>
      </section>

      <section className="segments section" id="segmentos">
        <div className="section-heading"><div><p className="kicker">Onde atuamos</p><h2>Expertise para diferentes desafios.</h2></div><p>Uma equipe, múltiplos segmentos e a mesma exigência técnica em cada entrega.</p></div>
        <div className="segment-grid">{segments.map((segment, index) => <article className="segment-card" key={segment.name}><img src={segment.image} alt={`Solução elétrica para o segmento ${segment.name.toLowerCase()}`} /><div className="segment-overlay"><span>0{index + 1}</span><div><h3>{segment.name}</h3><p>{segment.text}</p></div><ChevronRight /></div></article>)}</div>
      </section>

      <section className="services section" id="servicos">
        <div className="section-heading light"><div><p className="kicker">Soluções completas</p><h2>Tudo o que seu projeto precisa.</h2></div><p>Do estudo inicial à manutenção, cuidamos de cada etapa com visão integrada.</p></div>
        <div className="service-grid">{services.map(({ icon: Icon, tag, title, items }) => <article className="service-card" key={title}><div className="service-top"><span>{tag}</span><Icon /></div><h3>{title}</h3><ul>{items.map(item => <li key={item}><CheckCircle2 />{item}</li>)}</ul></article>)}</div>
      </section>

      <section className="process section">
        <div><p className="kicker">Nosso processo</p><h2>Clareza do primeiro contato à entrega.</h2></div>
        <ol className="process-list"><li><span>01</span><div><h3>Entendemos</h3><p>Conhecemos sua necessidade e o contexto do projeto.</p></div></li><li><span>02</span><div><h3>Planejamos</h3><p>Definimos a solução técnica mais segura e eficiente.</p></div></li><li><span>03</span><div><h3>Executamos</h3><p>Entregamos com qualidade, organização e transparência.</p></div></li></ol>
      </section>

      <section className="contact section" id="contato">
        <div className="contact-bg" aria-hidden="true" />
        <div className="contact-content"><p className="kicker">Vamos tirar seu projeto do papel?</p><h2>A energia certa começa com uma boa conversa.</h2><p>Conte o que você precisa. Nossa equipe está pronta para avaliar seu projeto e indicar o melhor caminho.</p><a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer">Solicitar orçamento no WhatsApp <ArrowRight /></a></div>
      </section>

      <footer><div className="footer-main"><img src="/logo-motriz.webp" alt="Motriz Engenharia Elétrica" /><p>Soluções elétricas inteligentes, seguras e eficientes.</p><div className="footer-contact"><a href="tel:+5513997171493"><Phone /> (13) 99717-1493</a><a href="mailto:motrizelettrica@gmail.com"><Mail /> motrizelettrica@gmail.com</a><span><MapPin /> Baixada Santista — SP</span></div></div><div className="footer-bottom"><span>© 2026 Motriz Engenharia Elétrica.</span><a href="#inicio">Voltar ao topo ↑</a></div></footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar com a Motriz pelo WhatsApp"><Phone fill="currentColor" /></a>
    </main>
  );
}
