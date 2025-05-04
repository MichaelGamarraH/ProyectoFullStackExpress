# 📌 Proyecto Full Stack: Gestor de Tareas

Este proyecto es una aplicación Full Stack compuesta por un backend desarrollado con **Node.js + Express** y un frontend con **React + TypeScript**. Se utiliza **MySQL** como base de datos y permite crear, listar y actualizar tareas.

---

## ✅ Características

- Backend con Express y conexión a MySQL.
- Frontend en React + TypeScript.
- Gestión de tareas con operaciones CRUD.
- Uso de procedimientos almacenados.
- Código modular y limpio.
- Configuración local sencilla.

---

## 🛠️ Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu equipo:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MySQL](https://www.mysql.com/) (se recomienda [MySQL Workbench](https://www.mysql.com/products/workbench/))
- [Git](https://git-scm.com/)

---

## 🗄️ Configuración de la Base de Datos

1. Abre **MySQL Workbench** u otro cliente de tu preferencia.
2. Ejecuta el contenido del archivo `data.sql` ubicado en la raíz del proyecto.

   Este archivo contiene:
   - La creación de la base de datos `nodepruebadb`.
   - La tabla `tasks`.
   - Datos de ejemplo.
   - Procedimientos almacenados para insertar y actualizar tareas.

---

## Pasos para ejecutar proyecto
1. Clona el repositorio
   ```bash
   git clone https://github.com/MichaelGamarraH/ProyectoFullStackExpress.git

2. Abre MySQL Workbench y ejecuta el contenido del archivo data.sql

3. Entra a la carpeta del backend e instala dependencias
   ```bash
   cd Backend-nodejs
   npm install

4. Configura el archivo db.js con tus credenciales de MySQL

5. Inicia el servidor backend
   ```bash
   npm run dev

6. Abre una nueva terminal, entra al frontend e instala dependencias
   ```bash
   cd Frontend-react/tasks-project
   npm install

7. Inicia el servidor frontend
   ```bash
   npm run dev

