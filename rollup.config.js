import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import pkg from './package.json';
import sveltePreprocess from "svelte-preprocess";
import typescript from "@rollup/plugin-typescript";
import sveld from "sveld";

const name = pkg.name
    .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
    .replace(/^\w/, m => m.toUpperCase())
    .replace(/-\w/g, m => m[1].toUpperCase());

export default {
    input: './src/index.ts',
    output: [
        {
            file: pkg.module,
            format: 'es',
            sourcemap: true,
        },
        {
            file: pkg.main,
            format: 'umd',
            name,
            sourcemap: true
        },
        {
            file: pkg.main.replace('.js', '.min.js'),
            format: 'iife',
            name,
            plugins: [terser()],
            sourcemap: true
        }
    ],
    plugins: [
        svelte({
            preprocess: sveltePreprocess({
                postcss: true,
            }),
        }),
        typescript(),
        resolve(),
        sveld()
    ]
};
