import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const designProjects = pgTable("design_projects", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description"),
  category: text("category").notNull(),
  year: integer("year").notNull(),
  imageUrl: text("image_url").notNull(),
  tools: text("tools").array(),
  featured: boolean("featured").default(false),
  clientName: text("client_name"),
  projectType: text("project_type"),
});

export const insertDesignProjectSchema = createInsertSchema(designProjects).omit({
  id: true,
});

export type InsertDesignProject = z.infer<typeof insertDesignProjectSchema>;
export type DesignProject = typeof designProjects.$inferSelect;
