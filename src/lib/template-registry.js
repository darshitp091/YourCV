import { ModernMinimal } from "@/components/templates/ModernMinimal";
import { ClassicProfessional } from "@/components/templates/ClassicProfessional";
import { TechEngineer } from "@/components/templates/TechEngineer";
import { CreativeDesigner } from "@/components/templates/CreativeDesigner";
import { ExecutiveLeader } from "@/components/templates/ExecutiveLeader";
import { AcademicScholar } from "@/components/templates/AcademicScholar";
import { HealthcarePro } from "@/components/templates/HealthcarePro";
import { StartupFounder } from "@/components/templates/StartupFounder";
import { LegalCounsel } from "@/components/templates/LegalCounsel";
import { MarketingMaven } from "@/components/templates/MarketingMaven";

// Niche Templates - Tech Family
import { SoftwareEngineerNiche } from "@/components/templates/niche/SoftwareEngineer";
import { DevOpsArchitectNiche } from "@/components/templates/niche/DevOpsArchitect";
import { CyberSecurityAnalystNiche } from "@/components/templates/niche/CyberSecurityAnalyst";
import { DataScientistNiche } from "@/components/templates/niche/DataScientist";
import { UXUIDesignerNiche } from "@/components/templates/niche/UXUIDesigner";
import { FrontendDeveloperNiche } from "@/components/templates/niche/FrontendDeveloper";
import { NetworkAdministratorNiche } from "@/components/templates/niche/NetworkAdministrator";
import { QAEngineerNiche } from "@/components/templates/niche/QAEngineer";
import { ITProjectManagerNiche } from "@/components/templates/niche/ITProjectManager";
import { CloudArchitectNiche } from "@/components/templates/niche/CloudArchitect";
import { DatabaseAdministratorNiche } from "@/components/templates/niche/DatabaseAdministrator";
import { MobileDeveloperNiche } from "@/components/templates/niche/MobileDeveloper";

// Niche Templates - Corporate Family
import { FinancialAnalystNiche } from "@/components/templates/niche/corporate/FinancialAnalyst";
import { HRManagerNiche } from "@/components/templates/niche/corporate/HRManager";
import { ProductManagerNiche } from "@/components/templates/niche/corporate/ProductManager";
import { OperationsDirectorNiche } from "@/components/templates/niche/corporate/OperationsDirector";
import { BusinessAnalystNiche } from "@/components/templates/niche/corporate/BusinessAnalyst";
import { MarketingDirectorNiche } from "@/components/templates/niche/corporate/MarketingDirector";
import { SalesExecutiveNiche } from "@/components/templates/niche/corporate/SalesExecutive";
import { ProjectCoordinatorNiche } from "@/components/templates/niche/corporate/ProjectCoordinator";
import { AccountManagerNiche } from "@/components/templates/niche/corporate/AccountManager";
import { SupplyChainManagerNiche } from "@/components/templates/niche/corporate/SupplyChainManager";
import { LegalConsultantNiche } from "@/components/templates/niche/corporate/LegalConsultant";
import { RiskManagerNiche } from "@/components/templates/niche/corporate/RiskManager";

// Niche Templates - Medical Family
import { DoctorNiche } from "@/components/templates/niche/medical/Doctor";
import { NursePractitionerNiche } from "@/components/templates/niche/medical/NursePractitioner";
import { MedicalResearcherNiche } from "@/components/templates/niche/medical/MedicalResearcher";
import { PharmacistNiche } from "@/components/templates/niche/medical/Pharmacist";
import { PhysiotherapistNiche } from "@/components/templates/niche/medical/Physiotherapist";
import { SurgeonNiche } from "@/components/templates/niche/medical/Surgeon";
import { RadiologistNiche } from "@/components/templates/niche/medical/Radiologist";
import { HospitalAdministratorNiche } from "@/components/templates/niche/medical/HospitalAdministrator";

// Niche Templates - Creative Family
import { GraphicDesignerNiche } from "@/components/templates/niche/creative/GraphicDesigner";
import { ArtDirectorNiche } from "@/components/templates/niche/creative/ArtDirector";
import { ContentCreatorNiche } from "@/components/templates/niche/creative/ContentCreator";
import { CopywriterNiche } from "@/components/templates/niche/creative/Copywriter";
import { FashionDesignerNiche } from "@/components/templates/niche/creative/FashionDesigner";
import { InteriorDesignerNiche } from "@/components/templates/niche/creative/InteriorDesigner";
import { PhotographerNiche } from "@/components/templates/niche/creative/Photographer";
import { VideoEditorNiche } from "@/components/templates/niche/creative/VideoEditor";
import { ArchitectNiche } from "@/components/templates/niche/creative/Architect";
import { SocialMediaManagerNiche } from "@/components/templates/niche/creative/SocialMediaManager";

