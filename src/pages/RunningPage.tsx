import { ContactSection } from "../components/ContactSection";
import CourseSection from "../components/CourseSection";
import EventInfoSection from "../components/EventInfoSection";
import { FaqSection } from "../components/FaqSection";
import { Hero } from "../components/HeroImage";
import Navbar from "../components/NavBar";
import RaceDescriptionSection from "../components/RaceDescriptionSection";
import ResultsPreviewTable from "../components/ResultsPreviewTable";
import RunningGallerySection from "../components/RunningGallerySection";

export const RunnnigPage = () => {
  return (
    <>
      <Navbar
        field1="La Carrera"
        field2="El Recorrido"
        field3="Resultados"
        field4="Contacto"
      />
      <Hero
        src="/assets/running-page/pexels-runffwpu-2526878.jpg"
        title="ARREDONDO"
        subtitle="TRAIL RACE"
        btnText="Incribirme"
      />

      <RaceDescriptionSection
        title="Una carrera pensada para disfrutar cada kilómetro"
        paragraphs={[
          "Te invitamos a vivir una experiencia única en contacto con la naturaleza, recorriendo senderos, caminos rurales y paisajes que hacen de esta carrera un evento inolvidable.",
          "La propuesta está pensada tanto para quienes se inician en el running como para corredores experimentados que buscan un nuevo desafío.",
          "Más que una competencia, es un encuentro entre personas que comparten la pasión por correr, superarse y disfrutar del camino.",
        ]}
      />

      <EventInfoSection
        title="Distancias para todos los niveles"
        date="20 de Septiembre 2026"
        location="San Antonio de Arredondo, Córdoba"
        distances={["6K", "12K", "21K"]}
      />

      <CourseSection
        description="El circuito recorre senderos serranos, caminos de tierra y sectores técnicos con piedra suelta. Las vistas panorámicas acompañan gran parte del trayecto, ofreciendo una experiencia única en plena naturaleza. Es un recorrido variado que combina tramos corribles con sectores más desafiantes."
        stats={[
          { label: "Terreno", value: "Senderos y montaña" },
          { label: "Desnivel positivo", value: "450 m+" },
          { label: "Dificultad", value: "Media / Alta" },
          { label: "Altura máxima", value: "1.250 msnm" },
        ]}
      />

      <RunningGallerySection
        images={[
          "/assets/running-page/pexels-runffwpu-1571939.jpg",
          "/assets/running-page/pexels-cristian-camilo-estrada-2152272341-32132278.jpg",
          "/assets/running-page/pexels-runffwpu-18408904.jpg",
          "/assets/running-page/pexels-runffwpu-35599349.jpg",
          "/assets/running-page/pexels-runffwpu-35599354.jpg",
          "/assets/running-page/pexels-runffwpu-9790259.jpg",
        ]}
      />

      <FaqSection
        items={[
          {
            question: "¿El circuito de 6K tiene partes de calle?",
            answer:
              "No, el recorrido de 6K es 100% trail. Se desarrolla por senderos naturales, caminos de tierra y sectores de monte. Puede haber tramos técnicos, por lo que recomendamos calzado con buen agarre.",
          },
          {
            question: "¿Pueden participar principiantes?",
            answer:
              "¡Sí! La distancia de 6K está pensada para quienes se inician en el trail running, mientras que los 12K y 21K representan un mayor desafío físico y técnico. Cada corredor puede elegir según su nivel y experiencia.",
          },
          {
            question: "¿Habrá puestos de hidratación durante la carrera?",
            answer:
              "Sí, habrá puestos de hidratación distribuidos en puntos estratégicos del circuito, especialmente en las distancias de 12K y 21K. De todos modos, recomendamos llevar hidratación propia.",
          },
          {
            question: "¿Qué tipo de terreno tiene la carrera?",
            answer:
              "El circuito combina senderos de tierra, sectores con desnivel, partes con piedra suelta y zonas de monte. Es una experiencia de trail real, por lo que sugerimos entrenar en superficies similares previamente.",
          },
        ]}
      />

      <ResultsPreviewTable />

      <ContactSection
        title="¿Listos para correr?"
        subtitle="Escriban para consultas, dudas o recibir más información."
        links={[
          { label: "WHATSAPP", href: "https://wa.me/549XXXXXXXXXX" },
          { label: "INSTAGRAM", href: "https://instagram.com/usuario" },
          { label: "EMAIL", href: "mailto:mail@carrera.com" },
        ]}
      />
    </>
  );
};
