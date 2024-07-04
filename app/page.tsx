import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/UI/Hero";
import Forms from "@/UI/Forms";
import LegalConsultationForm from "@/components/LegalConsultationForm";
import LoginForm from "@/components/LoginForm";
import ForLawyers from "@/UI/ForLawyers";
import Template from "@/UI/Template";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Forms />
      <Template />
      <ForLawyers />
    </div>
  );
}
