# Julio Villalobo - AI Transformation & Product Portfolio

Executive portfolio for **Julio Antonio Villalobo**, an AI Transformation and Product Leader focused on enterprise automation, AI-enabled platforms, digital transformation and RWA tokenization architecture.

## Positioning

This portfolio is designed as an evidence layer for executive and technical recruiting. It connects business outcomes with architecture, security, delivery discipline and clearly qualified metrics.

## Selected systems

### LexiaCode OS

Private AI-enabled CRM and commercial operations platform. The system includes 15+ operational modules, role-based controls and human-in-the-loop workflows developed across 25+ staged product, QA and security milestones.

**Stack:** React, Node.js, Express, Prisma, SQLite and Vite.

### Lexia Tokenization Platform

Private institutional B2B RWA platform foundation. Its architecture emphasizes two-layer tenant isolation, PostgreSQL Row-Level Security, least-privilege database roles and append-only auditability.

**Stack:** NestJS, Next.js, PostgreSQL, Redis, TypeORM and Docker.

### Institutional AI Modernization

Automation blueprints that translate Generative AI and LLM capabilities into structured operational routines with human review, reporting controls and stakeholder alignment.

## Architecture

```text
src/
├── App.jsx          # Accessible single-page portfolio
├── App.test.jsx     # Executive positioning and project smoke test
├── data.js          # Verifiable profile and case-study content
├── main.jsx         # React entry point
├── styles.css       # Responsive light/dark visual system
└── test/setup.js    # Vitest DOM assertions
```

## Local development

Requirements: Node.js 20.19 or newer.

```bash
npm ci
npm run dev
```

Run the full quality gate:

```bash
npm run validate
```

The validation command runs ESLint, Prettier, Vitest and the production build.

## Docker

```bash
docker build -t julio-villalobo-portfolio .
docker run --rm -p 8080:8080 julio-villalobo-portfolio
```

The container serves the portfolio at `http://localhost:8080/developerFolio/`.

## Professional links

- [GitHub](https://github.com/julitodk06)
- [LinkedIn](https://www.linkedin.com/in/julio-antonio-villalobo-770b22296)
- [LexiaCode](https://lexiacode.com)
- [Fundacion Fundatur](https://fundacionfundatur.org)

## Privacy and evidence policy

Core systems remain private. Public portfolio content exposes sanitized architecture, scope and delivery signals without publishing credentials, client data or proprietary business logic. The USD 2.5M figure is described only as aggregate potential project value and not recognized revenue.

## Repository history

This repository originated as a fork of the open-source [DeveloperFolio](https://github.com/saadpasta/developerFolio) template. The application layer was subsequently rewritten with React 19 and Vite 8; the original license is retained.
