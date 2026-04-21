# Design System — Proyecto

## Componentes

---

### ServiceCard
Tarjeta para mostrar un servicio con icono, título y descripción.

**Props:**
| Prop        | Tipo            | Obligatorio |
|-------------|-----------------|-------------|
| title       | string          | ✅          |
| description | string          | ✅          |
| icon        | React.ReactNode | ❌          |

**Ejemplo:**
```tsx
<ServiceCard
  icon={<Droplets size={24} />}
  title="Cambio de aceite"
  description="Sustitución del aceite del motor. 65,50€"
/>
```

---

### Button
Botón reutilizable con variantes de estilo y tamaño.

**Props:**
| Prop    | Opciones                                          | Por defecto |
|---------|---------------------------------------------------|-------------|
| variant | default, outline, secondary, ghost, destructive, link, prueba | default |
| size    | xs, sm, default, lg, icon                         | default     |

**Ejemplo:**
```tsx
<Button variant="default" size="lg">
  Reservar cita
</Button>
```

---

### BotonLink
Botón con navegación usando Next.js Link.

**Props:**
| Prop    | Tipo                                        | Obligatorio |
|---------|---------------------------------------------|-------------|
| link    | string                                      | ✅          |
| context | string                                      | ✅          |
| variant | default, white, overlined, overlined2       | ❌          |

**Ejemplo:**
```tsx
<BotonLink
  link="/contact"
  context="Contactar"
  variant="overlined2"
/>
```

---

### BotonToggle
Botón con estado activo/inactivo. Componente cliente.

**Sin props.** Gestiona su propio estado interno.

**Ejemplo:**
```tsx
<BotonToggle />
```

---

### Hero
Sección de bienvenida con título, subtítulo y botón.

**Sin props.** Editar el contenido directamente en el componente.

**Ejemplo:**
```tsx
<Hero />
```

---

### Footer
Pie de página con links y copyright.

**Sin props.** Editar el contenido directamente en el componente.

**Ejemplo:**
```tsx
<Footer />
```

---

### Tag
Etiqueta visual de texto con borde redondeado.

**Props:**
| Prop    | Tipo   | Obligatorio |
|---------|--------|-------------|
| context | string | ✅          |

**Ejemplo:**
```tsx
<Tag context="Nuevo" />
```

---

### TCard
Tarjeta de paso numerado con título y descripción.

**Props:**
| Prop    | Tipo   | Obligatorio |
|---------|--------|-------------|
| nStep   | string | ✅          |
| title   | string | ✅          |
| context | string | ✅          |

**Ejemplo:**
```tsx
<TCard
  nStep="01"
  title="Elige tu servicio"
  context="Selecciona el servicio que necesitas."
/>
```