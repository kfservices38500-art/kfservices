import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const routeNames: Record<string, string> = {
  "a-propos": "À propos",
  "services": "Services",
  "realisations": "Réalisations",
  "contact": "Contact",
  "mentions-legales": "Mentions légales",
  "politique-confidentialite": "Politique de confidentialité",
};

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null;

  return (
    <nav aria-label="Fil d'Ariane" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
      <ol className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap" itemScope itemType="https://schema.org/BreadcrumbList">
        <li className="flex items-center gap-1.5" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1" itemProp="item">
            <Home className="w-3.5 h-3.5" />
            <span itemProp="name">Accueil</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        {segments.map((seg, i) => {
          const path = "/" + segments.slice(0, i + 1).join("/");
          const name = routeNames[seg] || seg;
          const isLast = i === segments.length - 1;
          return (
            <li key={path} className="flex items-center gap-1.5" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <ChevronRight className="w-3.5 h-3.5 text-border" />
              {isLast ? (
                <span className="text-foreground font-medium" itemProp="name">{name}</span>
              ) : (
                <Link to={path} className="hover:text-primary transition-colors" itemProp="item">
                  <span itemProp="name">{name}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(i + 2)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
