# Scripts

## `decryption/`
Motores y puente Python utilizados por el módulo de procesamiento de configuraciones compatible con el proyecto.

## `tests/`
Pruebas/manuales auxiliares para servicios externos. No forman parte del arranque normal del bot.

## `legacy/patches/`
Scripts históricos utilizados durante el desarrollo para aplicar correcciones puntuales sobre archivos de `src/`. No se ejecutan durante `npm install`, `npm run dev`, `npm run build` ni `npm start`.

> Estos scripts se conservan como referencia para no perder el historial técnico del proyecto. Si se ejecuta alguno, hacerlo desde la raíz del repositorio, ya que algunos utilizan rutas relativas como `src/...`.
