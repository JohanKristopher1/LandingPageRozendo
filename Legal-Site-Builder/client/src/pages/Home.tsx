import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MapPin, Phone, Mail, Instagram, Star, ArrowRight, ShieldCheck, Scale, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";

// Image imports
import heroBg from "@/assets/images/bg-advogado.png";
import lawyerImg from "@/assets/images/rozendo-hero.jpg";
import caseFlight from "@/assets/images/case-flight.jpg";
import caseDoc from "@/assets/images/case-document.jpg";
import financiamentoVeiculoImg from "@/assets/images/finaciamento-de-veiculo.jpg";
import taxasAbusivasImg from "@/assets/images/taxas-abusivas.jpg";
import atrasoEntregaImg from "@/assets/images/atraso-na-entrega.jpg";
import cobrancaIndevidaImg from "@/assets/images/cobrança-indevida.png";
import practiceCivil from "@/assets/images/practice-civil.jpg";
import practiceFamily from "@/assets/images/practice-family.jpg";
import practiceLabor from "@/assets/images/practice-labor.jpg";
import practiceRealEstate from "@/assets/images/practice-realestate.jpg";
import practiceSocial from "@/assets/images/practice-social.jpg";
import logoMarcaDagua from "@/assets/images/Logo-marca-d-agua.png";
import logoHeader from "@/assets/images/logo-header.png";
import fundoLivros from "@/assets/images/fundo-livros.png";
import sobreNosImg from "@/assets/images/rozendo-sobre-nos.jpg";

const practiceCriminalImg =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200";
const practiceBusinessImg =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200";

const headerWhatsAppHref = "http://wa.me/5592984022008";
const headerInstagramHref = "https://www.instagram.com/rozendoadvogadoseassociados?igsh=MWtreTQ5ZGY4M25jZw==";
const headerMailto = "mailto:joaorozendo.adv@gmail.com";

const googleMapsPlaceReviewsUrl =
  "https://www.google.com/maps/place/Rozendo+Advogados+%26+Associados/@-3.1072668,-60.009624,17z/data=!3m1!4b1!4m6!3m5!1s0x926c05cf6c8c3389:0xdfeed824546a005!8m2!3d-3.1072668!4d-60.009624!16s%2Fg%2F11xccft_qs?hl=pt_BR";

type GoogleReviewsApiResponse = {
  placeName: string | null;
  rating: number | null;
  userRatingsTotal: number | null;
  reviews: {
    authorName: string;
    rating: number;
    relativeTime: string;
    text: string;
    profilePhotoUrl: string | null;
  }[];
  error: string | null;
};

