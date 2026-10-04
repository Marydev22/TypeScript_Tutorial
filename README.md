# React + TypeScript - Ejercicio práctico de fundamentos del lenguaje

Este proyecto forma parte de un ejercicio práctico para aprender los fundamentos de TypeScript aplicado a React con Vite.

La aplicación sirve como base para explorar y practicar conceptos clave del tipado estático, la inferencia de tipos y la seguridad que TypeScript aporta al desarrollo frontend.

## Objetivo del ejercicio

Aprender a:

- definir y usar tipos básicos (`string`, `number`, `boolean`)
- trabajar con arrays y tuplas
- crear funciones tipadas con parámetros y valor de retorno
- manejar `null`, `undefined`, `any` y `unknown`
- comprender la inferencia de tipos en variables y constantes
- aplicar estos conceptos dentro de una pequeña app React

## Conceptos practicados

### Módulo 1

Se practican:

- inferencia y anotación explícita de tipos
- tipos básicos, arrays y tuplas
- funciones con parámetros y valor de retorno tipados
- manejo de `null`, `undefined`, `any` y `unknown`

### Módulo 2

Se practican:

- alias de tipos con `type` para definir la forma de objetos
- uniones de literales, por ejemplo `"suave" | "fuerte"`, para limitar valores posibles
- tipado de parámetros y resultados de funciones con tipos propios
- definición de contratos de objetos con `interface`
- extensión de interfaces con `extends` para reutilizar propiedades
- fusión de declaraciones de una misma interfaz para ampliar su forma
- uso de tipos e interfaces con ejemplos de recetas y la analogia de la maquina de café

## Estructura principal

- `src/pages/Modulo1Page.tsx`: contiene los ejemplos prácticos de fundamentos de TypeScript
- `src/pages/Modulo2Page.tsx`: contiene ejemplos de alias de tipos e interfaces
- `src/utils/CalcularDanio.ts`: función pura que calcula daño con tipado
- `src/pages/HomePage.tsx`: página principal con navegación entre módulos
- `src/routers/router.tsx`: configuración de rutas

## Cómo ejecutar el proyecto

1. Instalar dependencias:

```bash
npm install
```

2. Iniciar la aplicación en modo desarrollo:

```bash
npm run dev
```

3. Abrir la URL que indique Vite en el terminal, normalmente:

```bash
http://localhost:5173/
```

## Tecnologías usadas

- React
- TypeScript
- Vite
- React Router

## Resumen

Este ejercicio busca comprender que TypeScript no solo añade sintaxis, sino que ayuda a detectar errores antes de ejecutar la app, mejorar la mantenibilidad del código y facilitar el trabajo en proyectos React más grandes y complejos.
