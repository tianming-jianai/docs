const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')
const { containerPlugin } = require('@vuepress/plugin-container')

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
                            { text: 'Vue', link: 'https://v3.cn.vuejs.org/', target: '_self' },
                            { text: 'Vue Rouiter', link: 'https://router.vuejs.org/zh/', target: '_self' },
                            { text: 'VuePress2', link: 'https://v2.vuepress.vuejs.org/zh/', target: '_self' },
                            { text: 'Element UI', link: 'https://element.eleme.io/#/zh-CN', target: '_self' }
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
        // sidebar: 'auto',
        // searchMaxSuggestions: 10,
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者'
    }),
    plugins:[
        searchPlugin({
            hotKeys:['s','/']
        }),
        containerPlugin({
            // 配置项
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
    evergreen: true, // 不转义到ES5

}