const practiceAreas = [
  {
    title: "Direito do consumidor",
    desc: "Defesa em relações de consumo, vícios, cobranças indevidas e práticas abusivas.",
    img: caseDoc,
    detail:
      "O Direito do Consumidor é o ramo do direito que protege as pessoas nas relações de consumo, garantindo equilíbrio entre consumidores e empresas. No Brasil, essas normas estão previstas no Código de Defesa do Consumidor (CDC), que assegura transparência, segurança e respeito nas contratações.\n\nEntre os principais direitos estão: acesso à informação clara sobre produtos e serviços, proteção contra práticas abusivas, garantia de qualidade e possibilidade de reparação em caso de prejuízos.\n\nNa prática, isso significa que o consumidor pode, por exemplo, exigir a troca ou reembolso de um produto com defeito, contestar cobranças indevidas, solicitar a remoção de negativação injusta e desistir de compras online no prazo de até 7 dias.\n\nPara facilitar o entendimento, veja alguns exemplos práticos:\n\nSe um produto apresenta defeito após a compra, o consumidor pode exigir o conserto, a troca ou até o reembolso do valor pago.\nCaso uma pessoa tenha seu nome negativado indevidamente, ela pode solicitar a retirada imediata e,",
  },
  {
    title: "Direito Trabalhista",
    desc: "Rescisões, horas extras, assédio moral, vínculos e negociações com empregadores.",
    img: practiceLabor,
    detail:
      "O Direito Trabalhista é o ramo do direito que regula as relações entre empregados e empregadores, garantindo condições dignas de trabalho e o cumprimento dos direitos previstos em lei. No Brasil, essas normas estão previstas principalmente na Consolidação das Leis do Trabalho (CLT).\n\nEntre os principais direitos estão: registro em carteira, pagamento de salário justo, férias, 13º salário, FGTS, jornada de trabalho adequada e segurança no ambiente de trabalho.\n\nNa prática, isso significa que o trabalhador pode, por exemplo, cobrar verbas rescisórias não pagas, horas extras, reconhecimento de vínculo empregatício e indenização em casos de demissão irregular ou condições inadequadas de trabalho.",
  },
  {
    title: "Direito Familiar",
    desc: "Divórcio, pensão, guarda, união estável e mediação em conflitos familiares.",
    img: practiceFamily,
    detail:
      "O Direito de Família é o ramo do direito que trata das relações familiares, envolvendo questões como casamento, divórcio, guarda de filhos, pensão alimentícia e herança.\n\nEntre os principais direitos estão: regulamentação da guarda e convivência dos filhos, pagamento de pensão alimentícia, divisão de bens e proteção dos direitos de todos os membros da família.\n\nNa prática, isso significa que uma pessoa pode, por exemplo, solicitar o divórcio, definir a guarda dos filhos, pedir pensão alimentícia ou regularizar a partilha de bens.",
  },
  {
    title: "Direito Civil",
    desc: "Contratos, indenizações, responsabilidade civil e relações patrimoniais entre particulares.",
    img: practiceCivil,
    detail:
      "O Direito Civil é o ramo do direito que regula as relações entre pessoas, envolvendo direitos e deveres no âmbito pessoal e patrimonial.\n\nEntre os principais pontos estão: contratos, responsabilidade civil, indenizações, posse e propriedade de bens.\n\nNa prática, isso significa que uma pessoa pode, por exemplo, cobrar o cumprimento de um contrato, buscar indenização por danos morais ou materiais e resolver conflitos relacionados a bens e obrigações.",
  },
  {
    title: "Direito Criminal",
    desc: "Defesa em inquéritos e processos penais, liberdade e garantias do acusado.",
    img: practiceCriminalImg,
    detail:
      "O Direito Criminal é o ramo do direito que trata dos crimes e das penalidades aplicáveis a quem comete infrações previstas em lei, visando manter a ordem e a segurança da sociedade.\n\nEntre os principais pontos estão: definição de crimes, aplicação de penas, direito à defesa e garantias fundamentais do acusado.\n\nNa prática, isso significa que uma pessoa pode, por exemplo, se defender de uma acusação criminal, responder a um processo penal ou buscar a revisão de uma pena aplicada.",
  },
  {
    title: "Direito empresarial",
    desc: "Sociedades, contratos comerciais, compliance e suporte jurídico ao negócio.",
    img: practiceBusinessImg,
    detail:
      "O Direito Empresarial é o ramo do direito que regula as atividades das empresas e dos empresários, desde a abertura até a gestão e encerramento de negócios.\n\nEntre os principais pontos estão: constituição de empresas, elaboração de contratos, obrigações fiscais, recuperação judicial e falência.\n\nNa prática, isso significa que um empresário pode, por exemplo, abrir e regularizar sua empresa, elaborar contratos seguros, resolver conflitos comerciais ou reorganizar o negócio em momentos de dificuldade.",
  },
  {
    title: "Direito Condominial",
    desc: "Assembleias, taxas, conflitos entre moradores e convenção do condomínio.",
    img: practiceRealEstate,
    detail:
      "O Direito Condominial é o ramo do direito que trata das relações em condomínios, regulando direitos e deveres de moradores, síndicos e administradoras.\n\nEntre os principais pontos estão: cobrança de taxas condominiais, regras de convivência, uso das áreas comuns e gestão do condomínio.\n\nNa prática, isso significa que o condomínio pode cobrar inadimplentes, aplicar regras internas e resolver conflitos entre moradores, enquanto o condômino pode questionar cobranças indevidas ou abusos.",
  },
  {
    title: "Direito Previdenciário",
    desc: "Aposentadorias, benefícios do INSS, revisões e planejamento previdenciário.",
    img: practiceSocial,
    detail:
      "O Direito Previdenciário é o ramo do direito que regula os benefícios da seguridade social, garantindo proteção ao cidadão em situações como aposentadoria, doença ou incapacidade.\n\nEntre os principais pontos estão: aposentadorias, auxílio-doença, pensão por morte e benefícios assistenciais.\n\nNa prática, isso significa que uma pessoa pode, por exemplo, solicitar aposentadoria, pedir auxílio em caso de incapacidade para o trabalho ou requerer pensão para dependentes.",
  },
] as const;

