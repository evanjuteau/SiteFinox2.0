export type ProjectKey = "maison" | "entreprise" | "famille" | "retraite";
export type IconKey =
  | "home"
  | "building"
  | "family"
  | "sunset"
  | "target"
  | "coins"
  | "handshake"
  | "bank"
  | "shield"
  | "scale"
  | "key"
  | "document"
  | "columns"
  | "chart"
  | "refresh"
  | "heart"
  | "baby"
  | "scroll"
  | "trendUp"
  | "calculator"
  | "calendar"
  | "gem";

export interface Step {
  num: string;
  icon: IconKey;
  title: string;
  desc: string;
  badge: string;
}

export interface ProjectConfig {
  icon: IconKey;
  label: string;
  steps: Step[];
  floatingMsg: string;
  floatingName: string;
  cta: {
    sub: string;
    mainBtn: string;
    contactName: string;
    contactTitle: string;
  };
}

export const projectKeys = [
  "maison",
  "entreprise",
  "famille",
  "retraite",
] as const satisfies ProjectKey[];

export const projects: Record<ProjectKey, ProjectConfig> = {
  maison: {
    icon: "home",
    label: "Acheter une maison",
    steps: [
      { num: "01", icon: "target", title: "Plan & mise de fonds", desc: "Portrait financier complet et plan d'épargne avec date cible réaliste.", badge: "Finox pilote" },
      { num: "02", icon: "coins", title: "CELIAPP & REER", desc: "Mise de fonds optimisée avec avantages fiscaux maximum.", badge: "Finox planifie" },
      { num: "03", icon: "handshake", title: "Courtier immobilier", desc: "Référence de confiance + pré-approbation hypothécaire préparée.", badge: "Finox réfère" },
      { num: "04", icon: "bank", title: "Prêt hypothécaire", desc: "Dany magasine parmi +50 prêteurs. Pas juste ta banque.", badge: "Dany négocie" },
      { num: "05", icon: "shield", title: "Assurance hypothécaire", desc: "Couverture indépendante — moins chère et plus complète que la banque.", badge: "Finox protège" },
      { num: "06", icon: "scale", title: "Notaire & signature", desc: "Coordination totale. Rien ne tombe entre deux chaises.", badge: "Finox coordonne" },
      { num: "07", icon: "key", title: "Propriétaire — et après", desc: "Révision annuelle et optimisation continue. On reste là.", badge: "Finox reste" },
    ],
    floatingMsg: "Dany peut te rappeler cette semaine pour ta pré-approbation hypothécaire.",
    floatingName: "Dany Michaud — Financement",
    cta: {
      sub: "On commence par comprendre où tu en es avec ta mise de fonds — puis on construit le reste.",
      mainBtn: "Parler à Dany — hypothèques",
      contactName: "Dany Michaud",
      contactTitle: "Associé & Courtier Hypothécaire",
    },
  },
  entreprise: {
    icon: "building",
    label: "Lancer mon entreprise",
    steps: [
      { num: "01", icon: "document", title: "Structure juridique", desc: "Sole prop, inc, holdco — on analyse la meilleure option avec toi.", badge: "Finox conseille" },
      { num: "02", icon: "columns", title: "Incorporation", desc: "Référence à nos partenaires juridiques pour statuts et mise en place.", badge: "Finox réfère" },
      { num: "03", icon: "handshake", title: "Convention actionnaires", desc: "On coordonne l'assurance clé-homme liée à la convention.", badge: "Finox structure" },
      { num: "04", icon: "shield", title: "Assurance corporative", desc: "Invalidité, vie participante, assurance collective employés.", badge: "Finox protège" },
      { num: "05", icon: "chart", title: "Optimisation fiscale", desc: "Coordination CPA pour maximiser chaque dollar dans la société.", badge: "Finox optimise" },
      { num: "06", icon: "refresh", title: "Croissance & révisions", desc: "On grandit avec toi. Révisions annuelles proactives.", badge: "Finox reste" },
    ],
    floatingMsg: "Evan peut te parler de la bonne structure d'assurance corporative pour ton projet.",
    floatingName: "Evan Juteau Lapierre — Assurance",
    cta: {
      sub: "On commence par la structure — ensuite on construit la couverture qui protège ton actif le plus précieux : toi.",
      mainBtn: "Parler à Evan — corporatif",
      contactName: "Evan Juteau Lapierre",
      contactTitle: "Associé & Courtier Senior",
    },
  },
  famille: {
    icon: "family",
    label: "Fonder une famille",
    steps: [
      { num: "01", icon: "heart", title: "Bilan du couple", desc: "Portrait financier à deux — dettes, objectifs, protection actuelle.", badge: "Finox évalue" },
      { num: "02", icon: "shield", title: "Assurance vie & invalidité", desc: "Les bonnes couvertures pour protéger ceux que tu aimes.", badge: "Finox protège" },
      { num: "03", icon: "baby", title: "REEE & arrivée de bébé", desc: "Plan REEE dès la naissance — les subventions ne s'attendent pas.", badge: "Finox planifie" },
      { num: "04", icon: "home", title: "Projet immobilier", desc: "CELIAPP, mise de fonds, hypothèque coordonnés avec Dany.", badge: "Dany coordonne" },
      { num: "05", icon: "scroll", title: "Testament & tutelle", desc: "Notaire partenaire pour sécuriser l'avenir de tes enfants.", badge: "Finox réfère" },
      { num: "06", icon: "trendUp", title: "Épargne long terme", desc: "REER, CELI — on pense à demain pendant que tu profites d'aujourd'hui.", badge: "Finox projette" },
    ],
    floatingMsg: "Evan peut passer en revue avec toi les protections essentielles pour ta famille.",
    floatingName: "Evan Juteau Lapierre — Assurance",
    cta: {
      sub: "Une famille, ça se protège. On fait le tour ensemble — couvertures, REEE, testament — dans la même conversation.",
      mainBtn: "Parler à Evan — assurance famille",
      contactName: "Evan Juteau Lapierre",
      contactTitle: "Assurance & Protection famille",
    },
  },
  retraite: {
    icon: "sunset",
    label: "Préparer ma retraite",
    steps: [
      { num: "01", icon: "calculator", title: "Bilan patrimonial", desc: "REER, CELI, régimes, actifs, dettes — portrait complet.", badge: "Finox évalue" },
      { num: "02", icon: "calendar", title: "Date de retraite réaliste", desc: "Calcul basé sur ton train de vie souhaité, pas des moyennes.", badge: "Étienne planifie" },
      { num: "03", icon: "gem", title: "Optimisation & placement", desc: "Maximiser tes épargnes et réduire l'impôt maintenant et à la retraite.", badge: "Finox optimise" },
      { num: "04", icon: "sunset", title: "Décaissement & succession", desc: "Plan de décaissement optimal + coordination successorale complète.", badge: "Finox protège" },
    ],
    floatingMsg: "Étienne peut calculer avec toi une date de retraite réaliste basée sur tes objectifs.",
    floatingName: "Étienne Lejeune — Planification Financière",
    cta: {
      sub: "La retraite, ça se prépare longtemps d'avance. Étienne peut t'aider à construire un plan concret avec une date réelle.",
      mainBtn: "Parler à Étienne — planification",
      contactName: "Étienne Lejeune",
      contactTitle: "Directeur Développement & Planification",
    },
  },
};

export const defaultCtaContent = {
  sub: "Premier échange confidentiel, sans frais, sans engagement. On voit ensemble si on est le bon fit — et honnêtement, on va te le dire si on l'est pas.",
  mainBtn: "Écrire à l'équipe",
  contactName: "Evan Juteau Lapierre",
  contactTitle: "Associé & Courtier Senior",
};

export function isProjectKey(value: string | null): value is ProjectKey {
  return value !== null && Object.prototype.hasOwnProperty.call(projects, value);
}
