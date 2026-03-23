# Panadería Somontano
> **README: Landing Page Component - Barbastro, Huesca**

Interfaz principal desarrollada en **React** bajo una arquitectura modular, enfocada en la exhibición de procesos artesanales y la gestión eficiente de información local para el consumidor.

---

## ◈ Estructura del Documento

| Identidad y Catálogo | Operaciones y Datos |
| :--- | :--- |
| **Hero & Propuesta de Valor:** Procesos lentos y materia prima local. | **Conversión:** Reservas online y gestión de mesas. |
| **Especialidades:** Hogaza, Trenza de Almudévar y Empanada. | **Información:** Horarios y cronograma de horneado. |

---

## ◈ Requisitos y Dependencias

| Componente | Origen (`@/components/...`) | Función |
| :--- | :--- | :--- |
| **Navbar** | `design-system/navbar` | Navegación global interactiva. |
| **Hero** | `design-system/Hero` | Impacto visual y misión de marca. |
| **ServiceCard** | `design-system/serviceCard` | Grid de productos y precios. |
| **Button** | `design-system/Button` | Variantes: primary, outline, secondary. |

---

## ◈ Especificaciones Técnicas

```yaml
STYLING: Tailwind CSS / Responsive Grid (1 a 3 columnas)
PALETTE: #A76F22 (Gold) | #ECD1B4 (Wheat) | Gray-900
A11Y: ARIA labels, Role defined images, Focus-visible states.
```

---

## ◈ Entidades de Datos

Actualmente integrados en JSX. Se recomienda migración a `constants.js` o integración con CMS para escalabilidad.

`Producto: Título, Precio, Variante` · `Horario: Día, Franja` · `Horneado: Tipo de Pan, Hora Salida`
