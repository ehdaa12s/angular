
## 📁 ROOT FOLDER: `src/`**
This is where ALL your source code lives. Everything you write goes here.

## 📁 **FOLDER 1: `src/app/core/`** (The Engine Room)

### **What is Core?**
Think of Core as the **heart of your application** - services and features that are used EVERYWHERE and loaded ONLY ONCE.

### **Core Subfolders:**

#### **`core/services/`** - Singleton Services
```typescript
// Example: auth.service.ts
// Handles user login/logout across the entire app
- auth.service.ts     // Login, logout, user sessions
- api.service.ts      // All API calls to backend
- storage.service.ts  // Save data in browser localStorage
```

**Why here?** These services are used by EVERY feature. Loaded once, used everywhere.

#### **`core/guards/`** - Route Protectors
```typescript
// Example: auth.guard.ts
// Protects routes from unauthorized access
- auth.guard.ts       // "Can you enter? Are you logged in?"
- role.guard.ts       // "Do you have admin permissions?"
```

**Why here?** Guards check access BEFORE loading a page. They're core security features.

#### **`core/interceptors/`** - HTTP Middleware
```typescript
// Example: auth.interceptor.ts
// Automatically adds auth token to EVERY HTTP request
- auth.interceptor.ts     // Adds JWT token to requests
- error.interceptor.ts    // Handles API errors globally
```

**Why here?** Interceptors modify ALL HTTP requests/responses automatically.

#### **`core/models/`** - TypeScript Interfaces
```typescript
// Example: user.model.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}
```

**Why here?** Defines the SHAPE of data used across the app.

#### **`core/constants/`** - Global Constants
```typescript
// Example: app.constants.ts
export const APP_CONFIG = {
  APP_NAME: 'My App',
  API_URL: 'https://api.example.com',
  MAX_UPLOAD_SIZE: 5 // MB
};
```

**Why here?** Values that NEVER change and are used everywhere.

#### **`core/core.module.ts`**
The glue that holds core together. Imported ONLY in `app.module.ts`.

---

## 📁 **FOLDER 2: `src/app/shared/`** (The LEGO Box)

### **What is Shared?**
Reusable pieces you use MULTIPLE times across different features. Like a box of LEGO blocks.

### **Shared Subfolders:**

#### **`shared/components/`** - Reusable UI Elements
```typescript
// Example: button.component.ts
// A button you can use anywhere with different styles
- button/          // Custom button with different colors/sizes
- card/            // Reusable card container
- modal/           // Popup window
- loading-spinner/ // Loading animation
```

**Why here?** Used by multiple features (Users page, Products page, etc.)

#### **`shared/directives/`** - HTML Enhancements
```typescript
// Example: highlight.directive.ts
// Adds hover effects to any element
- highlight.directive      // Highlights on mouse hover
- click-outside.directive  // Detects clicks outside an element
```

**Why here?** Custom HTML attributes you can add to ANY element.

#### **`shared/pipes/`** - Data Transformers
```typescript
// Example: truncate.pipe.ts
// Cuts long text and adds "..."
- truncate.pipe   // "Hello world..." instead of full text
- filter.pipe     // Filters lists based on search
```

**Why here?** Transform how data LOOKS without changing the actual data.

#### **`shared/shared.module.ts`**
Exports all shared items so features can import them.

---

## 📁 **FOLDER 3: `src/app/layout/`** (The Building Structure)

### **What is Layout?**
The **skeleton** of your app - parts that appear on EVERY page.

### **Layout Subfolders:**

#### **`layout/header/`**
```html
<!-- header.component.html -->
<header>
  <logo></logo>
  <nav-menu></nav-menu>
  <user-profile></user-profile>
</header>
```
**Why here?** Same header on ALL pages (Home, Users, Products, etc.)

#### **`layout/sidebar/`**
```html
<!-- sidebar.component.html -->
<aside>
  <nav>
    <a href="/dashboard">Dashboard</a>
    <a href="/users">Users</a>
    <a href="/products">Products</a>
  </nav>
</aside>
```
**Why here?** Navigation menu that stays visible.

#### **`layout/footer/`**
```html
<!-- footer.component.html -->
<footer>
  <copyright></copyright>
  <links></links>
</footer>
```
**Why here?** Copyright and links on EVERY page.

