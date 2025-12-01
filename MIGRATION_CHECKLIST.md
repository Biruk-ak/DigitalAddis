# ✅ Migration Checklist

## 🎯 Quick Action Guide

### Phase 1: Core Structure (Do First)

#### Create Folders:
- [ ] `src/components/ui/` - shadcn/ui components
- [ ] `src/components/layout/` - Header, Footer, Sidebar
- [ ] `src/components/forms/` - Reusable form components
- [ ] `src/components/animations/` - Framer Motion/GSAP wrappers
- [ ] `src/components/providers/` - Context providers
- [ ] `src/hooks/` - Shared React hooks
- [ ] `src/lib/` - Core utilities
- [ ] `src/lib/api/` - API client setup
- [ ] `src/services/` - Global services
- [ ] `src/types/` - Global TypeScript types
- [ ] `src/styles/` - Additional CSS files

#### Create Core Files:
- [ ] `src/lib/utils.ts` - Utility functions (start with `cn` helper)
- [ ] `src/lib/constants.ts` - App constants
- [ ] `src/lib/config.ts` - Environment-based config
- [ ] `src/lib/api/client.ts` - API client (Axios/Fetch wrapper)
- [ ] `src/types/index.ts` - Type re-exports
- [ ] `components.json` - shadcn/ui configuration
- [ ] `.env.example` - Environment variables template

---

### Phase 2: Feature Modules (Create as Needed)

#### Create Feature Structure:
- [ ] `src/features/` - Main features folder
- [ ] `src/features/auth/` - Authentication feature (example)
  - [ ] `src/features/auth/components/`
  - [ ] `src/features/auth/hooks/`
  - [ ] `src/features/auth/services/`
  - [ ] `src/features/auth/types/`
  - [ ] `src/features/auth/utils/`

**Note**: Create features as you build them, not all at once.

---

### Phase 3: App Router Enhancements

#### Create Route Groups:
- [ ] `src/app/(auth)/` - Authentication pages
  - [ ] `src/app/(auth)/login/page.tsx`
  - [ ] `src/app/(auth)/register/page.tsx`
- [ ] `src/app/(marketing)/` - Marketing pages
  - [ ] `src/app/(marketing)/about/page.tsx`
  - [ ] `src/app/(marketing)/contact/page.tsx`

#### Create API Routes:
- [ ] `src/app/api/auth/route.ts`
- [ ] `src/app/api/users/route.ts`
- [ ] `src/app/api/health/route.ts`

#### Add App Router Files:
- [ ] `src/app/loading.tsx` - Global loading UI
- [ ] `src/app/error.tsx` - Global error boundary
- [ ] `src/app/not-found.tsx` - 404 page

---

### Phase 4: Optional Enhancements

#### Barrel Exports (for cleaner imports):
- [ ] `src/components/ui/index.ts`
- [ ] `src/hooks/index.ts`
- [ ] `src/types/index.ts`

#### Middleware:
- [ ] `src/middleware.ts` - If you need auth/redirects

#### Configuration Updates:
- [ ] Update `tsconfig.json` paths (optional, `@/*` already works)
- [ ] Create `tailwind.config.ts` if needed

---

## 📝 File Templates

### `src/lib/utils.ts`
```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Add more utility functions as needed
export function formatDate(date: Date | string): string {
  // Implementation
}
```

### `src/lib/constants.ts`
```typescript
export const API = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  TIMEOUT: 5000,
} as const

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
} as const
```

### `src/lib/config.ts`
```typescript
export const config = {
  app: {
    name: process.env.NEXT_PUBLIC_APP_NAME || 'My App',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  },
} as const
```

### `src/types/index.ts`
```typescript
// Re-export all types
export * from './api.types'
export * from './common.types'

// Example: src/types/common.types.ts
export interface User {
  id: string
  name: string
  email: string
}

export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}
```

### `components.json` (shadcn/ui)
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

### `.env.example`
```env
# API
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Database
DATABASE_URL=postgresql://...

# Auth
NEXTAUTH_SECRET=your-secret-here
NEXTAUTH_URL=http://localhost:3000

# App
NEXT_PUBLIC_APP_NAME=My App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 🔄 What to Keep

✅ **Keep these as-is:**
- `src/app/layout.tsx` - Root layout
- `src/app/page.tsx` - Home page
- `src/app/globals.css` - Global styles
- `public/` - Static assets
- `package.json` - Dependencies
- `tsconfig.json` - TypeScript config (may update paths)
- `next.config.ts` - Next.js config

---

## 🗑️ What to Delete

❌ **Nothing to delete** - Your current structure is minimal and clean!

---

## 📦 Dependencies to Add (Optional)

### For shadcn/ui:
```bash
npm install clsx tailwind-merge
npx shadcn@latest init
```

### For API client:
```bash
npm install axios  # or use native fetch
```

### For form validation:
```bash
npm install zod react-hook-form @hookform/resolvers
```

### For state management (if needed):
```bash
npm install zustand  # or @tanstack/react-query
```

---

## 🎯 Priority Order

1. **High Priority** (Do First):
   - Create `src/lib/utils.ts` with `cn` function
   - Create `src/components/ui/` folder
   - Create `components.json` for shadcn/ui
   - Create `src/types/` folder

2. **Medium Priority** (Do Next):
   - Create `src/hooks/` folder
   - Create `src/lib/constants.ts` and `config.ts`
   - Create `src/components/layout/` folder
   - Set up API client in `src/lib/api/`

3. **Low Priority** (Do as Needed):
   - Create feature modules when building features
   - Add route groups when needed
   - Add middleware when implementing auth
   - Add barrel exports for cleaner imports

---

## ✅ Verification Checklist

After migration, verify:
- [ ] All imports use `@/` path alias
- [ ] shadcn/ui components work (`npx shadcn@latest add button`)
- [ ] TypeScript compiles without errors
- [ ] Next.js dev server runs successfully
- [ ] All new folders are created
- [ ] Environment variables are documented in `.env.example`

---

## 🚀 Quick Start Commands

```bash
# 1. Create core folders
mkdir -p src/components/{ui,layout,forms,animations,providers}
mkdir -p src/hooks src/lib/api src/services src/types src/styles src/features

# 2. Initialize shadcn/ui
npx shadcn@latest init

# 3. Add first component
npx shadcn@latest add button

# 4. Verify structure
tree src/ -L 2  # or use your file explorer
```

---

**Ready to start?** Begin with Phase 1, then build features as you need them! 🎉

