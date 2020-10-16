import path from "path";
import alias from "@rollup/plugin-alias";
import { createRollupConfigs } from './scripts/base.config.js';
import autoPreprocess from 'svelte-preprocess';
import postcssImport from 'postcss-import';
import replace from '@rollup/plugin-replace';

const production = !process.env.ROLLUP_WATCH;

export const config = {
  staticDir: 'static',
  distDir: 'dist',
  buildDir: `dist/build`,
  serve: !production,
  production,
  rollupWrapper: rollup => {
    rollup.plugins = [
      ...rollup.plugins,
      replace({
        process: JSON.stringify({
          env: {
            NODE_ENV: process.env.NODE_ENV
          }
        }),
        // "PROXY_URL": production ? "" : "http://localhost:8080/http://localhost:3000",
        "PROXY_URL": production ? "" : `http://localhost:${process.env.PORT}/http://localhost:3000`,
      }),
      alias({
        resolve: [".svelte", ".js"],
        entries: [
          { find: "@", replacement: path.resolve(__dirname, "src") },
        ]
      }),
    ]
  },
  svelteWrapper: svelte => {
    svelte.preprocess = [
      autoPreprocess({
        postcss: {
          plugins: [
            postcssImport(),
            require("autoprefixer"),
          ],
        },
        defaults: { style: "postcss" }
      }),
    ]
  },
  swWrapper: worker => worker,
}

const configs = createRollupConfigs(config)

export default configs

/**
  Wrappers can either mutate or return a config

  wrapper example 1
  svelteWrapper: (cfg, ctx) => {
    cfg.preprocess: mdsvex({ extension: '.md' }),
  }

  wrapper example 2
  rollupWrapper: cfg => {
    cfg.plugins = [...cfg.plugins, myPlugin()]
    return cfg
  }
*/
