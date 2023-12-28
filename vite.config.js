import path from 'path';
import {defineConfig, splitVendorChunkPlugin} from 'vite';
import vitePluginEslint from 'vite-plugin-eslint';
import {viteCommonjs} from '@originjs/vite-plugin-commonjs';
import progress from 'vite-plugin-progress';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// eslint-disable-next-line no-console
console.log('process.env.env', process.env.env);

// eslint-disable-next-line no-underscore-dangle
const __ENV__ = (process.env.env || 'dev').toLowerCase();
const isDev = __ENV__ === 'dev';

const getProxyTarget = () => {
    return 'https://www.baidu.com';
};

const proxyTarget = getProxyTarget();

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: path.resolve(__dirname, 'dist'),
        rollupOptions: {
            output: {
                chunkFileNames: 'static/js/[name]-[hash].js',
                entryFileNames: 'static/js/[name]-[hash].js',
                assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
                sourcemap: ['release', 'live'].includes(__ENV__) ? 'hidden' : true,
                manualChunks: {
                    react: ['react', 'react-dom', 'react-router-dom'],
                    'antd': ['antd'],
                    lodash: ['lodash'],
                    // common: ['node_modules'],
                },
            },
        },
    },
    define: {
        __ENV__: JSON.stringify(__ENV__),
        __IS_MOCK__: !!(process.env.PROXY_TARGET === 'mock'),
        'process.env': {},
    },
    resolve: {
        alias: [{find: '@', replacement: path.resolve(__dirname, 'src')}],
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue', 'less'],
    },
    css: {
        preprocessorOptions: {
            less: {
                // additionalData: '@import "src/styles/common.less";',
                modifyVars: {
                    // prefixCls: 'ssc-react',
                    // rcPrefixCls: 'ssc-react-rc',
                },
            },
        },
        modules: {
            // globalModulePaths: [/node_modules/],
            generateScopedName: '[path][name]__[local]___[hash:base64:5]',
        },
    },
    plugins: [
        react({
            include: [/\.jsx?$/, /\.tsx?$/],
        }),
        viteCommonjs(),
        progress(),
        isDev ? vitePluginEslint({
            failOnError: false,
        }) : undefined,
        splitVendorChunkPlugin(),
        svgr(),
    ],
    server: {
        port: 4747,
        host: '0.0.0.0',
        open: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        },
        hmr: {
            overlay: false,
        },
        proxy: {
            '/api': {
                target: proxyTarget,
                changeOrigin: true,
            },
        },
    },
    preview: {
        port: 4172,
        host: '0.0.0.0',
        open: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        },
        proxy: {
            '/api': {
                target: proxyTarget,
                changeOrigin: true,
            },
        },
    },
});
