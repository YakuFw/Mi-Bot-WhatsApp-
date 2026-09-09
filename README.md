# 🦈 Yaku WhatsApp Bot

Bot profesional para administración, moderación y utilidades en grupos de WhatsApp, construido con **Baileys + TypeScript**.

> Proyecto orientado a administradores de comunidades. La configuración y las funciones disponibles dependen de las variables de entorno y de los servicios externos configurados.

## ✨ Características

### 🛡️ Administración y moderación
- `!kick`, `!ban`, `!unban`
- `!warn`, `!warnings`, `!resetwarn`
- `!promote`, `!demote`
- Sistema de advertencias configurable.
- Baneos permanentes con control de reingreso.
- Slowmode por grupo.
- Eliminación y auditoría de mensajes/moderación.
- Protección automática contra enlaces no autorizados y flood.

### 🤖 Inteligencia artificial
- Moderación contextual de publicidad y ventas.
- Detección de contenido inapropiado en imágenes y stickers cuando el filtro IA está habilitado.
- Chat con IA mediante `!ia`.
- Generación de imágenes mediante `!imagine`.
- Traducción mediante IA.

### 🎮 Comunidad y utilidades
- Sistema de XP, niveles y ranking.
- Perfiles y estadísticas de usuarios.
- Mensajes de bienvenida y despedida personalizables.
- Stickers e imágenes.
- Encuestas y recordatorios.
- Clima, dado y moneda.
- Gestión y distribución de archivos.
- Descargas de contenido configuradas por el administrador.

### 🔐 Módulo de configuraciones VPN
Incluye herramientas para procesar determinados formatos de configuraciones VPN compatibles con el proyecto, mediante los comandos disponibles en el bot.

Formatos y servicios contemplados por la implementación actual:
- HTTP Custom (`.hc`)
- HTTP Injector (`.ehi`)
- NPV Tunnel (`.npv`, `.npvt`)
- Dark Tunnel
- SSC Custom

> Usa estas funciones únicamente con archivos y configuraciones que tengas autorización para procesar.

## 📋 Requisitos

- **Node.js 20+ LTS**
- **npm 9+**
- **Python 3.8+** y `pip` para el módulo de configuraciones VPN
- Una cuenta de WhatsApp para vincular el bot
- API de IA si deseas utilizar las funciones que dependen de IA

## 🚀 Instalación

### 1. Clonar el proyecto

```bash
git clone https://github.com/YakuFw/Mi-Bot-WhatsApp-.git
cd Mi-Bot-WhatsApp-
```

### 2. Instalar Node.js y Python (Ubuntu/VPS)

Si el servidor todavía no cuenta con Node.js 20:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs python3-pip python3-venv
```

### 3. Instalar dependencias

```bash
npm install
```

Para las herramientas Python:

```bash
python3 -m venv scripts/decryption/venv
./scripts/decryption/venv/bin/pip install pycryptodome argon2-cffi msgpack
```

### 4. Configurar variables de entorno

```bash
cp .env.example .env
nano .env
```

Configuración mínima recomendada:

```env
BOT_PREFIX=!
MAX_WARNINGS=4
OWNER_NUMBER=
NODE_ENV=development
```

### 5. Configurar IA (opcional)

Puedes utilizar Gemini o un proveedor compatible con la API de OpenAI.

**Gemini:**

```env
GEMINI_API_KEY=tu_clave
```

**Proveedor OpenAI-compatible:**

```env
OPENAI_API_KEY=tu_clave
OPENAI_BASE_URL=https://api.groq.com/openai/v1
OPENAI_MODEL=openai/gpt-oss-120b
```

Configura solamente el proveedor que vayas a utilizar.

### 6. Iniciar en desarrollo

```bash
npm run dev
```

A continuación, vincula WhatsApp desde **Dispositivos vinculados → Vincular dispositivo** utilizando el código QR mostrado por el bot.

## ⚙️ Variables de entorno

| Variable | Descripción | Ejemplo |
|---|---|---|
| `BOT_PREFIX` | Prefijo de comandos | `!` |
| `MAX_WARNINGS` | Faltas antes de la expulsión automática | `4` |
| `OWNER_NUMBER` | Número del propietario con código de país | `519XXXXXXXX` |
| `AUTO_REPLY_MSG` | Respuesta automática en chats privados | Texto libre |
| `GEMINI_API_KEY` | Clave de Gemini | `...` |
| `OPENAI_API_KEY` | Clave de proveedor compatible | `...` |
| `OPENAI_BASE_URL` | Endpoint compatible | `https://...` |
| `OPENAI_MODEL` | Modelo de IA | `...` |
| `NODE_ENV` | Entorno de ejecución | `development` / `production` |
| `PANEL_PORT` | Puerto del panel web | `3001` |
| `PANEL_USER` | Usuario del panel | `admin` |
| `PANEL_PASS` | Contraseña del panel | `...` |
| `YOUTUBE_PROXY` | Proxy SOCKS5 opcional para descargas | vacío o `socks5://host:puerto` |

