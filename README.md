# XxMauro's Launcher

UI iniziale Electron per il launcher Roblox + Minecraft della community XxMauro.

## Requisiti
- Node.js 18+
- npm

## Avvio locale
```bash
npm install
npm start
```

## Cosa include questa prima versione
- Pagina iniziale in stile moderno/minimal con layout arrotondato.
- Gestione visuale modalità **Minecraft** / **Roblox** con switch istantaneo.
- Sezioni account dedicate:
  - Minecraft: login Microsoft / profilo offline.
  - Roblox: login obbligatorio / gestione sessione.
- Grande pulsante **Play** che cambia in base alla modalità attiva.
- Card informative per server/community/social.
- Cambio palette tema tra Minecraft e Roblox.

## Struttura
- `src/main.js`: bootstrap Electron e finestra desktop.
- `src/renderer/index.html`: struttura UI.
- `src/renderer/styles.css`: stile moderno + temi dinamici.
- `src/renderer/renderer.js`: logica switch modalità e aggiornamento contenuti.
