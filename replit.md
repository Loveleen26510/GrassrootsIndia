# Grassroots India NGO Website

## Overview

This is a web application for Grassroots India, a Section 8 not-for-profit organization dedicated to charitable activities and holistic community development. The platform serves as a digital presence for the NGO, focusing on community empowerment, education, healthcare, and social welfare initiatives across India.

The application is built as a full-stack web solution with a React-based frontend and an Express backend, designed to facilitate donor engagement, showcase the organization's mission and impact, and provide an interactive chatbot for visitor inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Tooling:**
- **React** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast builds and hot module replacement
- **Wouter** for lightweight client-side routing
- **TanStack Query** (React Query) for server state management and API data fetching

**UI Component System:**
- **shadcn/ui** component library based on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- Design system follows "New York" style variant from shadcn
- Custom color palette with CSS variables for theming:
  - Primary blue (#003366) for trust and credibility
  - Accent orange (#F39C12) for calls-to-action
  - Neutral grays for text and backgrounds
- Typography using Montserrat (headings) and Lato (body text) via Google Fonts

**Design Philosophy:**
- Trust-oriented design inspired by professional NGO websites
- Accessibility-first approach with high contrast ratios and semantic HTML
- Responsive layout using Bootstrap's 12-column grid system (as referenced in design guidelines)
- Component-based architecture for reusability and maintainability

### Backend Architecture

**Server Framework:**
- **Express.js** running on Node.js with TypeScript
- ESM (ES Modules) for modern JavaScript module system
- Custom middleware for request logging and JSON response capture
- Raw body buffering for webhook support

**Development Setup:**
- Development mode uses `tsx` for TypeScript execution without compilation
- Production build uses `esbuild` for fast bundling
- Vite integration in development for seamless frontend-backend development experience

**API Structure:**
- RESTful API endpoints under `/api` prefix
- Chatbot endpoint (`/api/chatbot`) for AI-powered visitor interactions
- Request/response logging middleware for debugging and monitoring

**AI Integration:**
- **OpenAI API** integration for chatbot functionality
- Support for both OpenAI and OpenRouter API providers
- Context-aware chatbot with organization-specific knowledge about Grassroots India's mission, vision, and programs
- Streaming responses not currently implemented (standard completion API used)

### Data Storage Solutions

**Database:**
- **PostgreSQL** configured as the primary database (via `@neondatabase/serverless`)
- **Drizzle ORM** for type-safe database operations and schema management
- Connection pooling through Neon's serverless driver for scalability

**Schema Design:**
- User authentication schema with username/password fields
- UUID-based primary keys using PostgreSQL's `gen_random_uuid()`
- Zod integration for runtime validation of insert operations

**Migration Strategy:**
- Drizzle Kit for schema migrations
- Migration files stored in `/migrations` directory
- Database push command (`db:push`) for applying schema changes

**In-Memory Storage:**
- `MemStorage` class provides in-memory user storage as a fallback/development option
- Map-based storage for rapid prototyping without database dependency

### Authentication & Authorization

**Current Implementation:**
- Basic user schema with username and password fields
- No active session management or authentication middleware implemented yet
- Infrastructure prepared for future authentication implementation

**Session Management (Prepared):**
- `connect-pg-simple` dependency included for PostgreSQL-backed session storage
- Express session middleware not yet configured

### External Dependencies

**Third-Party Services:**
- **OpenAI API / OpenRouter**: AI chatbot service for visitor engagement
  - Requires `OPENAI_API_KEY` environment variable
  - Fallback error handling when API key is not configured
  - Custom system prompts tailored to Grassroots India's mission

- **Neon Database**: Serverless PostgreSQL hosting
  - Requires `DATABASE_URL` environment variable
  - Throws error if database is not provisioned

**CDN Dependencies (referenced in design guidelines):**
- Bootstrap 5.3.2 CSS framework
- Font Awesome 6.5.1 for icons
- Google Fonts for typography (Montserrat, Lato)

**Development Tools:**
- Replit-specific plugins for error overlays, cartographer, and dev banners
- PostCSS with Autoprefixer for CSS processing

**UI Component Libraries:**
- Extensive Radix UI primitives for accessible components
- `vaul` for drawer components
- `embla-carousel-react` for carousel functionality
- `cmdk` for command menu patterns
- `react-day-picker` for date selection
- `recharts` for data visualization (chart components)

**Form Handling:**
- React Hook Form for form state management
- Hookform Resolvers for validation integration
- Drizzle-Zod for database schema validation

**Utilities:**
- `class-variance-authority` for component variant management
- `clsx` and `tailwind-merge` for conditional class composition
- `date-fns` for date manipulation
- `nanoid` for unique ID generation

**Build & Development:**
- TypeScript for type safety across the stack
- ESBuild for production server bundling
- Vite for frontend development and building