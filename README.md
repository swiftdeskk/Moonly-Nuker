# 🌙 Moonly Nuker

Automatiza acciones masivas en servidores de Discord: creación y eliminación de canales, roles, stickers, baneos, y más.

> 🚨 Este bot es solo para fines educativos y de prueba en servidores propios o con permiso. No nos hacemos responsables del mal uso.

---

## 📌 Características

- 📁 Crear múltiples canales, roles, emojis y stickers
- 🧹 Eliminar todos los canales, roles, emojis y stickers
- 🦶 Expulsar o banear a todos los miembros
- 🔔 Menciones masivas con mensajes personalizados
- 🎨 Consola con ASCII personalizado y salida colorida
- ⚠️ Detección de token inválido
- 🛡 Verificación automática de permisos

---

## 🛠 Requisitos

- Node.js (v16.6 o superior recomendado)
- Discord bot token
- Permisos de administrador en el servidor

---

## 📥 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/swiftdeskk/moonly-nuker.git
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo `config.json` si es que no lo esta en la raíz del proyecto con este formato:

   ```json
   {
     "token": "TU_TOKEN_AQUÍ",
     "prefix": "!",
     "userID": "TU_ID_DE_USUARIO",
     "disableEveryone": false
   }
   ```

4. Inicia el bot:

   ```bash
   node index.js
   ```
   
---

## 🧑‍💻 Autor

**swiftdeskk**

* Instagram: [juztswift](https://instagram.com/juztswift)
* Web: [Moonlygg.com](https://Moonlygg.com)

---

## ⚠️ Aviso legal

Este proyecto fue desarrollado con fines **educativos y experimentales**.
El uso de este código en servidores sin consentimiento viola los términos de Discord.
**Moonly y swiftdeskk no se responsabilizan por su mal uso.**
