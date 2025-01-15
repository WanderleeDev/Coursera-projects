# Portfolio Coursera

![Portfolio cover](https://www.dropbox.com/scl/fi/qprktamtafmw8peoo1tvq/Screenshot-from-2025-01-15-08-37-54.png?rlkey=jrhx0149j6obquy7hopko1t3t&st=hlup9xqv&raw=1)

[![Demo](https://img.shields.io/badge/Demo-eb9d15?style=for-the-badge&logo=rocket&logoColor=white&labelColor=#eb9d15)](https://porfolio-coursera.vercel.app)

## 🚀 Description

Portfolio website built with React, TypeScript, and Chakra UI, featuring a responsive design and GitHub repository integration.

## 💻 Technologies

- React
- TypeScript
- Chakra UI
- React Hook Form
- Zod
- EmailJS
- React Router
- TanStack Query

## 📁 Project Structure

```
src/
├── components/
│   ├── custom/
│   │   ├── Form/               # Form components
│   │   ├── Header/            # Header components with styles
│   │   ├── InfiniteMarquee/   # Marquee animation
│   │   ├── TextAnimate/       # Text animation components
│   │   └── [Other Components] # CardProject, Footer, etc.
│   ├── icons/                 # SVG icon components
│   ├── types/                 # Type definitions
│   └── ui/                    # UI components (Chakra UI)
├── hooks/                     # Custom hooks
├── interfaces/               # TypeScript interfaces
├── layouts/                  # Layout components
├── lib/                      # Third-party integrations
├── models/                   # Data models
├── pages/                    # Main pages
├── schemas/                  # Zod validation schemas
└── utils/                    # Utility functions
```

## 🛠️ Setup and Installation

1. Clone the repository

```bash
git clone [repository-url]
```

2. Install dependencies

```bash
pnpm install
```

3. Set up environment variables

```env
VITE_API_URL=your_api_url
VITE_EMAILJS_PUBLIC_KEY=your_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

4. Run development server

```bash
pnpm run dev
```

## ✨ Features

- Responsive header with mobile/desktop versions
- Contact form with validation
- GitHub repository integration
- Animated text and infinite marquee components
- Custom icon components
- Error handling utilities

## 📝 Scripts

- `pnpm run dev`: Start development server
- `pnpm run build`: Build for production
- `pnpm run preview`: Preview production build

## 👤 Author

[Wanderlee Max](https://www.linkedin.com/in/wanderlee-max/)

- GitHub: [@WanderleeDev](https://github.com/WanderleeDev)
- LinkedIn: [@WanderleeMax](https://www.linkedin.com/in/wanderlee-max/)