**Importante:** no publiques tu archivo `.env`, claves de API, contraseñas ni credenciales de WhatsApp.

## 🧰 Comandos

### Administración — solo administradores

| Comando | Descripción |
|---|---|
| `!kick @user` | Expulsar miembro |
| `!ban @user` | Expulsar y banear permanentemente |
| `!unban @user` | Quitar un ban permanente |
| `!banlist` | Mostrar usuarios baneados |
| `!mute @user Xm` | Silenciar durante un periodo |
| `!unmute @user` | Quitar el silencio |
| `!warn @user [razón]` | Aplicar una advertencia |
| `!warnings @user` | Consultar advertencias |
| `!resetwarn @user` | Restablecer advertencias |
| `!promote @user` | Convertir en administrador |
| `!demote @user` | Quitar permisos de administrador |
| `!link` | Mostrar enlace de invitación |
| `!tagall [msg]` | Mencionar a los miembros |
| `!del` | Eliminar un mensaje respondiéndolo |
| `!status` | Mostrar estado y uso de memoria |
| `!setarchivo [nombre]` | Guardar un archivo respondiendo a él |
| `!delarchivo [id]` | Eliminar un archivo por ID |
| `!archivos` | Listar archivos disponibles |
| `!slowmode [tiempo]` | Configurar límite de frecuencia |
| `!setwelcome [msg]` | Configurar bienvenida |
| `!setbye [msg]` | Configurar despedida |
| `!antinsfw [on/off]` | Activar/desactivar filtro IA de imágenes |
| `!logs` | Consultar auditoría de moderación |

### Generales y comunidad

| Comando | Descripción |
|---|---|
| `!help` | Mostrar ayuda |
| `!rules` | Mostrar reglas del grupo |
| `!info` | Información del grupo |
| `!ia [pregunta]` | Consultar a la IA |
| `!imagine [descripción]` | Generar una imagen con IA |
| `!level` | Consultar nivel y progreso |
| `!top` | Mostrar top 10 de usuarios activos |
| `!perfil @user` | Mostrar estadísticas del usuario |
| `!sticker` | Convertir una imagen en sticker |
| `!toimg` | Convertir un sticker en imagen |
| `!poll [preg] \| [opc1]...` | Crear una encuesta |
| `!remind [tiempo] [txt]` | Crear un recordatorio |
| `!traducir [idioma] [txt]` | Traducir un texto |
| `!clima [ciudad]` | Consultar el clima |
| `!dado` / `!moneda` | Juego aleatorio |
| `!archivo [nombre]` | Descargar archivos de una categoría |
| `!entel` | Descargar archivos de configuración Entel |
| `!bitel` | Descargar archivos de configuración Bitel |
| `!movistar` | Descargar archivos de configuración Movistar |
| `!claro` | Descargar archivos de configuración Claro |
| `!injector` | Descargar APK(s) de Injector |
| `!decrypt` / `!revelar` | Procesar una configuración VPN compatible |
| `!unconfig` | Alias para el procesamiento de configuraciones VPN |

## 🛡️ Auto-moderación

El sistema puede detectar automáticamente:

- **Enlaces no autorizados:** WhatsApp, Telegram, Discord y otros patrones configurados.
- **Spam/flood:** exceso de mensajes en un intervalo corto.
- **Publicidad y ventas:** análisis contextual mediante IA cuando está configurado.
- **Contenido inapropiado:** análisis de imágenes y stickers mediante IA cuando `antinsfw` está habilitado.

Los administradores están exentos de la moderación automática según la implementación actual.

## 🌐 Panel web

El proyecto incluye un panel web para administrar determinadas funciones y configuraciones.

Variables principales:

```env
PANEL_PORT=3001
PANEL_USER=admin
PANEL_PASS=una-contraseña-segura
```

**Recomendación:** no expongas el panel directamente a Internet sin una capa adicional de seguridad y autenticación adecuada.

## 🎥 Descargas y proxy

