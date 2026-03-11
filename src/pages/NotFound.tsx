import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Hammer, Camera, Phone, ArrowRight } from "lucide-react";
import KFButton from "../components/ui/KFButton";

const suggestions = [
  { to: "/", label: "Accueil", icon: Home, desc: "Retour à la page principale" },
  { to: "/services", label: "Services", icon: Hammer, desc: "Nos prestations BTP" },
  { to: "/realisations", label: "Réalisations", icon: Camera, desc: "Nos chantiers terminés" },
  { to: "/contact", label: "Contact", icon: Phone, desc: "Demander un devis gratuit" },
];

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-muted">
      <motion.div
        className="text-center px-4 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-7xl md:text-9xl font-black gradient-red-text mb-4">404</h1>
        <p className="text-xl md:text-2xl text-foreground font-semibold mb-2">
          Page introuvable
        </p>
        <p className="text-muted-foreground mb-10">
          Cette page n'existe pas ou a été déplacée. Voici quelques liens utiles :
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {suggestions.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-md transition-all"
            >
              <s.icon className="w-6 h-6 text-primary" />
              <span className="font-semibold text-sm">{s.label}</span>
              <span className="text-xs text-muted-foreground">{s.desc}</span>
            </Link>
          ))}
        </div>

        <KFButton to="/" variant="gradient">
          <span className="flex items-center gap-2">
            Retour à l'accueil <ArrowRight className="w-4 h-4" />
          </span>
        </KFButton>
      </motion.div>
    </div>
  );
};

export default NotFound;
