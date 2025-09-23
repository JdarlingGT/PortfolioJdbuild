# Jacob Darling Portfolio

## Overview

A professional portfolio website for Jacob Darling, a marketing strategist and systems architect. The site showcases his unique hybrid skillset combining marketing strategy with technical implementation, targeting employers and hiring managers for Marketing Director and senior marketing strategist positions. Built as a modern single-page application with React components and professional UI design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a modern React-based architecture built on Vite for fast development and build processes. The frontend follows a component-driven design pattern with clear separation of concerns:

- **Component Structure**: Organized into logical sections (layout, pages, sections, ui) with reusable UI components built on shadcn/ui design system
- **Routing**: Client-side routing implemented with Wouter for lightweight navigation between portfolio pages
- **Styling**: Tailwind CSS with a custom design system using CSS variables for consistent theming and responsive design
- **State Management**: React Query for server state management and React hooks for local component state

### Backend Architecture  
Express.js server with TypeScript providing a foundation for future API endpoints and data management:

- **Server Framework**: Express.js with middleware for JSON parsing, request logging, and error handling
- **Development Setup**: Hot-reload development environment with Vite integration
- **Storage Interface**: Abstracted storage layer with in-memory implementation, designed to easily swap for database integration

### Database Design
Drizzle ORM configured for PostgreSQL with a clean schema definition approach:

- **ORM**: Drizzle with type-safe database operations and migrations
- **Schema**: Centralized schema definitions in shared directory for consistency between frontend and backend
- **Database**: PostgreSQL dialect with connection via DATABASE_URL environment variable

### Authentication & Security
Basic user model structure in place with extensible authentication patterns:

- **User Model**: Simple username/password schema with UUID primary keys
- **Security**: Prepared for session management with connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod schemas for runtime type validation and data integrity

### UI/UX Design System
Professional design system built on shadcn/ui components with custom branding:

- **Component Library**: Comprehensive set of accessible UI components (buttons, forms, navigation, modals)
- **Theme System**: CSS custom properties for consistent color scheme and typography
- **Responsive Design**: Mobile-first approach with responsive grid layouts
- **Animation**: Subtle transitions and hover effects for professional polish

## External Dependencies

### Core Framework Dependencies
- **React 18**: Modern React with hooks and concurrent features
- **Vite**: Fast build tool and development server with HMR
- **TypeScript**: Type safety across the entire application stack
- **Express.js**: Web server framework for backend API endpoints

### Database & ORM
- **Drizzle ORM**: Type-safe database operations and schema management
- **@neondatabase/serverless**: PostgreSQL driver optimized for serverless environments
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **shadcn/ui**: High-quality accessible component library built on Radix UI
- **Radix UI**: Primitive components for accessibility and customization
- **class-variance-authority**: Utility for managing CSS class variants

### Form Management & Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Runtime schema validation for forms and API data
- **@hookform/resolvers**: Integration between React Hook Form and Zod

### Development & Tooling
- **@tanstack/react-query**: Powerful data fetching and caching library
- **Wouter**: Minimalist client-side router for React applications
- **date-fns**: Modern JavaScript date utility library
- **Lucide React**: Beautiful icon library for React applications

### Replit Integration
- **@replit/vite-plugin-cartographer**: Development tooling for Replit environment
- **@replit/vite-plugin-dev-banner**: Development environment indicators
- **@replit/vite-plugin-runtime-error-modal**: Enhanced error handling during development