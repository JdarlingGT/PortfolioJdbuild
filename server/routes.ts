import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { chatHandler } from "./api/chat";

export async function registerRoutes(app: Express): Promise<Server> {
  // Chat API endpoint
  app.post("/api/chat", chatHandler);

  const httpServer = createServer(app);

  return httpServer;
}
