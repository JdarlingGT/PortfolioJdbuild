import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { chatHandler } from "./api/chat";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Chat API endpoint
  app.post("/api/chat", chatHandler);

  // Design Projects API endpoints
  app.get("/api/design-projects", async (req, res) => {
    try {
      const category = req.query.category as string | undefined;
      const projects = await storage.getDesignProjects(category);
      res.json(projects);
    } catch (error) {
      console.error('Error fetching design projects:', error);
      res.status(500).json({ error: 'Failed to fetch design projects' });
    }
  });

  app.get("/api/design-projects/featured", async (req, res) => {
    try {
      const projects = await storage.getFeaturedDesignProjects();
      res.json(projects);
    } catch (error) {
      console.error('Error fetching featured design projects:', error);
      res.status(500).json({ error: 'Failed to fetch featured design projects' });
    }
  });

  app.get("/api/design-projects/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const project = await storage.getDesignProject(id);
      
      if (!project) {
        return res.status(404).json({ error: 'Design project not found' });
      }
      
      res.json(project);
    } catch (error) {
      console.error('Error fetching design project:', error);
      res.status(500).json({ error: 'Failed to fetch design project' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
