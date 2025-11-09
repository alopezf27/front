# 🧩 Inventory Backend

Backend del sistema **Inventory App**, desarrollado en **Spring Boot 3 + Java 21 + PostgreSQL + Docker Compose**.  
Administra productos, proveedores, movimientos de entrada/salida, existencias por bodega y control de inventario.

---

## 🚀 Tecnologías utilizadas

- **Java 21**
- **Spring Boot 3.3**
  - Spring Data JPA
  - Spring Web
  - Flyway
- **PostgreSQL 16**
- **Docker & Docker Compose**
- **Maven 3.9**
- **HikariCP** para conexión de base de datos
- **Lombok**

---

## 🗂️ Estructura del proyecto

backend/
├── src/
│ ├── main/
│ │ ├── java/com/acme/inventory/
│ │ │ ├── model/ # Entidades (Company, Product, Movement, etc.)
│ │ │ ├── repository/ # Repositorios JPA
│ │ │ ├── service/ # Lógica de negocio
│ │ │ ├── controller/ # Controladores REST
│ │ │ └── dto/ # Clases DTO para API
│ │ └── resources/
│ │ ├── db/migration/ # Scripts Flyway
│ │ ├── application.yml # Configuración
│ │ └── logback.xml # Logging
├── pom.xml
├── Dockerfile
├── docker-compose.yml
└── README.md


