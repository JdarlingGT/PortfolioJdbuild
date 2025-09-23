import { type User, type InsertUser, type DesignProject, type InsertDesignProject } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Design Projects
  getDesignProjects(category?: string): Promise<DesignProject[]>;
  getDesignProject(id: string): Promise<DesignProject | undefined>;
  createDesignProject(project: InsertDesignProject): Promise<DesignProject>;
  getFeaturedDesignProjects(): Promise<DesignProject[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private designProjects: Map<string, DesignProject>;

  constructor() {
    this.users = new Map();
    this.designProjects = new Map();
    this.seedDesignProjects();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getDesignProjects(category?: string): Promise<DesignProject[]> {
    const projects = Array.from(this.designProjects.values());
    if (category && category !== "All") {
      return projects.filter(project => project.category === category);
    }
    return projects;
  }

  async getDesignProject(id: string): Promise<DesignProject | undefined> {
    return this.designProjects.get(id);
  }

  async createDesignProject(insertProject: InsertDesignProject): Promise<DesignProject> {
    const id = randomUUID();
    const project: DesignProject = {
      id,
      title: insertProject.title,
      description: insertProject.description || null,
      category: insertProject.category,
      year: insertProject.year,
      imageUrl: insertProject.imageUrl,
      tools: insertProject.tools || null,
      featured: insertProject.featured ?? null,
      clientName: insertProject.clientName || null,
      projectType: insertProject.projectType || null,
    };
    this.designProjects.set(id, project);
    return project;
  }

  async getFeaturedDesignProjects(): Promise<DesignProject[]> {
    return Array.from(this.designProjects.values()).filter(project => project.featured);
  }

  private seedDesignProjects() {
    const projects: Omit<DesignProject, 'id'>[] = [
      {
        title: "Evening of Promise Gala",
        description: "Professional event banner design for American Lung Association's annual fundraising gala featuring elegant typography and celestial theme.",
        category: "Marketing Materials",
        year: 2018,
        imageUrl: "/attached_assets/EveningOfPromiseWebBannerBlue1600_1__1758615614519.jpg",
        tools: ["Photoshop", "Illustrator"],
        featured: true,
        clientName: "American Lung Association - Indiana",
        projectType: "Event Marketing"
      },
      {
        title: "TBM Law Firm Logo",
        description: "Professional legal practice branding with sophisticated geometric design and emphasis on experience and effectiveness.",
        category: "Logo Design",
        year: 2019,
        imageUrl: "/attached_assets/TBM Logo_1758615637347.png",
        tools: ["Illustrator", "InDesign"],
        featured: true,
        clientName: "TBM Legal",
        projectType: "Brand Identity"
      },
      {
        title: "Russell Painting Company",
        description: "Dynamic logo design featuring flowing paint brush strokes with vibrant color gradients representing creativity and quality craftsmanship.",
        category: "Logo Design",
        year: 2020,
        imageUrl: "/attached_assets/RPC -  Logo 3_1758615637364.png",
        tools: ["Illustrator", "Photoshop"],
        featured: true,
        clientName: "Russell Painting Company",
        projectType: "Brand Identity"
      },
      {
        title: "Perpetual Movement Coaching",
        description: "Minimalist arrow-based logo design symbolizing forward motion and progress for fitness and life coaching services.",
        category: "Logo Design",
        year: 2019,
        imageUrl: "/attached_assets/Perpetual Movement Coaching- Secondary Logo_1758615637382.png",
        tools: ["Illustrator"],
        featured: false,
        clientName: "Perpetual Movement Coaching",
        projectType: "Brand Identity"
      },
      {
        title: "School 80 Condominiums",
        description: "Distinctive residential branding featuring owl mascot design representing wisdom and community for luxury condominium development.",
        category: "Logo Design",
        year: 2018,
        imageUrl: "/attached_assets/Logo_1758615637400.png",
        tools: ["Illustrator", "Photoshop"],
        featured: false,
        clientName: "School 80 Development",
        projectType: "Real Estate Branding"
      },
      {
        title: "Installation Nation 2018",
        description: "Event branding for installer conference featuring natural tree imagery and corporate partnership acknowledgment.",
        category: "Branding",
        year: 2018,
        imageUrl: "/attached_assets/IN 2018 Logo Straight_1758615637413.png",
        tools: ["Illustrator", "Photoshop"],
        featured: false,
        clientName: "Primary Colours",
        projectType: "Event Branding"
      },
      {
        title: "Riley Bennett Egloff Racing",
        description: "High-energy racing logo design featuring checkered flags, wings, and Indianapolis 500 theming for professional racing team.",
        category: "Logo Design",
        year: 2016,
        imageUrl: "/attached_assets/Blue - RBE Indy 500 Design_1758615637429.png",
        tools: ["Illustrator", "Photoshop"],
        featured: true,
        clientName: "Riley Bennett Egloff",
        projectType: "Sports Branding"
      },
      {
        title: "Hoosier Boy Barbershop",
        description: "Traditional barbershop branding featuring Indiana cardinal bird with classic barber pole elements in vintage-inspired design.",
        category: "Logo Design",
        year: 2017,
        imageUrl: "/attached_assets/Fav_1758615637470.png",
        tools: ["Illustrator"],
        featured: false,
        clientName: "Hoosier Boy Barbershop",
        projectType: "Retail Branding"
      },
      {
        title: "Be Free Home and Life",
        description: "Modern lifestyle brand identity with clean typography and vibrant color blocking for home and life consulting services.",
        category: "Branding",
        year: 2020,
        imageUrl: "/attached_assets/BF MOGOGRAM final-01_1758615637484.png",
        tools: ["Illustrator", "InDesign"],
        featured: true,
        clientName: "Be Free Consulting",
        projectType: "Lifestyle Branding"
      },
      {
        title: "Circle City Kicks",
        description: "Urban sneaker marketplace branding featuring Indianapolis skyline silhouette with dynamic typography and street culture aesthetics.",
        category: "Logo Design",
        year: 2019,
        imageUrl: "/attached_assets/lOGO 7_1758615637517.jpg",
        tools: ["Illustrator", "Photoshop"],
        featured: false,
        clientName: "Circle City Kicks",
        projectType: "Retail Branding"
      },
      {
        title: "Herb's Secret Rub",
        description: "Bold culinary branding with portrait integration and flame effects for specialty spice and seasoning products.",
        category: "Digital Graphics",
        year: 2018,
        imageUrl: "/attached_assets/Herbs Rub 2_1758615637534.png",
        tools: ["Photoshop", "Illustrator"],
        featured: false,
        clientName: "Herb's Kitchen",
        projectType: "Product Branding"
      },
      {
        title: "Behr Pet Essentials",
        description: "Caring pet services logo combining dog and cat silhouettes with protective hands design emphasizing trust and compassion.",
        category: "Logo Design",
        year: 2020,
        imageUrl: "/attached_assets/big_1758615637549.png",
        tools: ["Illustrator"],
        featured: false,
        clientName: "Behr Pet Essentials",
        projectType: "Pet Services Branding"
      },
      {
        title: "Taco Pattern Design",
        description: "Playful repeating pattern design featuring stylized tacos for packaging, textile, or digital applications.",
        category: "Digital Graphics",
        year: 2019,
        imageUrl: "/attached_assets/PS_Pattern_1758615637333.png",
        tools: ["Illustrator", "Photoshop"],
        featured: false,
        clientName: "Personal Project",
        projectType: "Pattern Design"
      }
    ];

    projects.forEach(project => {
      const id = randomUUID();
      const designProject: DesignProject = {
        id,
        title: project.title,
        description: project.description || null,
        category: project.category,
        year: project.year,
        imageUrl: project.imageUrl,
        tools: project.tools || null,
        featured: project.featured ?? null,
        clientName: project.clientName || null,
        projectType: project.projectType || null,
      };
      this.designProjects.set(id, designProject);
    });
  }
}

export const storage = new MemStorage();
