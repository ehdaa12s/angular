 src/
├── app/
│   ├── core/
│   │   ├── services/
│   │   ├── guards/
│   │   ├── interceptors/
│   │   ├── models/
│   │   ├── constants/
│   │   └── core.module.ts
│   ├── shared/
│   │   ├── components/
│   │   ├── directives/
│   │   ├── pipes/
│   │   └── shared.module.ts
│   ├── layout/
│   │   ├── header/
│   │   ├── sidebar/
│   │   ├── footer/
│   │   ├── main-layout/
│   │   └── layout.module.ts
│   ├── features/
│   │   ├── dashboard/
│   │   ├── users/
│   │   ├── products/
│   │   └── settings/
│   ├── app-routing.module.ts
│   ├── app.module.ts
│   └── app.component.ts
├── assets/
├── environments/
├── styles/
│   ├── variables.scss
│   ├── mixins.scss
│   └── global.scss
└── index.html


1- commands for core
# Generate core module
ng generate module core --flat

# Generate core services
ng generate service core/services/auth
ng generate service core/services/api
ng generate service core/services/storage

# Generate guards
ng generate guard core/guards/auth
ng generate guard core/guards/role

# Generate interceptors
ng generate interceptor core/interceptors/auth
ng generate interceptor core/interceptors/error

# Create models and constants folders (these don't need ng commands)
mkdir -p src/app/core/models
mkdir -p src/app/core/constants
2- shared
# Generate shared module
ng generate module shared --flat

# Generate shared components
ng generate component shared/components/button --flat --skip-selector
ng generate component shared/components/card --flat --skip-selector
ng generate component shared/components/modal --flat --skip-selector
ng generate component shared/components/loading-spinner --flat --skip-selector

# Generate directives
ng generate directive shared/directives/highlight
ng generate directive shared/directives/click-outside

# Generate pipes
ng generate pipe shared/pipes/truncate
ng generate pipe shared/pipes/filter

3-Layout Module & Components
# Generate layout module
ng generate module layout --flat

# Generate layout components
ng generate component layout/header
ng generate component layout/sidebar
ng generate component layout/footer
ng generate component layout/main-layout

4- Features Modules
# Dashboard feature
ng generate module features/dashboard --routing
ng generate component features/dashboard/dashboard --flat --skip-selector
ng generate service features/dashboard/services/dashboard

# Users feature
ng generate module features/users --routing
ng generate component features/users/pages/user-list --flat --skip-selector
ng generate component features/users/pages/user-detail --flat --skip-selector
ng generate component features/users/components/user-form --flat --skip-selector
ng generate component features/users/components/user-card --flat --skip-selector
ng generate service features/users/services/user
ng generate interface features/users/models/user

# Products feature
ng generate module features/products --routing
ng generate component features/products/pages/product-list --flat --skip-selector
ng generate component features/products/pages/product-detail --flat --skip-selector
ng generate component features/products/components/product-form --flat --skip-selector
ng generate component features/products/components/product-card --flat --skip-selector
ng generate service features/products/services/product
ng generate interface features/products/models/product

# Settings feature
ng generate module features/settings --routing
ng generate component features/settings/pages/profile --flat --skip-selector
ng generate component features/settings/pages/preferences --flat --skip-selector

5-
# Generate environments (if not already there)
ng generate environments

6-create style 
# Create styles folder and files
mkdir -p src/styles
touch src/styles/variables.scss
touch src/styles/mixins.scss
touch src/styles/global.scss