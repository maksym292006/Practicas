# Practicas - Next.js Project
> **README: Configuración para desarrollo de prácticas de programación y desarrollo web.**

Este repositorio contiene un proyecto desarrollado con **Next.js**, optimizado para la implementación de arquitecturas modernas y escalables.

---

## Estructura del Proyecto

| Directorio / Archivo | Función |
| :--- | :--- |
| `/src/app` | Rutas y componentes bajo arquitectura App Router. |
| `/public` | Gestión de recursos estáticos y assets. |
| `next.config.ts` | Parámetros de configuración del framework. |
| `tsconfig.json` | Definiciones y reglas de TypeScript. |

---

## Tecnologías Principales

| Stack | Implementación |
| :--- | :--- |
| **Framework** | Next.js (App Router) |
| **Lenguaje** | TypeScript |
| **Estilos** | PostCSS / CSS |
| **Linting** | ESLint |

---

## Especificaciones de Ejecución

```bash
# Clonar repositorio
git clone https://github.com/maksym292006/Practicas.git
cd Practicas

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

---

## Notas de Desarrollo

* **Acceso Local:** El entorno se despliega por defecto en `http://localhost:3000`.
* **HMR:** La edición del archivo `src/app/page.tsx` activa el Hot Module Replacement de forma automática.
* **Despliegue:** Configurado para integración nativa con la plataforma Vercel.

---

## Requisitos de Entorno

* **Runtime:** Node.js (Versión LTS recomendada).
* **Gestores compatibles:** npm, yarn, pnpm o bun.
