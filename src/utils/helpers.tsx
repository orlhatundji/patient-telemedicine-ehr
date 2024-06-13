import { ReactComponent as PaymentPersonalizationIcon } from "@icons/payment_personalization.svg";
import { ReactComponent as ScoreIcon } from "@icons/score.svg";
import { ReactComponent as IdentityIcon } from "@icons/tamperproof.svg";
import { ReactComponent as ReturnsOrchestratorIcon } from "@icons/returns_ochestrator.svg";
import {
  IDENTITY_AND_AUTHENTICATION,
  RETURNS_ORCHESTRATOR,
  PAYMENT_PERSONALIZATION,
  SHOPPER_TRUST_INDEX,
} from "./constants";

export const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

export const getClassNames = (...classes: (string|undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

export const toCamelCase = (str: string) => {
  return str
    .replace(/\s(.)/g, function (a) {
      return a.toUpperCase();
    })
    .replace(/\s/g, "")
    .replace(/^(.)/, function (b) {
      return b.toLowerCase();
    });
};

export const URLPattern2 =
  /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
export const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w+)+$/;

export const URLPattern =
  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/g;

export const getRiskColor= (risk: string, inactive: boolean | undefined = false) => {
  if (inactive) return "bg-grey-content-tertiary";
  switch (risk) {
    case "trusted":
      return "bg-risk-green";
    case "medium":
      return "bg-trud-orange";
    case "high":
      return "bg-risk-red";
    default:
      return "bg-grey-content-tertiary";
  }
};

export const getRiskTitle = (risk: string) => {
  switch (risk) {
    case "trusted":
      return "Trusted Shopper";
    case "medium":
      return "Medium Risk Shopper";
    case "high":
      return "High Risk Shopper";
    default:
      return "";
  }
};
export const getRiskWithScore = (score: number) => {
  if (score >= 80) {
    return "trusted";
    } else if (score >= 70) {
      return "medium";
  } else {
    return "high";
  }
};

export const getScoreColor = (score: number, inactive = false) => {
  if (inactive) {
    return "text-grey-content-tertiary";
  } else if (score >= 80) {
    return "text-score-green";
    } else if (score >= 70) {
      return "text-trud-orange";
  } else {
    return "text-red-alert";
  }
};

export const getRiskLevel = (risk_level: string) => {
  if (risk_level === "LOW_RISK_SHOPPER") {
    return "trusted";
  } else if (risk_level === "MEDIUM_RISK_SHOPPER") {
    return "medium";
  } else {
    return "high";
  }
};

export const getRiskLevelColor = (risk_level: string, inactive = false) => {
  if (inactive) {
    return "text-grey-content-tertiary";
  } else if (risk_level === "LOW_RISK_SHOPPER") {
    return "text-score-green";
    } else if (risk_level === "MEDIUM_RISK_SHOPPER") {
      return "text-trud-orange";
  } else {
    return "text-red-alert";
  }
};

export const pecks = {
  STI: ["Shopper Trust Index Configuration", "Shopper Trust Network Search"],
  CRM: [
    "Shopper Trust Index Configuration",
    "Instant Refunds Orchestrator",
    "Trusted Shopper Network Search and Analytics",
  ],
};

export const getLocalStorageData = (storageName: string) => {
  const data = localStorage.getItem(storageName);
  return data ? JSON.parse(data) : null;
}

export const setLocalStorageData = (storageName: string,data: string) => {
  localStorage.setItem(storageName, data);
}

interface ProjectType {
  name: string;
  type: string;
  description: string;
  pecks: string[];
  icon: React.ReactComponentElement<any, any>;
}
export const projectTypes: ProjectType[] = [
  {
    name: "Shopper Trust Index",
    type: SHOPPER_TRUST_INDEX,
    description:
      "A fraud risk score for new and returning shoppers, to differentiate trusted shoppers from high-risk shoppers.",
    pecks: [
      "Shopper Trust Index",
      "Shopper Identifier",
      "Network Search and Analytics",
    ],
    icon: <ScoreIcon className="min-h-[44px] min-w-[45px]" />,
  },
  {
    name: "Refunds Orchestrator",
    type: RETURNS_ORCHESTRATOR,
    description:
      "An orchestrator helping operations team make automated and assisted decisions for refunds based on shopper fraud risk.",
    pecks: [
      "Shopper Trust Index",
      "Returns Orchestrator with alerts",
      "Network Search and Analytics",
    ],
    icon: <ReturnsOrchestratorIcon className="" />,
  },
  {
    name: "Identity and authentication",
    type: IDENTITY_AND_AUTHENTICATION,
    description:
      "Secure consumer accounts from login to returns, with streamlined passkeys linked directly to your web domain.",
    pecks: ["Consumer account creation ", "Consumer authentication"],
    icon: <IdentityIcon className="" />,
  },
  {
    name: "Payment Personalisation",
    type: PAYMENT_PERSONALIZATION,
    description:
      "Automatically personalise routing for payments based on consumer fraud risk profile, at checkout and refunds",
    pecks: ["Shopper Trust Index", "Returns Orchestrator"],
    icon: <PaymentPersonalizationIcon className="" />,
  },
];

export const modeColors: Record<string, string> = {
  LIVE: "bg-green-alert",
  SANDBOX: "bg-trud-orange",
};

export const addDays = (days: number) => {
  var result = new Date();
  result.setDate(result.getDate() + days);
  return result.toDateString();
};

export const members = [
  {
    id: 0,
    firstName: "Lerato",
    lastName: "Matsio",
    email: "lerato@trudenty.com",
    lastSeen: "10 secs ago",
    role: "admin",
    active: false,
  },
  {
    id: 1,
    firstName: "Marco",
    lastName: "Kome",
    email: "marco@trudenty.com",
    lastSeen: "Yesterday at 16:30",
    role: "viewer",
    active: true,
  },
  {
    id: 2,
    firstName: "Tuttuh",
    lastName: "Adegun",
    email: "tuttuh@trudenty.com",
    lastSeen: "10 secs ago",
    role: "admin",
    active: false,
  },
  {
    id: 3,
    firstName: "Ose Yaw",
    lastName: "Ababio",
    email: "ababio@trudenty.com",
    lastSeen: "Yesterday at 16:30",
    role: "viewer",
    active: true,
  },
  {
    id: 4,
    firstName: "Amy",
    lastName: "Fowler",
    email: "amy@trudenty.com",
    lastSeen: "10 secs ago",
    role: "admin",
    active: false,
  },
  {
    id: 5,
    firstName: "Brian",
    lastName: "Goldberg",
    email: "brian@trudenty.com",
    lastSeen: "3 days ago",
    role: "viewer",
    active: true,
  },
];

export const projectsOld = [
  {
    id: 1,
    name: "Shopper Trust Index",
    description:
      "Safeguarding the entire online marketplace, ensuring a secure and seamless shopping environment for all.",
    products: SHOPPER_TRUST_INDEX,
    environment: "LIVE",
    lastPublished: "",
  },
  {
    id: 2,
    name: "Returns Orchestrator",
    description:
      "An orchestrator helping operations team make automated and assisted decisions for refunds based on shopper fraud risk.",
    products: RETURNS_ORCHESTRATOR,
    environment: "SANDBOX",
    lastPublished: "",
  },
  {
    id: 3,
    name: "Shopper Trust Index",
    description:
      "Safeguarding the entire online marketplace, ensuring a secure and seamless shopping environment for all.",
    products: SHOPPER_TRUST_INDEX,
    environment: "SANDBOX",
    lastPublished: "",
  },
  {
    id: 4,
    name: "Returns Orchestrator",
    description:
      "An orchestrator helping operations team make automated and assisted decisions for refunds based on shopper fraud risk.",
    products: RETURNS_ORCHESTRATOR,
    environment: "LIVE",
    lastPublished: "",
  },
];

export const projects = [
  {
    api_key: "sandbox_6b9e73d4-f845-41c9-ad8a-ee8757ec7c11",
    id: "10942e91-2c74-44c0-b78a-ed75c75f291d",
    name: "Shopper Trust Index",
    description:
      "Safeguarding the entire online marketplace, ensuring a secure and seamless shopping environment for all.",
    products: SHOPPER_TRUST_INDEX,
    environment: "LIVE",
    status: "draft",
    project_id: "7b409b4d-80c7-4977-b4a2-1f28cd4a8158",
    company_id: "60c3e8b0-8a2c-11ee-9f7e-e31dc2387503",
    createdAt: "2023-11-27T20:49:37.000Z",
    updatedAt: "2023-11-27T20:49:37.000Z",
    deletedAt: null,
    shopper_trust_index_configs: [
      {
        id: "aca9e83a-41bc-47dd-8380-acaa5a3bd3a6",
        name: "Identity",
        config_type: "BANK_VERIFIED_IDENTITY",
        score: "10.00",
        recommended: "0.00",
        description:
          "Identity verification based on bank-verified identity & digital identity.",
        project_id: "10942e91-2c74-44c0-b78a-ed75c75f291d",
        environment: "LIVE",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },
      {
        id: "a5fbaacb-364b-4fcd-99da-a931a2e6747d",
        name: "Network history with shopper",
        config_type: "NETWORK_HISTORY_WITH_SHOPPER",
        score: "30.00",
        recommended: "0.00",
        description:
          "History of shopper's orders, returns and refunds in across the network including other ecommerce players.",
        project_id: "10942e91-2c74-44c0-b78a-ed75c75f291d",
        environment: "LIVE",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },
      {
        id: "758d101d-5dc2-4202-a2f2-b53e06925aaf",
        name: "Adverse media scan",
        config_type: "ADVERSE_MEDIA_SCAN",
        score: "4.00",
        recommended: "0.00",
        description: "Web crawler for shopper activity on the dark web.",
        project_id: "10942e91-2c74-44c0-b78a-ed75c75f291d",
        environment: "LIVE",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },

      {
        id: "3d61acd7-ce6c-48e8-a055-97fb9364f62a",
        name: "Shopper banking history",
        config_type: "SHOPPER_BANKING_HISTORY",
        score: "35.00",
        recommended: "0.00",
        description:
          "Shopper bank activity levels including shopping returns and refunds history.",
        project_id: "10942e91-2c74-44c0-b78a-ed75c75f291d",
        environment: "LIVE",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },

      {
        id: "1f3326a5-a4d6-4b22-8cc7-ddf9ce80e481",
        name: "Retailer's own shopping history with shopper",
        config_type: "RETAILERS_OWN_SHOPPING_HISTORY_WITH_SHOPPER",
        score: "20.00",
        recommended: "0.00",
        description: "Description...",
        project_id: "10942e91-2c74-44c0-b78a-ed75c75f291d",
        environment: "LIVE",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },
    ],
    trusted_shopper_score_configs: [
      {
        id: "ce39fa69-e83d-4782-9305-2d3d875f489e",
        config_type: "MEDIUM_RISK",
        name: "A Medium Risk Shopper has an index score of...",
        score: "79.00",
        description:
          "Medium Risk Shoppers have a high assurance on their identity and a considerable ratio of returns and refunds, but no detected fraud.",
        recommended: "79.00",
        project_id: "10942e91-2c74-44c0-b78a-ed75c75f291d",
        environment: "LIVE",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },
      {
        id: "1ae1bb6f-ec96-48e6-ae94-e5651ca2d948",
        config_type: "LOW_RISK",
        name: "A Trusted Shopper has an index score of ...",
        score: "69.00",
        description:
          "Trusted Shoppers have a high assurance on their identity and a low ratio of returns and refunds across the network.",
        recommended: "69.00",
        project_id: "10942e91-2c74-44c0-b78a-ed75c75f291d",
        environment: "LIVE",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },
      {
        id: "13813ce4-28aa-4a7c-af76-d487615bcbf4",
        config_type: "HIGH_RISK",
        name: "A High Risk Shopper has an index score of...",
        score: "80.00",
        description:
          "High Risk Shoppers have medium to low levels on identity assurance, high ratio of returns and refunds and have return and refund issues including fraud.",
        recommended: "80.00",
        project_id: "10942e91-2c74-44c0-b78a-ed75c75f291d",
        environment: "LIVE",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },
    ],
  },
  {
    api_key: "live_8e6b75ab-cbf3-4ac0-81e5-e07a7bacdc80",
    id: "7b409b4d-80c7-4977-b4a2-1f28cd4a8158",
    name: "Returns Orchestrator",
    description:
      "An orchestrator helping operations team make automated and assisted decisions for refunds based on shopper fraud risk.",
    products: RETURNS_ORCHESTRATOR,
    environment: "SANDBOX",
    status: "draft",
    project_id: null,
    company_id: "60c3e8b0-8a2c-11ee-9f7e-e31dc2387503",
    createdAt: "2023-11-27T20:49:37.000Z",
    updatedAt: "2023-11-27T20:49:37.000Z",
    deletedAt: null,
    shopper_trust_index_configs: [
      {
        id: "e5628620-103d-467f-a006-4d35b40519cd",
        name: "Adverse media scan",
        config_type: "ADVERSE_MEDIA_SCAN",
        score: "4.00",
        recommended: "0.00",
        description: "Web crawler for shopper activity on the dark web.",
        project_id: "7b409b4d-80c7-4977-b4a2-1f28cd4a8158",
        environment: "SANDBOX",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },
      {
        id: "a0d07d1f-0e1a-4f01-9cbe-c429afbb1c1f",
        name: "Network history with shopper",
        config_type: "NETWORK_HISTORY_WITH_SHOPPER",
        score: "30.00",
        recommended: "0.00",
        description:
          "History of shopper's orders, returns and refunds in across the network including other ecommerce players.",
        project_id: "7b409b4d-80c7-4977-b4a2-1f28cd4a8158",
        environment: "SANDBOX",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },
      {
        id: "9f21bc55-861a-400f-b871-15ecbcba3ee9",
        name: "Shopper banking history",
        config_type: "SHOPPER_BANKING_HISTORY",
        score: "35.00",
        recommended: "0.00",
        description:
          "Shopper bank activity levels including shopping returns and refunds history.",
        project_id: "7b409b4d-80c7-4977-b4a2-1f28cd4a8158",
        environment: "SANDBOX",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },

      {
        id: "4f15255d-2935-49f8-9270-f9a65019b7ad",
        name: "Identity",
        config_type: "BANK_VERIFIED_IDENTITY",
        score: "10.00",
        recommended: "0.00",
        description:
          "Identity verification based on bank-verified identity & digital identity.",
        project_id: "7b409b4d-80c7-4977-b4a2-1f28cd4a8158",
        environment: "SANDBOX",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },

      {
        id: "36b7136d-fe51-4118-87b9-31e6d710e63a",
        name: "Retailer's own shopping history with shopper",
        config_type: "RETAILERS_OWN_SHOPPING_HISTORY_WITH_SHOPPER",
        score: "20.00",
        recommended: "0.00",
        description: "Description...",
        project_id: "7b409b4d-80c7-4977-b4a2-1f28cd4a8158",
        environment: "SANDBOX",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },
    ],
    trusted_shopper_score_configs: [
      {
        id: "ce94cf7a-13eb-453d-9318-849cfb4c52b2",
        config_type: "HIGH_RISK",
        name: "A High Risk Shopper has an index score of...",
        score: "80.00",
        description:
          "High Risk Shoppers have medium to low levels on identity assurance, high ratio of returns and refunds and have return and refund issues including fraud.",
        recommended: "80.00",
        project_id: "7b409b4d-80c7-4977-b4a2-1f28cd4a8158",
        environment: "SANDBOX",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },
      {
        id: "a77e8e76-0344-4e80-94e0-ea7481552d42",
        config_type: "LOW_RISK",
        name: "A Trusted Shopper has an index score of ...",
        score: "69.00",
        description:
          "Trusted Shoppers have a high assurance on their identity and a low ratio of returns and refunds across the network.",
        recommended: "69.00",
        project_id: "7b409b4d-80c7-4977-b4a2-1f28cd4a8158",
        environment: "SANDBOX",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },
      {
        id: "6f2b4927-a381-4700-b39a-8823ec57062e",
        config_type: "MEDIUM_RISK",
        name: "A Medium Risk Shopper has an index score of...",
        score: "79.00",
        description:
          "Medium Risk Shoppers have a high assurance on their identity and a considerable ratio of returns and refunds, but no detected fraud.",
        recommended: "79.00",
        project_id: "7b409b4d-80c7-4977-b4a2-1f28cd4a8158",
        environment: "SANDBOX",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },
    ],
  },
  {
    api_key: "sandbox_6b9e73d4-f845-41c9-ad8a-ee8757ec7c11",
    id: "10942e91-2c74-44c0-b78a-ed75c75f291E",
    name: "Shopper Trust Index",
    description:
      "Safeguarding the entire online marketplace, ensuring a secure and seamless shopping environment for all.",
    products: SHOPPER_TRUST_INDEX,
    environment: "SANDBOX",
    status: "draft",
    project_id: "7b409b4d-80c7-4977-b4a2-1f28cd4a8158",
    company_id: "60c3e8b0-8a2c-11ee-9f7e-e31dc2387503",
    createdAt: "2023-11-27T20:49:37.000Z",
    updatedAt: "2023-11-27T20:49:37.000Z",
    deletedAt: null,
    shopper_trust_index_configs: [
      {
        id: "aca9e83a-41bc-47dd-8380-acaa5a3bd3a6",
        name: "Identity",
        config_type: "BANK_VERIFIED_IDENTITY",
        score: "10.00",
        recommended: "0.00",
        description:
          "Identity verification based on bank-verified identity & digital identity.",
        project_id: "10942e91-2c74-44c0-b78a-ed75c75f291d",
        environment: "LIVE",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },
      {
        id: "a5fbaacb-364b-4fcd-99da-a931a2e6747d",
        name: "Network history with shopper",
        config_type: "NETWORK_HISTORY_WITH_SHOPPER",
        score: "30.00",
        recommended: "0.00",
        description:
          "History of shopper's orders, returns and refunds in across the network including other ecommerce players.",
        project_id: "10942e91-2c74-44c0-b78a-ed75c75f291d",
        environment: "LIVE",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },
      {
        id: "758d101d-5dc2-4202-a2f2-b53e06925aaf",
        name: "Adverse media scan",
        config_type: "ADVERSE_MEDIA_SCAN",
        score: "4.00",
        recommended: "0.00",
        description: "Web crawler for shopper activity on the dark web.",
        project_id: "10942e91-2c74-44c0-b78a-ed75c75f291d",
        environment: "LIVE",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },

      {
        id: "3d61acd7-ce6c-48e8-a055-97fb9364f62a",
        name: "Shopper banking history",
        config_type: "SHOPPER_BANKING_HISTORY",
        score: "35.00",
        recommended: "0.00",
        description:
          "Shopper bank activity levels including shopping returns and refunds history.",
        project_id: "10942e91-2c74-44c0-b78a-ed75c75f291d",
        environment: "LIVE",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },

      {
        id: "1f3326a5-a4d6-4b22-8cc7-ddf9ce80e481",
        name: "Retailer's own shopping history with shopper",
        config_type: "RETAILERS_OWN_SHOPPING_HISTORY_WITH_SHOPPER",
        score: "20.00",
        recommended: "0.00",
        description: "Description...",
        project_id: "10942e91-2c74-44c0-b78a-ed75c75f291d",
        environment: "LIVE",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },
    ],
    trusted_shopper_score_configs: [
      {
        id: "ce39fa69-e83d-4782-9305-2d3d875f489e",
        config_type: "MEDIUM_RISK",
        name: "A Medium Risk Shopper has an index score of...",
        score: "79.00",
        description:
          "Medium Risk Shoppers have a high assurance on their identity and a considerable ratio of returns and refunds, but no detected fraud.",
        recommended: "79.00",
        project_id: "10942e91-2c74-44c0-b78a-ed75c75f291d",
        environment: "LIVE",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },
      {
        id: "1ae1bb6f-ec96-48e6-ae94-e5651ca2d948",
        config_type: "LOW_RISK",
        name: "A Trusted Shopper has an index score of ...",
        score: "69.00",
        description:
          "Trusted Shoppers have a high assurance on their identity and a low ratio of returns and refunds across the network.",
        recommended: "69.00",
        project_id: "10942e91-2c74-44c0-b78a-ed75c75f291d",
        environment: "LIVE",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },
      {
        id: "13813ce4-28aa-4a7c-af76-d487615bcbf4",
        config_type: "HIGH_RISK",
        name: "A High Risk Shopper has an index score of...",
        score: "80.00",
        description:
          "High Risk Shoppers have medium to low levels on identity assurance, high ratio of returns and refunds and have return and refund issues including fraud.",
        recommended: "80.00",
        project_id: "10942e91-2c74-44c0-b78a-ed75c75f291d",
        environment: "LIVE",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },
    ],
  },
  {
    api_key: "live_8e6b75ab-cbf3-4ac0-81e5-e07a7bacdc80",
    id: "7b409b4d-80c7-4977-b4a2-1f28cd4a815E",
    name: "Returns Orchestrator",
    description:
      "An orchestrator helping operations team make automated and assisted decisions for refunds based on shopper fraud risk.",
    products: RETURNS_ORCHESTRATOR,
    environment: "LIVE",
    status: "draft",
    project_id: null,
    company_id: "60c3e8b0-8a2c-11ee-9f7e-e31dc2387503",
    createdAt: "2023-11-27T20:49:37.000Z",
    updatedAt: "2023-11-27T20:49:37.000Z",
    deletedAt: null,
    shopper_trust_index_configs: [
      {
        id: "e5628620-103d-467f-a006-4d35b40519cd",
        name: "Adverse media scan",
        config_type: "ADVERSE_MEDIA_SCAN",
        score: "4.00",
        recommended: "0.00",
        description: "Web crawler for shopper activity on the dark web.",
        project_id: "7b409b4d-80c7-4977-b4a2-1f28cd4a8158",
        environment: "SANDBOX",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },
      {
        id: "a0d07d1f-0e1a-4f01-9cbe-c429afbb1c1f",
        name: "Network history with shopper",
        config_type: "NETWORK_HISTORY_WITH_SHOPPER",
        score: "30.00",
        recommended: "0.00",
        description:
          "History of shopper's orders, returns and refunds in across the network including other ecommerce players.",
        project_id: "7b409b4d-80c7-4977-b4a2-1f28cd4a8158",
        environment: "SANDBOX",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },
      {
        id: "9f21bc55-861a-400f-b871-15ecbcba3ee9",
        name: "Shopper banking history",
        config_type: "SHOPPER_BANKING_HISTORY",
        score: "35.00",
        recommended: "0.00",
        description:
          "Shopper bank activity levels including shopping returns and refunds history.",
        project_id: "7b409b4d-80c7-4977-b4a2-1f28cd4a8158",
        environment: "SANDBOX",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },

      {
        id: "4f15255d-2935-49f8-9270-f9a65019b7ad",
        name: "Identity",
        config_type: "BANK_VERIFIED_IDENTITY",
        score: "10.00",
        recommended: "0.00",
        description:
          "Identity verification based on bank-verified identity & digital identity.",
        project_id: "7b409b4d-80c7-4977-b4a2-1f28cd4a8158",
        environment: "SANDBOX",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },

      {
        id: "36b7136d-fe51-4118-87b9-31e6d710e63a",
        name: "Retailer's own shopping history with shopper",
        config_type: "RETAILERS_OWN_SHOPPING_HISTORY_WITH_SHOPPER",
        score: "20.00",
        recommended: "0.00",
        description: "Description...",
        project_id: "7b409b4d-80c7-4977-b4a2-1f28cd4a8158",
        environment: "SANDBOX",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },
    ],
    trusted_shopper_score_configs: [
      {
        id: "ce94cf7a-13eb-453d-9318-849cfb4c52b2",
        config_type: "HIGH_RISK",
        name: "A High Risk Shopper has an index score of...",
        score: "80.00",
        description:
          "High Risk Shoppers have medium to low levels on identity assurance, high ratio of returns and refunds and have return and refund issues including fraud.",
        recommended: "80.00",
        project_id: "7b409b4d-80c7-4977-b4a2-1f28cd4a8158",
        environment: "SANDBOX",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },
      {
        id: "a77e8e76-0344-4e80-94e0-ea7481552d42",
        config_type: "LOW_RISK",
        name: "A Trusted Shopper has an index score of ...",
        score: "69.00",
        description:
          "Trusted Shoppers have a high assurance on their identity and a low ratio of returns and refunds across the network.",
        recommended: "69.00",
        project_id: "7b409b4d-80c7-4977-b4a2-1f28cd4a8158",
        environment: "SANDBOX",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },
      {
        id: "6f2b4927-a381-4700-b39a-8823ec57062e",
        config_type: "MEDIUM_RISK",
        name: "A Medium Risk Shopper has an index score of...",
        score: "79.00",
        description:
          "Medium Risk Shoppers have a high assurance on their identity and a considerable ratio of returns and refunds, but no detected fraud.",
        recommended: "79.00",
        project_id: "7b409b4d-80c7-4977-b4a2-1f28cd4a8158",
        environment: "SANDBOX",
        createdAt: "2023-11-27T20:49:38.000Z",
        updatedAt: "2023-11-27T20:49:38.000Z",
        deletedAt: null,
      },
    ],
  },
];
