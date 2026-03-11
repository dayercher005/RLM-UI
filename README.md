# Recursive Language Model (RLM) User Interface (UI)

A User-Interface for a RLM engine.

## Project Structure

 ```bash
.
├── components.json
├── electron
│   ├── electron-env.d.ts
│   ├── main.ts
│   └── preload.ts
├── electron-builder.json5
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── src
│   ├── components
│   │   ├── chat
│   │   ├── login-form.tsx
│   │   ├── sidebar
│   │   │   ├── nav-main.tsx
│   │   │   ├── nav-user.tsx
│   │   │   ├── sidebar.tsx
│   │   │   └── team-switcher.tsx
│   │   └── ui
│   │       ├── avatar.tsx
│   │       ├── button.tsx
│   │       ├── collapsible.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── field.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       └── tooltip.tsx
│   ├── hooks
│   │   └── use-mobile.ts
│   ├── lib
│   │   └── utils.ts
│   ├── main.tsx
│   ├── pages
│   │   ├── login.tsx
│   │   └── main.tsx
│   ├── styles
│   │   └── index.css
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
 ```

 ---

 ## System Architecture

 ```mermaid

    ---
    config: 
        theme: 'dark'
    ---

    graph TB
        Frontend[RLM UI]
        API[RLM Server]
        Database[(SQlite Database)]
        Authentication[Auth0]
        Engine[RLM Engine]
        
        Frontend --> |HTTP Requests| API
        API -->|Authentication| Authentication
        API -->|Database Queries| Database
        API -->|HTTP Responses| Frontend
        API -->|HTTP Requests| Engine

 ```

 ---

## 🛠️ Tech Stack:
![React](https://img.shields.io/badge/React-_?style=for-the-badge&logo=React&logoColor=%2361DAFB&labelColor=black&color=%2361DAFB)
![Electron](https://img.shields.io/badge/Electron-_?style=for-the-badge&logo=Electron&logoColor=%2347848F&labelColor=black&color=%2347848F)
![Vite](https://img.shields.io/badge/Vite-_?style=for-the-badge&logo=Vite&logoColor=%239135FF&labelColor=black&color=%239135FF)
![Tailwind](https://img.shields.io/badge/Tailwind-_?style=for-the-badge&logo=Tailwind%20CSS&logoColor=%2306B6D4&labelColor=black&color=%2306B6D4)
![ShadCN](https://img.shields.io/badge/ShadCN-_?style=for-the-badge&logo=Shadcn%2Fui&logoColor=white&labelColor=black&color=white)

## How to Run:

1. Clone the repository
```bash
git clone https://github.com/dayercher005/RLM-UI.git
```

2. Install dependencies:
```bash
npm i
```


3. Run Development Server:
```bash
npm run dev
```

