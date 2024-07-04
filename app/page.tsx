import Navbar from "@/components/Navbar";
import Hero from "@/UI/Hero";
import Forms from "@/UI/Forms";
import ForLawyers from "@/UI/ForLawyers";
import Template from "@/UI/Template";
import Lawyer from "@/UI/Lawyers";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Forms />
      <Template />
      <Lawyer />
      <ForLawyers />
    </div>
  );
}
