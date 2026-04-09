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

// Image imports
import heroBg from "@/assets/images/bg-advogado.png";
import lawyerImg from "@/assets/images/Rozendo.jpeg";
import caseFlight from "@/assets/images/case-flight.jpg";
import caseDoc from "@/assets/images/case-document.jpg";
import practiceCivil from "@/assets/images/practice-civil.jpg";
import practiceFamily from "@/assets/images/practice-family.jpg";
import practiceLabor from "@/assets/images/practice-labor.jpg";
import practiceRealEstate from "@/assets/images/practice-realestate.jpg";
import practiceSocial from "@/assets/images/practice-social.jpg";
import avatar1 from "@/assets/images/avatar-1.jpg";
import avatar2 from "@/assets/images/avatar-2.jpg";

const practiceCriminalImg =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200";
const practiceBusinessImg =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200";

const practiceAreas = [
  {
    title: "Direito do consumidor",
    desc: "Defesa em relações de consumo, vícios, cobranças indevidas e práticas abusivas.",
    img: caseDoc,
    detail:
      "O Código de Defesa do Consumidor (CDC) garante equilíbrio entre consumidores e fornecedores. Atuamos na análise de contratos de adesão, rescisão de serviços, negativação indevida, propaganda enganosa, produtos com vício e cobranças abusivas. Buscamos reparação por danos materiais e morais e acompanhamento em órgãos de defesa do consumidor e no Judiciário, priorizando soluções ágeis e a recuperação dos seus direitos.",
  },
  {
    title: "Direito Trabalhista",
    desc: "Rescisões, horas extras, assédio moral, vínculos e negociações com empregadores.",
    img: practiceLabor,
    detail:
      "O Direito do Trabalho assegura dignidade na relação empregado–empregador. Prestamos consultoria e representação em rescisões contratuais, verbas rescisórias, horas extras não pagas, adicional de insalubridade ou periculosidade, assédio moral e sexual, reconhecimento de vínculo empregatício e acordos trabalhistas. Nosso objetivo é garantir o cumprimento da CLT e normas coletivas, com estratégia adequada a cada fase do conflito.",
  },
  {
    title: "Direito Familiar",
    desc: "Divórcio, pensão, guarda, união estável e mediação em conflitos familiares.",
    img: practiceFamily,
    detail:
      "As questões familiares exigem técnica e sensibilidade guiadas pelo melhor interesse da família e das crianças. Atuamos em divórcios consensuais ou litigiosos, pensão alimentícia, regulamentação de guarda e convivência, investigação de paternidade, união estável e mediação familiar. Buscamos acordos estáveis sempre que possível e, quando necessário, defesa firme em juízo para proteger vínculos, patrimônio e o bem-estar de todos os envolvidos.",
  },
  {
    title: "Direito Civil",
    desc: "Contratos, indenizações, responsabilidade civil e relações patrimoniais entre particulares.",
    img: practiceCivil,
    detail:
      "O Direito Civil regula as relações mais fundamentais da nossa vida, e ter um suporte jurídico estratégico é indispensável para proteger seu patrimônio e sua dignidade. Nossa atuação abrange desde a elaboração e análise minuciosa de contratos, garantindo segurança jurídica em todos os seus negócios, até a defesa rigorosa em casos de responsabilidade civil. Atuamos de forma incisiva no contencioso cível para buscar indenizações e reparações justas por danos materiais e morais, assegurando que abusos e prejuízos não fiquem impunes. Seja na prevenção de conflitos ou na representação judicial, nosso compromisso é oferecer soluções jurídicas precisas para que você tenha a tranquilidade de saber que seus direitos estão em boas mãos.",
  },
  {
    title: "Direito Criminal",
    desc: "Defesa em inquéritos e processos penais, liberdade e garantias do acusado.",
    img: practiceCriminalImg,
    detail:
      "A defesa criminal exige rapidez, estratégia e profundo respeito às garantias constitucionais. Prestamos assistência em inquéritos policiais, audiências de custódia, habeas corpus, defesas e recursos em processos penais. Trabalhamos para evitar constrangimentos ilegais, assegurar o contraditório e a ampla defesa e buscar soluções que preservem liberdade, honra e patrimônio, sempre em conformidade com o ordenamento penal e processual penal.",
  },
  {
    title: "Direito empresarial",
    desc: "Sociedades, contratos comerciais, compliance e suporte jurídico ao negócio.",
    img: practiceBusinessImg,
    detail:
      "O Direito Empresarial sustenta a governança e o crescimento seguro das empresas. Oferecemos assessoria na constituição e reorganização societária, elaboração e revisão de contratos comerciais, pareceres de risco, acordos com parceiros e fornecedores e orientação em litígios empresariais. Integramos visão jurídica à estratégia do negócio para reduzir passivos, cumprir obrigações regulatórias e proteger sócios e investidores.",
  },
  {
    title: "Direito Condominial",
    desc: "Assembleias, taxas, conflitos entre moradores e convenção do condomínio.",
    img: practiceRealEstate,
    detail:
      "O condomínio envolve direitos e deveres coletivos que precisam estar alinhados à Lei e à convenção. Atuamos em interpretação de convenções e regimentos internos, cobrança e contestação de taxas condominiais, assembleias, conflitos entre moradores, obras irregulares e responsabilidade do síndico. Buscamos soluções que preservem a convivência e o patrimônio comum, seja por mediação ou pela defesa do condomínio ou do condômino em juízo.",
  },
  {
    title: "Direito Previdenciário",
    desc: "Aposentadorias, benefícios do INSS, revisões e planejamento previdenciário.",
    img: practiceSocial,
    detail:
      "O Direito Previdenciário assegura o acesso justo aos benefícios da Previdência Social. Acompanhamos requerimentos administrativos no INSS, recursos e ações judiciais para aposentadorias (por idade, tempo de contribuição, especial etc.), auxílio-doença, BPC/LOAS, pensão por morte e revisões de benefícios. Também orientamos no planejamento previdenciário para antecipar requisitos e aumentar a segurança da sua renda futura.",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
      
      {/* 1. Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer">
            <ShieldCheck className="w-8 h-8 text-primary" />
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-wider leading-none text-white">ROZENDO</span>
              <span className="text-[0.6rem] uppercase tracking-[0.2em] text-primary">Advogados & Associados</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {["Casos Frequentes", "Serviços", "Sobre", "Avaliações"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium text-white/70 hover:text-primary transition-colors tracking-wide"
              >
                {item}
              </a>
            ))}
          </nav>
          
          <Button variant="granite" className="hidden md:flex rounded-none uppercase tracking-widest text-xs h-10 px-6">
            Fale Conosco
          </Button>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Fundo jurídico" 
            className="w-full h-full object-cover object-center opacity-50 blur-[0.5px] grayscale-[20%] contrast-110 brightness-85"
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
            <div className="relative mx-auto max-w-[400px]">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
              <img 
                src={lawyerImg} 
                alt="Advogado Principal" 
                className="relative z-10 w-full object-cover aspect-[4/5] rounded-tl-[80px] rounded-br-[80px] border border-white/10 shadow-2xl grayscale-[20%] contrast-125 brightness-90"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 z-20 glass-panel p-4 rounded-lg shadow-xl border-l-2 border-primary max-w-[200px]">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold tracking-wider text-white/90">ADVOGADO ONLINE</span>
                </div>
                <p className="text-[10px] text-white/60">Disponível para consultoria imediata.</p>
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
                variant="granite"
                className="h-14 px-10 rounded-md border-none uppercase tracking-widest font-semibold text-sm group hover:shadow-xl hover:shadow-amber-500/40 transition-shadow"
              >
                Entrar em Contato
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Casos Frequentes */}
      <section id="casos-frequentes" className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Especialidades</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-white">CASOS FREQUENTES DO ESCRITÓRIO</h3>
            <div className="w-16 h-px bg-primary mx-auto mt-6" />
          </div>

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
                { title: "Indenizações por Voo", img: caseFlight, desc: "Atrasos, cancelamentos e extravio de bagagem." }, // Duplicated for carousel demo
                { title: "Inscrição Indevida", img: caseDoc, desc: "Nome negativado indevidamente no SPC/Serasa." },
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
                      <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white hover:text-black rounded-none">
                        Mais Informações
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex border-white/20 hover:bg-primary hover:text-primary-foreground hover:border-primary bg-black/50 text-white left-[-3rem]" />
            <CarouselNext className="hidden md:flex border-white/20 hover:bg-primary hover:text-primary-foreground hover:border-primary bg-black/50 text-white right-[-3rem]" />
          </Carousel>
        </div>
      </section>

      {/* 4. Nossa Área de Atuação */}
      <section id="serviços" className="py-24 bg-white text-zinc-950">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-sm uppercase tracking-[0.3em] text-[#B8860B] mb-4 font-bold">Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-black">NOSSA ÁREA DE ATUAÇÃO</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
                      <p className="text-sm leading-relaxed text-muted-foreground">{practice.detail}</p>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          <div className="text-center">
            <Button variant="granite" className="h-14 px-10 rounded-none uppercase tracking-widest font-semibold text-sm">
              Peça mais informações
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Sobre o Escritório */}
      <section id="sobre" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
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

              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 rounded-none uppercase tracking-widest text-xs h-12 px-8 mt-4">
                Fale Conosco
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 transform translate-x-4 translate-y-4 rounded-sm" />
              <img 
                src={lawyerImg} 
                alt="Equipe Rozendo Advocacia" 
                className="relative z-10 w-full h-auto aspect-square object-cover object-top grayscale-[30%] contrast-125"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Prova Social */}
      <section id="avaliações" className="py-24 bg-[#FAF8F5] text-zinc-950 border-t border-zinc-200">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-serif text-zinc-900 text-left">
              O que nossos clientes estão falando
            </h2>
          </div>

          <div className="mb-16">
            <div className="mx-auto max-w-4xl rounded-3xl bg-[#050814] border border-black/70 shadow-[0_18px_60px_rgba(0,0,0,0.7)] px-6 py-6 md:px-10 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="flex-1">
                <p className="text-3xl md:text-4xl font-serif text-primary font-semibold leading-none">
                  +15 <span className="text-lg md:text-xl align-top">MIL</span>
                </p>
                <p className="mt-2 text-xs md:text-sm text-white/70 uppercase tracking-[0.25em]">
                  Clientes atendidos
                </p>
              </div>

              <div className="h-px w-16 md:h-16 md:w-px bg-white/15 md:mx-4" />

              <div className="flex-1">
                <p className="text-3xl md:text-4xl font-serif text-primary font-semibold leading-none">
                  +25 <span className="text-lg md:text-xl align-top">ANOS</span>
                </p>
                <p className="mt-2 text-xs md:text-sm text-white/70 uppercase tracking-[0.25em]">
                  de experiência
                </p>
              </div>

              <div className="h-px w-16 md:h-16 md:w-px bg-white/15 md:mx-4" />

              <div className="flex-1">
                <p className="text-3xl md:text-4xl font-serif text-primary font-semibold leading-none">
                  +5 <span className="text-lg md:text-xl align-top">MIL</span>
                </p>
                <p className="mt-2 text-xs md:text-sm text-white/70 uppercase tracking-[0.25em]">
                  Casos defendidos
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-16">
            <div className="text-center md:text-left bg-white p-6 rounded-xl shadow-sm border border-zinc-100 flex-shrink-0">
              <h4 className="font-bold text-xl mb-2">EXCELENTE</h4>
              <div className="flex gap-1 justify-center md:justify-start text-[#FBBC04] mb-2">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-sm text-zinc-600">Com base em <strong>2 avaliações</strong></p>
              <div className="mt-4 flex items-center justify-center md:justify-start gap-2">
                <span className="font-bold text-xl text-blue-500">G</span>
                <span className="font-bold text-xl text-red-500">o</span>
                <span className="font-bold text-xl text-yellow-500">o</span>
                <span className="font-bold text-xl text-blue-500">g</span>
                <span className="font-bold text-xl text-green-500">l</span>
                <span className="font-bold text-xl text-red-500">e</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 w-full">
              {[
                { name: "Amanda Silva", time: "2 meses atrás", text: "Profissionais excelentes, super indico. Resolveram meu problema com agilidade.", avatar: avatar1 },
                { name: "Carlos Oliveira", time: "5 meses atrás", text: "Profissionais qualificados em consultoria extracontratual, muito atenciosos.", avatar: avatar2 }
              ].map((review, i) => (
                <Card key={i} className="bg-white border-zinc-100 shadow-sm rounded-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover bg-zinc-200" />
                      <div>
                        <h5 className="font-bold text-sm">{review.name}</h5>
                        <p className="text-xs text-zinc-500">{review.time}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 text-[#FBBC04] mb-3">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-zinc-700 text-sm font-light">"{review.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="flex justify-end">
             <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-xs font-medium border border-green-200">
               <ShieldCheck className="w-4 h-4" />
               Verificações Realizadas
             </div>
          </div>
        </div>
      </section>

      {/* 7. Rodapé */}
      <footer className="bg-[#050505] text-white/70 py-16 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-primary" />
                <div className="flex flex-col">
                  <span className="font-serif text-2xl tracking-wider leading-none text-white">ROZENDO</span>
                  <span className="text-[0.6rem] uppercase tracking-[0.2em] text-primary">Advogados & Associados</span>
                </div>
              </div>
              <p className="text-sm font-light max-w-sm">
                Comprometimento, ética e resultados na busca pelos seus direitos.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-white font-serif text-lg tracking-wider uppercase mb-6">Contato</h4>
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

            <div className="relative bg-white/5 p-2 rounded-xl border border-white/10 min-h-[240px] h-[280px] md:h-[300px] overflow-hidden">
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