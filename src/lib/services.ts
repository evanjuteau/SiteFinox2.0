import type { IllustrationKey } from "@/components/ui/ServiceIllustrations";

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceDetail {
  slug: IllustrationKey;
  num: string;
  name: string;
  short: string;
  tags: string[];
  hero: {
    eyebrow: string;
    title: string;
    titleEm: string;
    intro: string;
  };
  whenToConsult: { title: string; desc: string }[];
  finoxDifference: { title: string; desc: string }[];
  faq: ServiceFAQ[];
  cta: {
    contactName: string;
    contactRole: string;
    line: string;
    btn: string;
  };
}

export const services: ServiceDetail[] = [
  {
    slug: "assurance-vie",
    num: "01",
    name: "Assurance vie & invalidité",
    short: "Protéger ce que tu as bâti — et ceux que tu aimes.",
    tags: ["Individuel", "Corporatif", "Clé-homme"],
    hero: {
      eyebrow: "Service · 01",
      title: "Assurance vie",
      titleEm: "& invalidité",
      intro:
        "L'argent ne remplace pas une personne. Mais il peut empêcher ta famille de tout perdre quand tu n'es plus là pour ramener un chèque. C'est ça, le vrai rôle de l'assurance vie.",
    },
    whenToConsult: [
      {
        title: "T'as une hypothèque ou des dettes",
        desc: "Si tu disparais demain, est-ce que ton conjoint·e peut garder la maison? L'assurance vie répond à cette question concrète.",
      },
      {
        title: "T'as des enfants ou des personnes à charge",
        desc: "REEE, frais de garderie, université dans 18 ans, logement, santé — tout ça continue sans toi. Une couverture suffisante évite que tes proches improvisent.",
      },
      {
        title: "T'es entrepreneur ou actionnaire",
        desc: "Convention d'actionnaires, assurance clé-homme, vie participante corporative — l'assurance devient un outil de continuité d'affaires.",
      },
    ],
    finoxDifference: [
      {
        title: "Indépendance totale",
        desc: "On magasine parmi +50 assureurs. Tu n'as jamais le produit d'une seule banque par défaut — tu as le bon produit pour ta situation.",
      },
      {
        title: "Bilan complet, pas juste une vente",
        desc: "On commence par comprendre ton portrait global : revenus, dettes, objectifs, fiscalité. La couverture découle du diagnostic — pas l'inverse.",
      },
      {
        title: "Révision proactive",
        desc: "Ta vie change : naissance, achat de maison, incorporation, transition de carrière. On t'appelle chaque année pour valider que ta couverture suit.",
      },
    ],
    faq: [
      {
        q: "Temporaire ou permanente — laquelle me faut?",
        a: "Ça dépend de ton horizon. Une temporaire 20 ou 30 ans couvre une dette ou une période précise (élever des enfants, payer une hypothèque). Une permanente devient un actif transmissible et peut être un outil successoral. Souvent on combine les deux.",
      },
      {
        q: "Pourquoi pas l'assurance offerte par la banque?",
        a: "L'assurance hypothécaire bancaire protège la banque — pas toi. Si tu deviens invalide, la banque reçoit l'argent, pas ta famille. Une assurance indépendante, c'est toi qui décides quoi faire avec le montant. C'est aussi souvent moins cher.",
      },
      {
        q: "Combien d'assurance je devrais avoir?",
        a: "La règle de pouce — 10 fois ton salaire annuel — est trop simpliste. On calcule un montant réel basé sur tes dettes, le coût de remplacement de ton revenu, le coût d'éducation des enfants et tes objectifs successoraux.",
      },
      {
        q: "L'assurance invalidité, c'est vraiment nécessaire?",
        a: "Statistiquement, tu as plus de chances de devenir invalide que de mourir avant 65 ans. Pour un travailleur autonome, c'est non négociable. Pour un salarié, ça dépend de ce que ton employeur offre déjà.",
      },
    ],
    cta: {
      contactName: "Evan Juteau Lapierre",
      contactRole: "Associé & Courtier Senior",
      line: "On commence par un appel sans frais. 30 minutes pour comprendre où tu en es.",
      btn: "Parler à Evan — assurance",
    },
  },
  {
    slug: "assurance-collective",
    num: "02",
    name: "Assurance collective",
    short: "Un avantage qui retient tes employés sans casser ta marge.",
    tags: ["PME", "Groupes", "Travailleurs autonomes"],
    hero: {
      eyebrow: "Service · 02",
      title: "Assurance",
      titleEm: "collective",
      intro:
        "Tes meilleurs employés ne restent pas pour le salaire. Ils restent pour ce qui vient avec — santé, dentaire, invalidité, vie. Une assurance collective bien pensée, c'est un outil de rétention puissant et déductible.",
    },
    whenToConsult: [
      {
        title: "T'as 3 employés ou plus",
        desc: "À partir de 3 personnes, on peut déjà te bâtir un régime collectif intéressant. Pas besoin d'avoir 50 employés.",
      },
      {
        title: "Tu veux retenir tes talents",
        desc: "Dans un marché tendu, l'assurance collective est devenue un standard. Sans ça, tu perds des candidats avant même la première entrevue.",
      },
      {
        title: "Tu veux optimiser fiscalement",
        desc: "Les primes sont déductibles pour l'entreprise. Les prestations santé et dentaire sont non imposables pour l'employé. C'est un des outils de rémunération les plus efficaces fiscalement.",
      },
    ],
    finoxDifference: [
      {
        title: "Magasinage annuel automatique",
        desc: "On compare ton régime aux options du marché chaque année. Si on peut faire mieux pour le même prix, on change. Si on doit garder le même fournisseur, on négocie.",
      },
      {
        title: "Accompagnement RH",
        desc: "On te livre les outils de communication employés (livret, séances d'info, FAQ). Ton régime se vend tout seul aux candidats.",
      },
      {
        title: "Pas de frais cachés",
        desc: "On t'explique exactement comment on est rémunérés. Tu sais combien ça coûte à l'assureur, combien tu paies, et combien on prend.",
      },
    ],
    faq: [
      {
        q: "Combien ça coûte pour 5 employés?",
        a: "Très variable selon l'âge moyen et le niveau de couverture. Mais pour donner un ordre de grandeur : un régime de base (santé + dentaire + invalidité courte) tourne souvent autour de 150-250 $/mois par employé. On peut bâtir plus simple ou plus complet.",
      },
      {
        q: "Est-ce que je dois payer 100 % de la prime?",
        a: "Non. C'est courant que l'employeur paie 50-70 % et l'employé le reste via déduction sur la paie. Tu choisis le partage qui fait du sens financièrement.",
      },
      {
        q: "Et si un employé a déjà une condition médicale?",
        a: "En collectif, il n'y a généralement pas de questions médicales individuelles à l'inscription initiale. C'est un des grands avantages versus une assurance individuelle.",
      },
      {
        q: "Je suis travailleur autonome — j'ai des options?",
        a: "Oui — il existe des régimes collectifs pour solos via certaines associations professionnelles. On te dit lesquels valent la peine selon ta profession.",
      },
    ],
    cta: {
      contactName: "Evan Juteau Lapierre",
      contactRole: "Spécialiste assurance corporative",
      line: "On audite ton régime actuel ou on en bâtit un sur mesure. Sans frais initial.",
      btn: "Parler à Evan — collectif",
    },
  },
  {
    slug: "planification-successorale",
    num: "03",
    name: "Planification successorale",
    short: "Transmettre ce que t'as bâti — sans que l'impôt en avale la moitié.",
    tags: ["Fiducie", "Holdco", "Transfert"],
    hero: {
      eyebrow: "Service · 03",
      title: "Planification",
      titleEm: "successorale",
      intro:
        "Au décès, tes biens sont réputés vendus. L'impôt peut prendre 40 %, parfois plus. Une planification successorale bien faite ne consiste pas juste à écrire un testament — elle organise activement la transmission pour que tes héritiers reçoivent ce que tu as voulu leur laisser.",
    },
    whenToConsult: [
      {
        title: "T'as un patrimoine de plus de 500 000 $",
        desc: "À ce niveau, l'impôt successoral devient significatif. La planification permet souvent d'économiser des centaines de milliers de dollars sur la transmission.",
      },
      {
        title: "T'as une entreprise familiale",
        desc: "Le gel successoral, la fiducie familiale, le rachat d'actions — ces outils protègent l'entreprise et minimisent l'impôt au transfert.",
      },
      {
        title: "T'as une famille recomposée",
        desc: "Ex-conjoint·e, enfants de différents lits, beaux-enfants — sans planif claire, ça finit en chicane et en frais juridiques. On clarifie tout d'avance.",
      },
    ],
    finoxDifference: [
      {
        title: "Coordination CPA + notaire",
        desc: "On ne travaille pas en silo. On parle directement à ton comptable et ton notaire pour que tout soit cohérent — testament, fiducie, assurance, fiscalité.",
      },
      {
        title: "Vision long terme",
        desc: "Une planification successorale, c'est pas un événement — c'est un processus qui évolue avec ta vie. On révise chaque 2-3 ans ou à chaque changement majeur.",
      },
      {
        title: "L'assurance comme outil successoral",
        desc: "L'assurance vie permanente bien structurée peut payer l'impôt successoral et transmettre un patrimoine à zéro impôt. On sait quand l'utiliser et quand l'éviter.",
      },
    ],
    faq: [
      {
        q: "C'est quoi une fiducie familiale, vraiment?",
        a: "C'est une structure juridique qui détient des actifs au nom d'un groupe de bénéficiaires. Elle permet de fractionner les revenus entre membres de la famille à des taux d'impôt plus bas et de protéger les actifs des créanciers ou divorces. Pas adaptée à tout le monde — on évalue si ça vaut la peine pour ta situation.",
      },
      {
        q: "Mon testament fait par mon notaire suffit pas?",
        a: "Le testament est essentiel mais il ne fait que transférer les actifs au décès. La planification successorale, c'est ce qui se passe avant le décès pour minimiser l'impact fiscal et structurer la transmission. C'est complémentaire.",
      },
      {
        q: "Le gel successoral — c'est pour qui?",
        a: "Surtout pour les actionnaires d'entreprise. Tu fixes la valeur actuelle de tes actions à toi, et la croissance future revient aux enfants/héritiers. Ça plafonne ton impôt successoral et fait participer la prochaine génération.",
      },
      {
        q: "Combien coûte une planification successorale complète?",
        a: "Variable. La consultation et le plan stratégique avec Finox sont sans frais. Les exécutions (testament, fiducie, assurance) sont facturées par les professionnels concernés. On donne toujours une estimation transparente avant de commencer.",
      },
    ],
    cta: {
      contactName: "Étienne Lejeune",
      contactRole: "Directeur Développement & Planification",
      line: "On commence par un portrait global et on bâtit le plan à partir de là.",
      btn: "Parler à Étienne — succession",
    },
  },
  {
    slug: "investissement",
    num: "04",
    name: "Investissement & épargne",
    short: "Faire travailler ton argent — sans frais qui te grugent en silence.",
    tags: ["REER", "CELI", "CELIAPP"],
    hero: {
      eyebrow: "Service · 04",
      title: "Investissement",
      titleEm: "& épargne",
      intro:
        "Ta banque te vend ses fonds maison. Ils ne sont presque jamais les meilleurs du marché. On t'ouvre l'accès aux vrais portefeuilles — gérés ou indiciels — avec une stratégie fiscale intégrée.",
    },
    whenToConsult: [
      {
        title: "Tu épargnes mais tu sais pas dans quoi",
        desc: "REER, CELI, CELIAPP, REEE, fonds, FNB — c'est confus. On clarifie ce qui est optimal pour ta situation et ton horizon, pas pour la banque.",
      },
      {
        title: "Tu paies des frais sur tes placements",
        desc: "1 % de frais de gestion par année peut sembler peu — sur 30 ans, ça représente près de 30 % de ton portefeuille. On vise des structures à frais réduits.",
      },
      {
        title: "Tu veux optimiser ta fiscalité",
        desc: "Quel compte cotiser en premier? Quel placement dans quel compte? Comment décaisser à la retraite? Ces décisions font la différence sur des centaines de milliers de dollars.",
      },
    ],
    finoxDifference: [
      {
        title: "Architecture ouverte",
        desc: "Pas de fonds maison. On accède au vrai marché — fonds gérés, FNB, portefeuilles modèles, gestion privée. Ton portefeuille est bâti pour toi, pas pour notre P&L.",
      },
      {
        title: "Stratégie fiscale intégrée",
        desc: "Quel placement dans le REER, lequel dans le CELI, lequel dans le compte non enregistré? Cette décision peut t'économiser des milliers de dollars par année. On la fait avec toi.",
      },
      {
        title: "Coordination avec ton CPA",
        desc: "Tes placements ne vivent pas en silo de ta fiscalité. On parle directement à ton comptable pour aligner stratégies de cotisation, décaissement et gain en capital.",
      },
    ],
    faq: [
      {
        q: "REER ou CELI — lequel en premier?",
        a: "Si ton revenu est bas (sous 50 K$), CELI souvent gagnant. Si ton revenu est haut (au-dessus de 100 K$) avec espoir de baisse à la retraite, REER. Si tu épargnes pour une première maison, CELIAPP en priorité absolue. Souvent les trois ensemble, dans le bon ordre.",
      },
      {
        q: "Le CELIAPP, c'est si avantageux que ça?",
        a: "Oui. Combine la déduction fiscale du REER avec la croissance non imposable du CELI, et permet un retrait sans impôt pour acheter une première maison. Si t'as moins de 71 ans et que t'achètes une maison dans 5-15 ans, c'est presque un no-brainer.",
      },
      {
        q: "Vous êtes rémunérés comment?",
        a: "Selon le produit choisi : commissions sur certains fonds gérés, honoraires fixes pour la planification, ou pourcentage d'actifs gérés selon la structure. On te dit toujours exactement combien on est payés avant que tu signes.",
      },
      {
        q: "Vous gérez les portefeuilles vous-mêmes?",
        a: "Non. On structure et planifie, mais la gestion réelle est faite par des gestionnaires de portefeuille agréés (gestionnaires institutionnels ou robo-conseillers selon le profil). On choisit avec toi le bon véhicule.",
      },
    ],
    cta: {
      contactName: "Étienne Lejeune",
      contactRole: "Planification & investissement",
      line: "On audite tes placements actuels et on identifie où l'argent fuit. Sans engagement.",
      btn: "Parler à Étienne — placements",
    },
  },
  {
    slug: "assurance-voyage",
    num: "05",
    name: "Assurance voyage",
    short: "La couverture qui te ramène à la maison — pour vrai.",
    tags: ["Manuvie", "TuGo", "iA"],
    hero: {
      eyebrow: "Service · 05",
      title: "Assurance",
      titleEm: "voyage",
      intro:
        "Une seule visite à l'urgence aux États-Unis peut coûter 50 000 $. La RAMQ couvre une fraction. La carte de crédit ne couvre pas tout. Une vraie assurance voyage te ramène à la maison, sans dette.",
    },
    whenToConsult: [
      {
        title: "Tu pars en voyage — n'importe où hors Québec",
        desc: "Même aller en Ontario, ta RAMQ ne couvre qu'une partie. Les ambulances, le rapatriement, les soins privés — c'est à ta charge sans assurance.",
      },
      {
        title: "Tu voyages plusieurs fois par année",
        desc: "Une assurance annuelle multi-voyages coûte souvent moins cher qu'acheter une couverture par voyage. Mathématiquement gagnant à partir de 2-3 voyages par année.",
      },
      {
        title: "Tu pars en voyage avec condition préexistante",
        desc: "Diabète, hypertension, problèmes cardiaques — la plupart des assurances de carte de crédit excluent ces situations. Une couverture spécialisée existe.",
      },
    ],
    finoxDifference: [
      {
        title: "Comparaison sur les vraies clauses",
        desc: "On regarde au-delà du prix : franchise, plafond, exclusions, conditions préexistantes, sports extrêmes. Le moins cher est rarement le meilleur.",
      },
      {
        title: "Couverture multi-voyages",
        desc: "Si tu voyages souvent, on te trouve une police annuelle qui couvre tous tes voyages — pas besoin d'appeler avant chaque départ.",
      },
      {
        title: "Support en cas de réclamation",
        desc: "Si t'as une situation à l'étranger, on t'aide à naviguer la réclamation — pas juste te vendre la police et disparaître.",
      },
    ],
    faq: [
      {
        q: "Mes assurances de carte de crédit suffisent pas?",
        a: "Souvent non. Elles ont des plafonds bas (souvent 10 jours par voyage), excluent les conditions préexistantes, et leurs limites sont rarement claires avant que tu en aies besoin. Lis ton libellé — si t'es pas certain, on t'aide à le décortiquer.",
      },
      {
        q: "Combien ça coûte pour 2 semaines aux États-Unis?",
        a: "Très variable selon ton âge et ton état de santé. Mais pour donner un ordre : entre 25 et 75 $ pour 2 semaines pour un adulte en santé moyen. Pour 65 ans et plus, ça peut tripler.",
      },
      {
        q: "Et si j'oublie de prendre l'assurance avant le départ?",
        a: "Certains assureurs acceptent les souscriptions après le départ, mais avec un délai d'attente de 48-72h. C'est risqué. La meilleure approche : annuelle multi-voyages si tu voyages plus de 2 fois par année.",
      },
      {
        q: "L'assurance annulation est incluse?",
        a: "Pas toujours. C'est souvent une couverture séparée à ajouter. Pour un voyage de plus de 3 000 $, ça vaut presque toujours la peine.",
      },
    ],
    cta: {
      contactName: "Evan Juteau Lapierre",
      contactRole: "Courtier indépendant",
      line: "Devis en moins de 24 heures. Comparaison de 5+ assureurs.",
      btn: "Demander un devis voyage",
    },
  },
  {
    slug: "strategies-corporatives",
    num: "06",
    name: "Stratégies corporatives",
    short: "Quand l'incorporation devient un vrai outil — pas juste un statut.",
    tags: ["Vie participante", "Convention actionnaires"],
    hero: {
      eyebrow: "Service · 06",
      title: "Stratégies",
      titleEm: "corporatives",
      intro:
        "Une société par actions bien structurée, c'est plus qu'une économie d'impôt. C'est un véhicule de croissance, de protection d'actifs et de transmission. On t'aide à utiliser tous ses leviers.",
    },
    whenToConsult: [
      {
        title: "Tu factures plus que ton coût de vie",
        desc: "Si ton entreprise génère plus que ce que tu sors pour vivre, l'incorporation devient fiscalement intéressante. On calcule le seuil exact pour ton cas.",
      },
      {
        title: "Tu as des associés ou actionnaires",
        desc: "Convention d'actionnaires, assurance clé-homme, structure de rachat — sans ces outils, un décès ou une chicane peut détruire l'entreprise.",
      },
      {
        title: "Tu prépares une vente ou un transfert",
        desc: "5 ans avant de vendre, c'est le bon moment pour structurer. On utilise l'exonération pour gain en capital, le gel successoral, et l'assurance pour optimiser la sortie.",
      },
    ],
    finoxDifference: [
      {
        title: "On parle directement à ton CPA",
        desc: "Les meilleures stratégies corporatives demandent une coordination étroite entre fiscaliste, comptable, juriste et planificateur. On orchestre la conversation.",
      },
      {
        title: "Vie participante stratégique",
        desc: "L'assurance vie participante corporative, bien structurée, devient un véhicule d'accumulation à l'abri de l'impôt — souvent supérieur aux placements traditionnels dans certaines situations.",
      },
      {
        title: "Vision de sortie dès le jour 1",
        desc: "La structure que tu mets en place aujourd'hui détermine combien d'impôt tu paieras à la sortie dans 10 ou 20 ans. On pense long terme dès la première rencontre.",
      },
    ],
    faq: [
      {
        q: "À partir de quel revenu, l'incorporation vaut la peine?",
        a: "Règle générale : si tu peux laisser au moins 30-40 K$ par année dans la société sans en avoir besoin pour vivre, l'incorporation devient avantageuse. Sous ce seuil, les coûts de structure peuvent dépasser les économies.",
      },
      {
        q: "Holdco — c'est pour qui exactement?",
        a: "Pour quiconque a une entreprise opérationnelle qui génère des surplus. La Holdco protège les actifs accumulés des risques de l'OpCo, permet une planification successorale plus souple, et facilite les transferts entre membres de la famille.",
      },
      {
        q: "L'assurance vie participante corporative — c'est de la magie ou un piège?",
        a: "Ni l'un ni l'autre. C'est un outil puissant dans certaines situations (forte rentabilité, surplus à abriter, vision long terme) et complètement inutile dans d'autres. On évalue honnêtement si c'est pertinent pour toi.",
      },
      {
        q: "Combien ça coûte de mettre en place tout ça?",
        a: "L'analyse stratégique avec Finox est sans frais. Les exécutions (incorporation, conventions, fiducies) sont facturées par les juristes/CPA — généralement entre 3 000 et 15 000 $ selon la complexité. Les économies fiscales annuelles compensent largement.",
      },
    ],
    cta: {
      contactName: "Evan Juteau Lapierre",
      contactRole: "Stratégies corporatives",
      line: "On commence par un audit de ta structure actuelle. Identification des leviers en 60 minutes.",
      btn: "Parler à Evan — corporatif",
    },
  },
  {
    slug: "hypotheque",
    num: "07",
    name: "Financement hypothécaire",
    short: "Le vrai meilleur taux du marché — pas juste celui de ta banque.",
    tags: ["+50 prêteurs", "Résidentiel", "Commercial"],
    hero: {
      eyebrow: "Service · 07",
      title: "Financement",
      titleEm: "hypothécaire",
      intro:
        "Quand tu vas voir ta banque, tu obtiens leur taux. C'est tout. Quand tu travailles avec Dany, on magasine simultanément +50 prêteurs et tu obtiens le meilleur taux disponible — souvent 0,3 à 0,8 % de moins que ta banque.",
    },
    whenToConsult: [
      {
        title: "Tu achètes ta première maison",
        desc: "Pré-approbation, mise de fonds, CELIAPP, RAP, frais de clôture — on coordonne toutes les pièces et on t'évite les pièges classiques des premiers acheteurs.",
      },
      {
        title: "Ton hypothèque arrive à échéance",
        desc: "Le piège : ta banque te renvoie un avis de renouvellement automatique au taux affiché. Tu peux faire mieux. On magasine 90 jours avant l'échéance.",
      },
      {
        title: "Tu refinances ou tu accèdes à l'équité",
        desc: "Pour rénover, consolider des dettes, financer un investissement — on structure ton refinancement pour minimiser les frais et maximiser ta flexibilité.",
      },
    ],
    finoxDifference: [
      {
        title: "+50 prêteurs en simultané",
        desc: "Banques, prêteurs alternatifs, prêteurs commerciaux — Dany a accès à tout le marché. Tu n'es pas pris avec une seule offre.",
      },
      {
        title: "Service direct, pas de centre d'appels",
        desc: "Tu parles à Dany, pas à un agent qui change chaque mois. Il connaît ton dossier de A à Z et est joignable directement.",
      },
      {
        title: "Coordination avec assurance & planification",
        desc: "L'hypothèque ne vit pas seule. On coordonne avec l'assurance vie indépendante, la mise de fonds CELIAPP, et la fiscalité globale.",
      },
    ],
    faq: [
      {
        q: "Combien ça coûte de passer par un courtier?",
        a: "Pour les hypothèques résidentielles standard, c'est gratuit pour toi — le prêteur paie le courtier directement. Pour des situations complexes (commercial, B-lender, dossier difficile), des honoraires peuvent s'appliquer et sont divulgués d'avance.",
      },
      {
        q: "Vous offrez les mêmes taux que ma banque?",
        a: "Souvent meilleurs. Les prêteurs alternatifs et même certaines banques offrent des taux préférentiels via les courtiers parce qu'on amène un volume important. Tu obtiens un taux qu'un client direct n'a pas accès.",
      },
      {
        q: "Et si j'ai un dossier de crédit imparfait?",
        a: "On a accès à des prêteurs B et privés qui prêtent dans des situations où les banques refusent. Le taux est plus élevé, mais c'est souvent une solution temporaire pendant 1-2 ans, le temps de rebâtir.",
      },
      {
        q: "Combien de temps ça prend, une approbation?",
        a: "Pour une pré-approbation : 24 à 48h une fois les documents reçus. Pour une approbation finale avec offre acceptée : généralement 5 à 10 jours ouvrables.",
      },
    ],
    cta: {
      contactName: "Dany Michaud",
      contactRole: "Associé & Courtier Hypothécaire",
      line: "Pré-approbation gratuite. Comparaison de +50 prêteurs en moins de 48h.",
      btn: "Parler à Dany — hypothèque",
    },
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return services.find((s) => s.slug === slug);
}
