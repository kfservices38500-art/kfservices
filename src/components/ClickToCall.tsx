import { Phone } from "lucide-react";

const ClickToCall = () => {
  return (
    <a
      href="tel:+33669209788"
      className="fixed bottom-24 right-4 z-40 md:hidden w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
      aria-label="Appeler KF Services"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};

export default ClickToCall;
