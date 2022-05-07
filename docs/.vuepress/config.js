const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components') // 根据组件文件或目录自动注册 Vue 组件
const { path } = require('@vuepress/utils')

module.exports = {
    lang: 'zh-CN',
    title: 'My Blog',
    description: '这是我的第一个 VuePress 站点',
    // port:8081,
    theme: defaultTheme({
        // navbar: false,
        logo: '/asserts/img/logo.png',
        navbar: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            {
                text: '分类',
                children: [
                    { text: 'Java', link: '/java/' },
                    { text: 'Linux', link: '/linux/' },
                    { text: 'Python', link: '/python/' },
                    { text: 'JavaScript', link: '/js/' },
                ]
            },
            {
                text: '友情链接',
                children: [
                    {
                        text: '官方站点',
                        children: [
                            { text: 'Vue3', link: 'https://v3.cn.vuejs.org/guide/introduction.html', target: '_self' },
                            { text: 'Vue Rouiter4', link: 'https://router.vuejs.org/zh/introduction.html', target: '_self' },
                            { text: 'VuePress2', link: 'https://v2.vuepress.vuejs.org/zh/', target: '_self' },
                            { text: 'Element Plus', link: 'https://element.eleme.io/#/zh-CN', target: '_self' }
                        ]
                    },
                    {
                        text:'插件',
                        children:[
                            { text: 'vuepress2 container', link: 'https://www.cjsound.cn/vuepress2-plugin/'},
                            
                        ]
                    },
                    {
                        text: '个人博客',
                        children: [
                            { text: '阮一峰的个人网站', link: 'https://www.ruanyifeng.com/', target: '_self' },
                            { text: 'ES6入门文档', link: 'http://caibaojian.com/es6/' }
                        ]
                    }
                ]
            }
        ],
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者'
    }),
    plugins:[
        searchPlugin({
            hotKeys:['s','/']
        }),
        registerComponentsPlugin({
            // 配置项
            componentsDir: path.resolve(__dirname, './components'),
        }),
    ],
    markdown: {
        code:{
            lineNumbers: true,
        },
        extractHeaders: {
            level:[2,3]
        }
    },

}