#### **`layout/main-layout/`**
```html
<!-- main-layout.component.html -->
<app-header></app-header>
<app-sidebar></app-sidebar>
<main>
  <router-outlet></router-outlet> <!-- Pages load here -->
</main>
<app-footer></app-footer>
```
**Why here?** The MASTER template that arranges header, sidebar, footer, and content area.

#### **`layout/layout.module.ts`**
Groups all layout components together.

---

## 📁 **FOLDER 4: `src/app/features/`** (The Rooms)

### **What are Features?**
Each feature is like a **room in a house** - self-contained and independent.

### **Feature Structure (Example: Users)**

```
users/
├── pages/              # Different views
│   ├── user-list/      # Show all users
│   └── user-detail/    # Show single user
├── components/         # Parts used ONLY in Users
│   ├── user-form/      # Add/edit user form
│   └── user-card/      # User preview card
├── services/           # Users-specific data
│   └── user.service.ts
├── models/             # Users-specific types
│   └── user.model.ts
└── users.module.ts     # Users feature module
users-routing.module.ts # Users-specific routes
```

### **Each Feature Explained:**

#### **`features/dashboard/`**
- **Purpose:** Home page with statistics and overview
- **Contents:** Charts, summary cards, recent activity

#### **`features/users/`**
- **Purpose:** User management (CRUD operations)
- **Contents:** List users, add user, edit user, delete user

#### **`features/products/`**
- **Purpose:** Product catalog management
- **Contents:** Product list, product details, product form

#### **`features/settings/`**
- **Purpose:** User preferences and app settings
- **Contents:** Profile settings, notification preferences

**Why this structure?**
- Each feature is INDEPENDENT - can be developed by different teams
- LAZY LOADING - loads only when needed (faster app)
- EASY to add/remove features without breaking others

---

## 📁 **ROOT FILES in `src/app/`**

### **`app-routing.module.ts`**
The **MAP** of your application:
```typescript
- "/"           → Go to Dashboard
- "/users"      → Go to Users feature
- "/products"   → Go to Products feature
- "/settings"   → Go to Settings feature
```

### **`app.module.ts`**
The **MAIN SWITCHBOARD** - tells Angular what your app has:
- Which features are available
- Which services to provide
- What to load at startup

### **`app.component.ts`**
The **ROOT COMPONENT** - the very first component loaded:
```html
<!-- Usually just contains -->
<router-outlet></router-outlet> <!-- Loads the current page -->
```

---

## 📁 **OTHER FOLDERS in `src/`**

### **`assets/`**
Static files:
- Images (`logo.png`, `avatar.jpg`)
- Fonts (`custom-font.woff`)
- JSON files (`config.json`)

### **`environments/`**
Configuration for different environments:
```typescript
// environment.ts (development)
apiUrl: 'http://localhost:3000'

// environment.prod.ts (production)
apiUrl: 'https://api.myapp.com'
```

### **`styles/`**
Global styling:
- **`variables.scss`** - Colors, fonts, sizes
  ```scss
  $primary-color: blue;
  $font-size-base: 16px;
  ```
- **`mixins.scss`** - Reusable style functions
  ```scss
  @mixin flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ```
- **`global.scss`** - Styles that apply everywhere

### **`index.html`**
The ONE HTML page that loads your entire Angular app:
```html
<body>
  <app-root></app-root> <!-- Your entire app goes here -->
</body>
```

---

## HOW IT ALL WORKS TOGETHER**

```
When user visits "/users":

1. index.html loads
2. main.ts starts Angular
3. app.module.ts loads core and layout
4. app.component.ts shows header/sidebar/footer
5. app-routing.module.ts says "go to users feature"
6. users.module.ts loads
7. user-list.component.ts displays in <router-outlet>
8. user.service.ts fetches data via api.service.ts
9. auth.interceptor.ts adds token automatically
10. shared components (buttons, cards) display the UI
```

---

## WHY THIS ARCHITECTURE IS AWESOME

1. **SCALABLE** - Can grow from 1 to 100 developers
2. **MAINTAINABLE** - Each part has ONE job
3. **REUSABLE** - Shared components everywhere
4. **TESTABLE** - Each piece can be tested alone
5. **LAZY LOADING** - Fast initial load
6. **TEAM FRIENDLY** - Teams work on different features

