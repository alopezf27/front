
---

## 💻 **README - Frontend (React + Vite)**

```markdown
# 💻 Inventory Frontend

Interfaz web del sistema de inventario empresarial.  
Permite gestionar productos, proveedores y movimientos en tiempo real.

---

## ⚙️ Tecnologías utilizadas

- **React 18 + Vite**
- **TypeScript**
- **Axios** para peticiones HTTP
- **React Router DOM**
- **Tailwind CSS**
- **Vite** (dev server y build)
- **ESLint + Prettier**

---

## 🗂️ Estructura del proyecto



frontend/
├── src/
│ ├── api/ # Servicios Axios
│ ├── components/ # Componentes reutilizables
│ ├── pages/ # Vistas principales
│ ├── hooks/ # Custom hooks
│ ├── types/ # Tipos TS compartidos
│ ├── App.tsx # App principal
│ ├── main.tsx # Punto de entrada
│ └── index.css # Estilos globales
├── public/
├── package.json
├── vite.config.ts
└── README.md


---

## ⚙️ Configuración del entorno

Crea un archivo `.env` en la raíz del proyecto:

```bash
VITE_API_URL=http://localhost:8080/api

🚀 Ejecución local
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev


Abrir en el navegador: http://localhost:5173

🧱 Construir para producción
npm run build


Los archivos listos para producción se generarán en /dist.

📦 Estructura de UI (páginas)
Página	Ruta	Descripción
Productos	/products	Listado y búsqueda por SKU o nombre
Proveedores	/suppliers	Gestión básica de proveedores
Movimientos	/movements	Registro y consulta de entradas/salidas
Inventario	/inventory	Existencias por bodega y producto
🔗 Integración con el backend

Las peticiones se hacen vía Axios, tomando la URL base desde .env:

import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default api;


Ejemplo:

const { data } = await api.get("/products");

🧩 Scripts disponibles
Comando	Descripción
npm run dev	Servidor de desarrollo
npm run build	Compila la app
npm run lint	Linter de código
