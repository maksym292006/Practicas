<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<style>
    :root {
        --primary: #A76F22;
        --accent: #ECD1B4;
        --bg: #ffffff;
        --text: #1a1a1a;
        --secondary-text: #4a4a4a;
        --border: #e2e8f0;
    }

    body {
        font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        line-height: 1.6;
        color: var(--text);
        max-width: 900px;
        margin: 40px auto;
        padding: 0 20px;
        background-color: #fcfcfc;
    }

    .container {
        background: var(--bg);
        padding: 40px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        border-top: 6px solid var(--primary);
    }

    h1 {
        color: var(--primary);
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
        border-bottom: 2px solid var(--accent);
        padding-bottom: 10px;
    }

    .subtitle {
        color: var(--secondary-text);
        font-size: 1.1rem;
        margin-bottom: 2rem;
        font-style: italic;
    }

    h2 {
        color: var(--primary);
        font-size: 1.5rem;
        margin-top: 2rem;
        display: flex;
        align-items: center;
    }

    h2::before {
        content: "◈";
        margin-right: 10px;
        font-size: 1rem;
    }

    p { margin-bottom: 1rem; }

    .grid-sections {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin: 20px 0;
    }

    .card {
        background: #fffaf5;
        padding: 15px;
        border-left: 4px solid var(--primary);
        border-radius: 4px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
        font-size: 0.9rem;
    }

    th {
        background-color: var(--primary);
        color: white;
        text-align: left;
        padding: 12px;
    }

    td {
        padding: 10px;
        border-bottom: 1px solid var(--border);
    }

    tr:nth-child(even) { background-color: #fdfdfd; }

    .badge {
        display: inline-block;
        padding: 4px 12px;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: bold;
        background: var(--accent);
        color: var(--primary);
        margin-right: 5px;
    }

    .tech-specs {
        background: #1a202c;
        color: #e2e8f0;
        padding: 25px;
        border-radius: 8px;
        font-family: 'Courier New', Courier, monospace;
    }

    .tech-specs b { color: var(--accent); }

    ul { padding-left: 20px; }
    li { margin-bottom: 8px; }

</style>
</head>
<body>

<div class="container">
    <h1>Panadería Somontano</h1>
    <p class="subtitle">README: Landing Page Component - Barbastro, Huesca</p>

    <p>Interfaz principal desarrollada en <b>React</b> bajo una arquitectura modular, enfocada en la exhibición de procesos artesanales y la gestión eficiente de información local para el consumidor.</p>

    <h2>Estructura del Documento</h2>
    <div class="grid-sections">
        <div class="card">
            <b>Identidad y Catálogo</b>
            <ul>
                <li>Hero & Propuesta de Valor: Procesos lentos y materia prima local.</li>
                <li>Especialidades: Hogaza, Trenza de Almudévar y Empanada.</li>
            </ul>
        </div>
        <div class="card">
            <b>Operaciones y Datos</b>
            <ul>
                <li>Conversión: Reservas online y gestión de mesas.</li>
                <li>Información: Horarios y cronograma de horneado.</li>
            </ul>
        </div>
    </div>

    <h2>Requisitos y Dependencias</h2>
    <table>
        <thead>
            <tr>
                <th>Componente</th>
                <th>Origen (@/components/...)</th>
                <th>Función</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><b>Navbar</b></td>
                <td>design-system/navbar</td>
                <td>Navegación global interactiva.</td>
            </tr>
            <tr>
                <td><b>Hero</b></td>
                <td>design-system/Hero</td>
                <td>Impacto visual y misión de marca.</td>
            </tr>
            <tr>
                <td><b>ServiceCard</b></td>
                <td>design-system/serviceCard</td>
                <td>Grid de productos y precios.</td>
            </tr>
            <tr>
                <td><b>Button</b></td>
                <td>design-system/Button</td>
                <td>Variantes: primary, outline, secondary.</td>
            </tr>
        </tbody>
    </table>

    <h2>Especificaciones Técnicas</h2>
    <div class="tech-specs">
        <p><b>STYLING:</b> Tailwind CSS / Responsive Grid (1 a 3 columnas)</p>
        <p><b>PALETTE:</b> #A76F22 (Gold) | #ECD1B4 (Wheat) | Gray-900</p>
        <p><b>A11Y:</b> ARIA labels, Role defined images, Focus-visible states.</p>
    </div>

    <h2>Entidades de Datos</h2>
    <p>Actualmente integrados en JSX. Se recomienda migración a <code>constants.js</code> o integración con CMS para escalabilidad.</p>
    
    <div>
        <span class="badge">Producto: Título, Precio, Variante</span>
        <span class="badge">Horario: Día, Franja</span>
        <span class="badge">Horneado: Tipo de Pan, Hora Salida</span>
    </div>
</div>

</body>
</html>
