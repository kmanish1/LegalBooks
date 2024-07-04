import LoginForm from "@/components/LoginForm";
import LegalConsultationForm from "@/components/LegalConsultationForm";

export default function Forms() {
  return (
    <div>
      <div className="flex my-10 justify-center items-center flex-wrap mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <LoginForm />
        <LegalConsultationForm />
      </div>
    </div>
  );
}
