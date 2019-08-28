# vue-template
## 目录结构
├── README.md
├── babel.config.js
├── jest.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── api
│   │   └── login.js
│   ├── assets
│   │   └── img
│   │       └── logo.png
│   ├── components
│   │   ├── HelloWorld.vue
│   │   ├── NavBtn.vue
│   │   ├── NavLeft.vue
│   │   └── SubMenu.vue
│   ├── layouts
│   │   ├── BasicLayout.vue
│   │   ├── RouteView.vue
│   │   └── UserLayout.vue
│   ├── main.js
│   ├── mock
│   │   ├── index.js
│   │   ├── services
│   │   │   └── auth.js
│   │   └── util.js
│   ├── pages
│   │   ├── HomePage.vue
│   │   ├── Manager.vue
│   │   ├── NotFound.vue
│   │   └── user
│   │       ├── Login.vue
│   │       ├── Register.vue
│   │       └── RegisterResult.vue
│   ├── router
│   │   ├── constantRoutes.js
│   │   └── index.js
│   ├── store
│   │   ├── getters.js
│   │   ├── index.js
│   │   ├── modules
│   │   │   ├── index.js
│   │   │   └── user.js
│   │   └── mutation-types.js
│   └── utils
│       ├── cookie.js
│       ├── docUtil.js
│       └── index.js
├── tests
│   └── unit
│       ├── example.spec.js
│       └── login.spec.js
└── vue.config.js
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run unit:test
```

### Lints and fixes files
```
npm run format-code
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