export default function Home() {
  const { data: reviewsApi, isLoading: reviewsLoading } = useQuery<GoogleReviewsApiResponse>({
    queryKey: ["/api/google-reviews"],
    staleTime: 1000 * 60 * 30,
  });

  const reviewsReady = !reviewsLoading && reviewsApi !== undefined;
  const apiOk = reviewsReady && reviewsApi.error == null;
  const apiErrorMessage = reviewsReady && reviewsApi.error ? reviewsApi.error : null;

  const reviewCards = apiOk
    ? reviewsApi.reviews.map((r, i) => ({
        key: `g-${i}-${r.authorName}-${r.relativeTime}`,
        name: r.authorName,
        time: r.relativeTime,
        text: r.text?.trim() || "Sem comentário textual.",
        photoSrc: r.profilePhotoUrl,
        rating: r.rating,
      }))
    : [];

  const displayRating = apiOk ? reviewsApi.rating : null;
  const displayCount = apiOk
    ? (reviewsApi.userRatingsTotal ?? (reviewsApi.reviews.length > 0 ? reviewsApi.reviews.length : null))
    : null;

  const headlineLabel =
    displayRating != null && displayRating >= 4.5
      ? "EXCELENTE"
      : displayRating != null
        ? displayRating.toFixed(1).replace(".", ",")
        : "Google";

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
      
      {/* 1. Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5">
        <div className="container mx-auto px-4 h-20 flex items-center">

          {/* Logo — ocupa metade esquerda no mobile, cede espaço no desktop */}
          <div className="flex flex-1 items-center min-w-0">
            <a
              href="/"
              aria-label="Rozendo Advogados & Associados — início"
              className="flex items-center self-stretch overflow-hidden rounded-md outline-none ring-primary/60 focus-visible:ring-2"
              onClick={(e) => {
                if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                e.preventDefault();
                window.location.assign("/");
              }}
            >
              <img
                src={logoHeader}
                alt="Rozendo Advogados & Associados"
                className="h-24 sm:h-28 w-auto object-contain"
              />
            </a>
          </div>

          {/* Nav — só aparece no desktop, centralizado porque os dois lados têm flex-1 */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {["Casos Frequentes", "Serviços", "Sobre", "Avaliações"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm font-medium text-white/70 hover:text-primary transition-colors tracking-wide whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Ícones — ocupa metade direita no mobile, alinhados à direita */}
          <div className="flex flex-1 items-center justify-end gap-0.5 sm:gap-1">
            <a
              href={headerWhatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-white/70 transition-colors hover:bg-white/5 hover:text-primary"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a
              href={headerInstagramHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-white/70 transition-colors hover:bg-white/5 hover:text-primary"
            >
              <Instagram className="h-5 w-5" strokeWidth={1.75} />
            </a>
            <a
              href={headerMailto}
              aria-label="E-mail"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-white/70 transition-colors hover:bg-white/5 hover:text-primary"
            >
              <Mail className="h-5 w-5" strokeWidth={1.75} />
            </a>
          </div>

        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Fundo jurídico"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-[center_30%] opacity-70 brightness-75"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Lawyer Photo & Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 md:order-1"
          >
            <div className="relative mx-auto max-w-[400px] group">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
              <div className="relative z-10 overflow-hidden rounded-tl-[80px] rounded-br-[80px] border border-white/10 shadow-2xl aspect-[4/5]">
                <img
                  src={lawyerImg}
                  alt="Advogado Principal"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover object-[center_10%] group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 z-20 glass-panel p-4 rounded-lg shadow-xl border-l-2 border-primary max-w-[200px]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold tracking-wider text-white/90">João Victor Rozendo de Oliveira</span>
                </div>
                <p className="text-[14px] text-white/60">OAB/AM 18.883</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary uppercase tracking-widest">
              <Scale className="w-3 h-3" />
              <span>Excelência Jurídica</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] text-white">
              Seu direito e a sua <br />
              <span className="gold-gradient-text italic">tranquilidade jurídica</span><br />
              é a nossa Missão
            </h1>
            
            <p className="text-lg text-white/60 max-w-lg font-light leading-relaxed">
              Fale com um dos nossos advogados especialistas e encontre a melhor solução para o seu caso.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                variant="granite"
                className="h-14 px-10 rounded-md border-none uppercase tracking-widest font-semibold text-sm group hover:shadow-xl hover:shadow-amber-500/40 transition-shadow"
              >
                <a href={headerWhatsAppHref} target="_blank" rel="noopener noreferrer">
                  Entrar em Contato
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Casos Frequentes */}
      <section id="casos-frequentes" className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Especialidades</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-white">CASOS FREQUENTES DO ESCRITÓRIO</h3>
            <div className="w-16 h-px bg-primary mx-auto mt-6" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              autoplay
              autoplayInterval={4500}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent className="-ml-4">
                {[
                  { title: "Indenizações por Voo", img: caseFlight, desc: "Atrasos, cancelamentos e extravio de bagagem." },
                  { title: "Inscrição Indevida", img: caseDoc, desc: "Nome negativado indevidamente no SPC/Serasa." },
                  {
                    title: "Financiamento de Veículo",
                    img: financiamentoVeiculoImg,
                    desc: "Parcelas altas e juros abusivos podem ser revisados. Reduza sua dívida e evite prejuízos.",
                  },
                  {
                    title: "Taxas Abusivas",
                    img: taxasAbusivasImg,
                    desc: "Você pode estar pagando valores indevidos em contratos e não sabe. Revise cobranças e recupere o que é seu por direito.",
                  },
                  {
                    title: "Atraso na Entrega de Encomenda",
                    img: atrasoEntregaImg,
                    desc: "Seu pedido não chegou no prazo? Você pode exigir solução rápida ou até indenização.",
                  },
                  {
                    title: "Cobranças Indevidas",
                    img: cobrancaIndevidaImg,
                    desc: "Tarifas e juros abusivos podem ser contestados. Revise seu contrato bancário e recupere valores pagos a mais.",
                  },
                ].map((item, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="group relative overflow-hidden rounded-xl aspect-square border border-white/10 bg-black">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end">
                        <div className="mb-2">
                          <span className="text-xs font-bold bg-destructive text-white px-2 py-1 rounded">DIREITO DO CONSUMIDOR</span>
                        </div>
                        <h4 className="text-xl font-serif text-white mb-2">{item.title}</h4>
                        <p className="text-sm text-white/70 mb-6 font-light">{item.desc}</p>
                        <Button
                          asChild
                          variant="outline"
                          className="w-full border-white/20 text-white hover:bg-white hover:text-black rounded-none"
                        >
                          <a href={headerWhatsAppHref} target="_blank" rel="noopener noreferrer">
                            Mais Informações
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex border-white/20 hover:bg-primary hover:text-primary-foreground hover:border-primary bg-black/50 text-white left-[-3rem]" />
              <CarouselNext className="hidden md:flex border-white/20 hover:bg-primary hover:text-primary-foreground hover:border-primary bg-black/50 text-white right-[-3rem]" />
            </Carousel>
          </motion.div>
        </div>
      </section>

      {/* 4. Nossa Área de Atuação */}
      <section id="serviços" className="py-24 bg-white text-zinc-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-[#B8860B] mb-4 font-bold">Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-black">NOSSA ÁREA DE ATUAÇÃO</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {practiceAreas.map((practice, index) => (
              <Dialog key={`${practice.title}-${index}`}>
                <DialogTrigger asChild>
                  <div className="group cursor-pointer text-left">
                    <div className="overflow-hidden rounded-2xl mb-6 bg-zinc-100 aspect-[4/3]">
                      <img
                        src={practice.img}
                        alt={practice.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-black font-serif">{practice.title}</h4>
                    <p className="text-zinc-600 text-sm leading-relaxed">{practice.desc}</p>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>{practice.title}</DialogTitle>
                    <DialogDescription asChild>
                      <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                        {practice.detail}
                      </p>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-center"
          >
            <Button asChild variant="granite" className="h-14 px-10 rounded-none uppercase tracking-widest font-semibold text-sm">
              <a href={headerWhatsAppHref} target="_blank" rel="noopener noreferrer">
                Peça mais informações
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 5. Sobre o Escritório */}
      <section id="sobre" className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 z-0">
          <img
            src={fundoLivros}
            alt=""
            aria-hidden
            className="h-full w-full object-cover object-center opacity-[0.60] brightness-[0.80]"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-white">CONHEÇA NOSSO ESCRITÓRIO</h2>
              <div className="w-16 h-px bg-primary" />
              
              <div className="space-y-6 text-white/70 font-light leading-relaxed">
                <p>
                  O escritório <strong>Rozendo Advocacia</strong> destaca-se por sua atuação pautada na ética, transparência e comprometimento com os resultados de seus clientes. Com anos de experiência no mercado jurídico, nossa equipe é formada por profissionais altamente qualificados.
                </p>
                <p>
                  Acreditamos que a advocacia moderna exige não apenas o conhecimento técnico aprofundado, mas também uma visão estratégica e humanizada de cada caso. Nosso objetivo é proporcionar segurança jurídica através de soluções inovadoras.
                </p>
                <ul className="space-y-3 pt-4">
                  {[
                    "Atendimento personalizado e humanizado",
                    "Agilidade e transparência nos processos",
                    "Especialistas em causas complexas"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-white/90 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 rounded-none uppercase tracking-widest text-xs h-12 px-8 mt-4">
                <a href={headerWhatsAppHref} target="_blank" rel="noopener noreferrer">
                  Fale Conosco
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/10 transform translate-x-4 translate-y-4 rounded-sm" />
              <img
                src={sobreNosImg}
                alt="Equipe Rozendo Advocacia"
                loading="lazy"
                decoding="async"
                className="relative z-10 w-full h-auto aspect-[3/4] object-cover object-[center_15%] shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Prova Social */}
      <section id="avaliações" className="py-24 bg-[#FAF8F5] text-zinc-950 border-t border-zinc-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-zinc-900 text-left">
              O que nossos clientes estão falando
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mb-16"
          >
            <div className="mx-auto max-w-4xl rounded-3xl bg-[#050814] border border-black/70 shadow-[0_18px_60px_rgba(0,0,0,0.7)] px-6 py-6 md:px-10 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="flex-1">
                <p className="text-3xl md:text-4xl font-serif text-primary font-semibold leading-none">
                  +5 <span className="text-lg md:text-xl align-top">MIL</span>
                </p>
                <p className="mt-2 text-xs md:text-sm text-white/70 uppercase tracking-[0.25em]">
                  Clientes atendidos
                </p>
              </div>

              <div className="h-px w-16 md:h-16 md:w-px bg-white/15 md:mx-4" />

              <div className="flex-1">
                <p className="text-3xl md:text-4xl font-serif text-primary font-semibold leading-none">
                  +9 <span className="text-lg md:text-xl align-top">ANOS</span>
                </p>
                <p className="mt-2 text-xs md:text-sm text-white/70 uppercase tracking-[0.25em]">
                  de experiência
                </p>
              </div>

              <div className="h-px w-16 md:h-16 md:w-px bg-white/15 md:mx-4" />

              <div className="flex-1">
                <p className="text-3xl md:text-4xl font-serif text-primary font-semibold leading-none">
                  +3 <span className="text-lg md:text-xl align-top">MIL</span>
                </p>
                <p className="mt-2 text-xs md:text-sm text-white/70 uppercase tracking-[0.25em]">
                  Casos defendidos
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-16"
          >
            <div className="text-center md:text-left bg-white p-6 rounded-xl shadow-sm border border-zinc-100 flex-shrink-0">
              {reviewsLoading ? (
                <div className="space-y-3">
                  <Skeleton className="mx-auto md:mx-0 h-7 w-40" />
                  <Skeleton className="mx-auto md:mx-0 h-5 w-32" />
                  <Skeleton className="mx-auto md:mx-0 h-4 w-48" />
                </div>
              ) : apiErrorMessage ? (
                <>
                  <h4 className="font-bold text-xl mb-2 text-zinc-800">Avaliações Google</h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Não foi possível carregar os dados de <code className="rounded bg-zinc-100 px-1 text-xs">/api/google-reviews</code>{" "}
                    agora. Confira as avaliações direto no Google.
                  </p>
                  <a
                    href={googleMapsPlaceReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-xs font-medium text-blue-600 underline-offset-4 hover:underline"
                  >
                    Abrir perfil no Google Maps
                  </a>
                </>
              ) : (
                <>
                  <h4 className="font-bold text-xl mb-2">{headlineLabel}</h4>
                  <div className="flex gap-1 justify-center md:justify-start text-[#FBBC04] mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          displayRating != null && i <= Math.round(displayRating)
                            ? "fill-[#FBBC04] text-[#FBBC04]"
                            : "text-zinc-200"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-zinc-600">
                    {displayCount != null ? (
                      <>
                        Com base em{" "}
                        <strong>
                          {displayCount} {displayCount === 1 ? "avaliação" : "avaliações"}
                        </strong>{" "}
                        no Google
                      </>
                    ) : (
                      <span className="text-zinc-500">Nota e total conforme o Google Maps</span>
                    )}
                  </p>
                  <a
                    href={googleMapsPlaceReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-xs font-medium text-blue-600 underline-offset-4 hover:underline"
                  >
                    Ver perfil e avaliações no Google
                  </a>
                  <div className="mt-4 flex items-center justify-center md:justify-start gap-2">
                    <span className="font-bold text-xl text-blue-500">G</span>
                    <span className="font-bold text-xl text-red-500">o</span>
                    <span className="font-bold text-xl text-yellow-500">o</span>
                    <span className="font-bold text-xl text-blue-500">g</span>
                    <span className="font-bold text-xl text-green-500">l</span>
                    <span className="font-bold text-xl text-red-500">e</span>
                  </div>
                </>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6 w-full">
              {reviewsLoading
                ? [0, 1, 2, 3].map((i) => (
                    <Card key={`sk-${i}`} className="bg-white border-zinc-100 shadow-sm rounded-xl">
                      <CardContent className="space-y-4 p-6">
                        <div className="flex items-center gap-4">
                          <Skeleton className="h-12 w-12 rounded-full" />
                          <div className="flex-1 space-y-2">
                            <Skeleton className="h-4 w-32" />
                            <Skeleton className="h-3 w-24" />
                          </div>
                        </div>
                        <Skeleton className="h-4 w-28" />
                        <Skeleton className="h-16 w-full" />
                      </CardContent>
                    </Card>
                  ))
                : apiErrorMessage
                  ? null
                  : reviewCards.length > 0
                    ? reviewCards.map((review) => (
                        <Card key={review.key} className="bg-white border-zinc-100 shadow-sm rounded-xl">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-4 mb-4">
                              {review.photoSrc ? (
                                <img
                                  src={review.photoSrc}
                                  alt=""
                                  referrerPolicy="no-referrer"
                                  className="h-12 w-12 rounded-full object-cover bg-zinc-200"
                                />
                              ) : (
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-200 text-sm font-semibold text-zinc-600">
                                  {review.name.slice(0, 1).toUpperCase()}
                                </div>
                              )}
                              <div>
                                <h5 className="font-bold text-sm">{review.name}</h5>
                                <p className="text-xs text-zinc-500">{review.time}</p>
                              </div>
                            </div>
                            <div className="mb-3 flex gap-1 text-[#FBBC04]">
                              {[1, 2, 3, 4, 5].map((i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i <= Math.round(review.rating)
                                      ? "fill-[#FBBC04] text-[#FBBC04]"
                                      : "text-zinc-200"
                                  }`}
                                />
                              ))}
                            </div>
                            <p className="text-sm font-light text-zinc-700">&ldquo;{review.text}&rdquo;</p>
                            <p className="mt-3 text-[10px] uppercase tracking-wider text-zinc-400">
                              Avaliação no Google (via API)
                            </p>
                          </CardContent>
                        </Card>
                      ))
                    : (
                        <div className="col-span-full rounded-xl border border-dashed border-zinc-200 bg-white/80 px-6 py-10 text-center text-sm text-zinc-600">
                          <p className="mb-2">
                            Nenhum texto de avaliação foi retornado em <code className="rounded bg-zinc-100 px-1 text-xs">/api/google-reviews</code>{" "}
                            (a API do Google costuma enviar até cinco resenhas por requisição).
                          </p>
                          <a
                            href={googleMapsPlaceReviewsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-medium text-blue-600 underline-offset-4 hover:underline"
                          >
                            Ver todas no Google Maps
                          </a>
                        </div>
                      )}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="flex justify-end"
          >
             <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-xs font-medium border border-green-200">
               <ShieldCheck className="w-4 h-4" />
               Verificações Realizadas
             </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Rodapé */}
      <footer className="relative overflow-hidden border-t border-white/5 py-16 text-white/70">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#050505]/55" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12 items-stretch">
            <div className="flex min-h-[200px] items-center justify-center lg:min-h-[220px]">
              <img
                src={logoMarcaDagua}
                alt="Rozendo Advocacia"
                className="h-auto w-full max-w-[min(92vw,420px)] object-contain object-center"
              />
            </div>

            <div className="flex min-h-[200px] flex-col justify-center space-y-6 lg:min-h-[220px]">
              <h4 className="text-white font-serif text-lg tracking-wider uppercase">Contato</h4>
              <ul className="space-y-4 text-sm font-light">
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary border border-white/5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>(92) 9 8529-0505</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary border border-white/5">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <span>@rozendo.advocacia</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary border border-white/5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>joaorozendo.adv@gmail.com</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary border border-white/5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Rua André Araújo, 97, edifício fórum business, bairro Adrianópolis</span>
                </li>
              </ul>
            </div>

            <div className="relative h-[200px] w-full max-w-[240px] justify-self-center self-center overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2 md:col-span-2 md:h-[220px] md:max-w-[280px] lg:col-span-1 lg:h-[250px] lg:max-w-[280px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9525611711492!2d-60.00974619999999!3d-3.1072515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c052db993bf1f%3A0x19fb39ba9fe7a612!2sF%C3%B3rum%20Business%20Center%20Manaus!5e0!3m2!1sen!2sbr!4v1775772195850!5m2!1sen!2sbr"
                title="Fórum Business Center Manaus — localização do escritório"
                className="absolute inset-0 h-full w-full rounded-lg border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light tracking-wide">
            <p>© {new Date().getFullYear()} ROZENDO ADVOCACIA - TODOS OS DIREITOS RESERVADOS.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">POLÍTICA DE PRIVACIDADE</a>
              <a href="#" className="hover:text-primary transition-colors">TERMOS DE USO</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}