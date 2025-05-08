const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();
const port = 5000;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Crear la carpeta 'uploads' si no existe
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Configuración de multer para almacenar imágenes en la carpeta 'uploads'
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Middleware
app.use(cors());
app.use(express.json());

// Servir archivos estáticos desde la carpeta 'uploads'
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola, desde el servidor!');
});

// Obtener todas las rutinas desde la base de datos
app.get('/api/rutinas', async (req, res) => {
  try {
    const rutinas = await prisma.rutina.findMany({
      include: {
        ejercicios: {
          include: {
            ejercicio: true
          }
        }
      }
    });
    res.json(rutinas);
  } catch (error) {
    console.error('Error al obtener rutinas:', error);
    res.status(500).json({ error: 'Error al obtener rutinas' });
  }
});

// Ruta para registrar usuarios
app.post("/register", async (req, res) => {
  const { nombre, email, contraseña } = req.body;

  if (!contraseña || contraseña.trim() === "") {
    return res.status(400).json({ error: "La contraseña es requerida." });
  }

  try {
    // Verificar si el usuario ya existe
    const existingUser = await prisma.usuario.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ error: "El usuario ya está registrado." });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    // Crear el usuario en la base de datos
    const newUser = await prisma.usuario.create({
      data: {
        nombre,
        email,
        contraseña: hashedPassword,
      },
    });

    // Modifico la respuesta para excluir la contraseña
    res.status(201).json({
      message: "Usuario registrado con éxito.",
      user: {
        id: newUser.id,
        nombre: newUser.nombre,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("Error al registrar el usuario:", error);
    res.status(500).json({ error: "Error interno del servidor." });
  }
});

// Ruta para iniciar sesión
app.post("/login", async (req, res) => {
  const { email, contraseña } = req.body;

  try {
    // Verificar si el usuario existe
    const user = await prisma.usuario.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado." });
    }

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(contraseña, user.contraseña);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Contraseña incorrecta." });
    }

    // Generar un token de sesión (puedes usar JWT aquí si lo deseas)
    const token = "fake-jwt-token"; // Reemplaza esto con una implementación real de JWT

    res.status(200).json({
      message: "Inicio de sesión exitoso.",
      token,
      user: {
        id: user.id,
        nombre: user.nombre,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error en el inicio de sesión:", error);
    res.status(500).json({ error: "Error interno del servidor." });
  }
});

// Ruta para subir una foto de perfil y actualizar la base de datos
app.post("/upload-profile-pic", upload.single("profilePic"), async (req, res) => {
  const userId = req.body.userId; // Asegúrate de que el cliente envíe el ID del usuario

  if (!userId) {
    return res.status(400).json({ error: "El ID del usuario es requerido." });
  }

  if (!req.file) {
    return res.status(400).json({ error: "No se subió ninguna imagen." });
  }

  const imageUrl = `/uploads/${req.file.filename}`;

  try {
    // Obtener la URL de la foto anterior
    const user = await prisma.usuario.findUnique({
      where: { id: parseInt(userId) },
    });

    if (user && user.fotoUrl) {
      const oldPhotoPath = path.join(__dirname, user.fotoUrl);
      if (fs.existsSync(oldPhotoPath)) {
        fs.unlinkSync(oldPhotoPath); // Eliminar la foto anterior
      }
    }

    // Actualizar la URL de la foto en la base de datos
    await prisma.usuario.update({
      where: { id: parseInt(userId) },
      data: { fotoUrl: imageUrl },
    });

    res.status(200).json({ message: "Imagen subida y actualizada con éxito.", imageUrl });
  } catch (error) {
    console.error("Error al actualizar la foto de perfil:", error);
    res.status(500).json({ error: "Error interno del servidor." });
  }
});

// Ruta para obtener los datos del perfil del usuario
app.get("/api/profile/:id", async (req, res) => {
  const userId = parseInt(req.params.id);

  try {
    const user = await prisma.usuario.findUnique({
      where: { id: userId },
      select: {
        id: true,
        nombre: true,
        email: true,
        fotoUrl: true,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado." });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error al obtener el perfil del usuario:", error);
    res.status(500).json({ error: "Error interno del servidor." });
  }
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