// Niche Templates - Trades Family
import { RealEstateAgentNiche } from "@/components/templates/niche/trades/RealEstateAgent";
import { ChefNiche } from "@/components/templates/niche/trades/Chef";
import { FitnessTrainerNiche } from "@/components/templates/niche/trades/FitnessTrainer";
import { HairStylistNiche } from "@/components/templates/niche/trades/HairStylist";
import { MechanicNiche } from "@/components/templates/niche/trades/Mechanic";
import { ElectricianNiche } from "@/components/templates/niche/trades/Electrician";
import { PlumberNiche } from "@/components/templates/niche/trades/Plumber";
import { LogisticsCoordinatorNiche } from "@/components/templates/niche/trades/LogisticsCoordinator";

export const TEMPLATE_COMPONENTS = {
    "modern-minimal": ModernMinimal,
    "classic-professional": ClassicProfessional,
    "tech-engineer": TechEngineer,
    "creative-designer": CreativeDesigner,
    "executive-leader": ExecutiveLeader,
    "academic-scholar": AcademicScholar,
    "healthcare-pro": HealthcarePro,
    "startup-founder": StartupFounder,
    "legal-counsel": LegalCounsel,
    "marketing-maven": MarketingMaven,

    // Tech Family
    "software-engineer-niche": SoftwareEngineerNiche,
    "devops-architect-niche": DevOpsArchitectNiche,
    "cyber-security-niche": CyberSecurityAnalystNiche,
    "data-scientist-niche": DataScientistNiche,
    "ux-ui-designer-niche": UXUIDesignerNiche,
    "frontend-developer-niche": FrontendDeveloperNiche,
    "network-administrator-niche": NetworkAdministratorNiche,
    "qa-engineer-niche": QAEngineerNiche,
    "it-project-manager-niche": ITProjectManagerNiche,
    "cloud-architect-niche": CloudArchitectNiche,
    "database-administrator-niche": DatabaseAdministratorNiche,
    "mobile-developer-niche": MobileDeveloperNiche,

    // Corporate Family
    "financial-analyst-niche": FinancialAnalystNiche,
    "hr-manager-niche": HRManagerNiche,
    "product-manager-niche": ProductManagerNiche,
    "operations-director-niche": OperationsDirectorNiche,
    "business-analyst-niche": BusinessAnalystNiche,
    "marketing-director-niche": MarketingDirectorNiche,
    "sales-executive-niche": SalesExecutiveNiche,
    "project-coordinator-niche": ProjectCoordinatorNiche,
    "account-manager-niche": AccountManagerNiche,
    "supply-chain-manager-niche": SupplyChainManagerNiche,
    "legal-consultant-niche": LegalConsultantNiche,
    "risk-manager-niche": RiskManagerNiche,

    // Medical Family
    "doctor-niche": DoctorNiche,
    "nurse-practitioner-niche": NursePractitionerNiche,
    "medical-researcher-niche": MedicalResearcherNiche,
    "pharmacist-niche": PharmacistNiche,
    "physiotherapist-niche": PhysiotherapistNiche,
    "surgeon-niche": SurgeonNiche,
    "radiologist-niche": RadiologistNiche,
    "hospital-administrator-niche": HospitalAdministratorNiche,

    // Creative Family
    "graphic-designer-niche": GraphicDesignerNiche,
    "art-director-niche": ArtDirectorNiche,
    "content-creator-niche": ContentCreatorNiche,
    "copywriter-niche": CopywriterNiche,
    "fashion-designer-niche": FashionDesignerNiche,
    "interior-designer-niche": InteriorDesignerNiche,
    "photographer-niche": PhotographerNiche,
    "video-editor-niche": VideoEditorNiche,
    "architect-niche": ArchitectNiche,
    "social-media-manager-niche": SocialMediaManagerNiche,

    // Trades Family
    "real-estate-agent-niche": RealEstateAgentNiche,
    "chef-niche": ChefNiche,
    "fitness-trainer-niche": FitnessTrainerNiche,
    "hair-stylist-niche": HairStylistNiche,
    "mechanic-niche": MechanicNiche,
    "electrician-niche": ElectricianNiche,
    "plumber-niche": PlumberNiche,
    "logistics-coordinator-niche": LogisticsCoordinatorNiche,
};

export const getTemplateComponent = (id) => {
    return TEMPLATE_COMPONENTS[id] || ModernMinimal;
};