El bot utiliza las herramientas configuradas en el proyecto para procesar descargas de música y vídeo.

El proxy SOCKS5 es **opcional**. Si necesitas utilizarlo:

```env
YOUTUBE_PROXY=socks5://host:puerto
```

Si no necesitas proxy, déjalo vacío:

```env
YOUTUBE_PROXY=
```

## 🏭 Producción en VPS

### Compilar

```bash
npm run build
```

### Instalar PM2

```bash
npm install -g pm2
```

### Iniciar

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### Comandos útiles

```bash
pm2 status
pm2 logs wa-group-bot
pm2 restart wa-group-bot
pm2 stop wa-group-bot
```

### Actualizar una instalación existente

```bash
cd Mi-Bot-WhatsApp-
git pull origin main
npm install
python3 -m venv scripts/decryption/venv
./scripts/decryption/venv/bin/pip install pycryptodome argon2-cffi msgpack
npm run build
pm2 restart wa-group-bot
```

La sesión de WhatsApp normalmente se conserva mientras no elimines los datos de autenticación.

### Volver a vincular WhatsApp

Si la sesión fue cerrada o invalidada, detén el proceso y elimina únicamente la sesión local antes de volver a vincular:

```bash
pm2 stop wa-group-bot
rm -rf auth_info
pm2 start ecosystem.config.js
pm2 logs wa-group-bot
```

> ⚠️ Elimina `auth_info` solo cuando realmente necesites generar una nueva sesión.

## 🧹 Scripts de mantenimiento

Los scripts auxiliares están separados de la raíz para mantener el proyecto organizado:

- `scripts/tests/` — pruebas manuales de servicios externos.
- `scripts/legacy/patches/` — parches históricos conservados como referencia.
- `scripts/decryption/` — componentes Python utilizados por la función de configuraciones.

Los scripts de `legacy/patches/` **no se ejecutan automáticamente** y no son necesarios para iniciar o compilar el bot.

## 📁 Estructura del proyecto

```text
src/
├── index.ts                    # Punto de entrada
├── config.ts                   # Configuración
├── connection.ts               # Conexión con WhatsApp
├── commands/
│   ├── index.ts                # Registro de comandos
│   ├── admin.commands.ts       # Administración
│   ├── general.commands.ts     # Comandos generales
│   └── extra.commands.ts       # Funciones adicionales
├── handlers/
│   ├── message.handler.ts      # Enrutamiento de mensajes
│   ├── moderation.handler.ts   # Auto-moderación
│   └── group.handler.ts        # Eventos de grupos
├── services/
│   ├── db.service.ts           # Persistencia SQLite
│   ├── ai.service.ts           # Integración con IA
│   ├── file.service.ts         # Gestión de archivos
│   ├── decryption.service.ts   # Puente Node.js ↔ Python
│   ├── apk.service.ts          # Gestión de APKs
│   └── youtube.service.ts      # Descargas
└── panel/
    ├── panel.ts               # Servidor del panel
    └── views/
        └── index.html         # Interfaz web

scripts/
└── decryption/                # Motores y bridge de Python
```

## 🧪 Desarrollo y mantenimiento

Antes de desplegar cambios:

```bash
npm install
npm run build
```

El comando `build` comprueba el código TypeScript y genera `dist/` junto con los recursos del panel.

> En esta etapa se priorizan cambios de documentación, configuración y organización que no alteren el comportamiento existente. Los cambios funcionales deben probarse por separado antes de incorporarse a producción.

## 🔒 Seguridad

- Mantén `.env` fuera del repositorio.
- No compartas credenciales de WhatsApp.
- No publiques claves de IA ni contraseñas del panel.
- Usa una contraseña fuerte para `PANEL_PASS`.
- Revisa los archivos que almacena el bot antes de compartirlos.
- Ejecuta el bot con un usuario del sistema con los permisos mínimos necesarios.
- Utiliza únicamente configuraciones y archivos para los que tengas autorización.

## 📄 Licencia y créditos

El proyecto conserva la licencia **MIT** declarada en `package.json`.

Este repositorio parte de una base pública de **bot-whatsapp** y ha sido adaptado y reorganizado para el proyecto **Yaku WhatsApp Bot**. Conserva los avisos de autoría y las obligaciones de la licencia original cuando corresponda.

## 🦈 Yaku

**Yaku WhatsApp Bot** busca ofrecer una base modular para administrar comunidades de WhatsApp de forma más ordenada, automatizada y mantenible.
