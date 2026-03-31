# PLANS.md

## Project 1: Next.js Fullstack - AI-Powered Collaborative Kanban
### The Concept
A high-performance project management tool that features real-time updates and AI-driven task estimation. This project showcases your ability to handle complex state, real-time synchronization, and modern AI integration.

**Tech Stack Breakdown:**

* **Internal / Local (Everything runs in your dev environment):**
    * **Runtime:** Node.js 22 or 24 (LTS).
    * **Framework:** Next.js 16.2 (App Router, Server Actions, PPR).
    * **Database:** PostgreSQL (running via Docker).
    * **Caching/PubSub:** Redis (running via Docker for real-time state).
    * **Styling:** Tailwind CSS + Framer Motion.
    * **ORM:** Prisma or Drizzle.

* **External / SaaS (Third-party APIs):**
    * **Authentication:** Clerk or Auth0 (for enterprise-grade user management).
    * **AI Engine:** OpenAI API or Anthropic (for generating task descriptions/estimates).
    * **File Storage:** Uploadthing or AWS S3.

**Local Requirements:**
* Docker Desktop (to run PostgreSQL and Redis containers).
* Node.js / pnpm.

---

## Project 2: Java Spring Boot - Event-Driven Fintech Ledger
### The Concept
A distributed banking backend that processes transactions between accounts using a microservices architecture. It focuses on the "Saga Pattern" to ensure data consistency across services without using slow global locks.



**Tech Stack Breakdown:**

* **Internal / Local (Dockerized Microservices):**
    * **Runtime:** JDK 25.
    * **Framework:** Spring Boot 4.0.
    * **Messaging:** Apache Kafka (for asynchronous transaction events).
    * **Service Discovery:** Netflix Eureka or Spring Cloud Gateway.
    * **Databases:** PostgreSQL (for Account Service) and MongoDB (for Transaction History Service).
    * **Observability:** Prometheus and Grafana (running via Docker).

* **External / SaaS (Third-party APIs):**
    * **Email Service:** Resend or SendGrid (to send transaction receipts).
    * **Mock Banking:** Plaid Sandbox (to simulate external bank connections).

**Local Requirements:**
* Docker Compose (to orchestrate Kafka, Zookeeper, Postgres, and Mongo).
* Maven or Gradle.
* JDK 25+.

---

## Project 3: .NET 10 - High-Performance IoT Telemetry Hub
### The Concept
A backend system capable of ingesting thousands of "pings" per second from simulated IoT devices (like smart meters). It uses the CQRS pattern to separate high-frequency writes from dashboard queries.



**Tech Stack Breakdown:**

* **Internal / Local (High-performance services):**
    * **Runtime:** .NET 10 SDK.
    * **Architecture:** Clean Architecture with MediatR.
    * **Communication:** gRPC (for internal service-to-service speed).
    * **Real-time:** SignalR (for pushing live data to the frontend).
    * **Database:** SQL Server (Write side) and Redis (Read side/Cache).
    * **Broker:** RabbitMQ (for task queuing).

* **External / SaaS (Third-party APIs):**
    * **Maps:** Mapbox or OpenStreetMap API (to visualize device locations).
    * **Error Tracking:** Sentry.

**Local Requirements:**
* Docker (specifically for SQL Server on Linux and RabbitMQ).
* .NET 10 SDK.
* Visual Studio 2025 or VS Code.