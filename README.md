# React App Multiple Environment Variable Files Configuration with ViteJS

Step 1: Install Necessary Packages
```
npm i --save-dev @types/node
npm I cross-env
```

Edit the scripts section of your package.json to include environment-specific commands:

```
    "dev": "cross-env NODE_ENV=dev vite",
    "localhost": "cross-env NODE_ENV=localhost vite",
    "staging": "cross-env NODE_ENV=staging vite",
    "test": "cross-env NODE_ENV=test vite",
    "prod": "cross-env NODE_ENV=prod vite",
```


Replace the content of your vite.config.ts file with the following code to load environment variables based on the specified mode:

```
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const envPrefix = process.env.NODE_ENV;

  return defineConfig({
    plugins: [react()],
    envDir: `./env/${envPrefix}`,
  });
};
```

Organize your environment variable files in a structured folder hierarchy. Place the environment-specific files in a folder named env. Each folder should be named according to the environment, such as env/dev, env/localhost, env/staging, etc.

[![folder structure][1]][1]


In each environment variable file, add your variables. For example, in .env/dev/.env, add: `VITE_SECRET=dev`


To verify that the environment variables are loaded correctly, modify your App component to display the environment variable:

```
export default function App() {
  return <div>{import.meta.env.VITE_SECRET}</div>;
}
```




  [1]: https://i.sstatic.net/eAnft6Wv.png
