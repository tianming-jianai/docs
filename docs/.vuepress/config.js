module.exports = {
    title: 'My Blog',
    // port:8081,
    themeConfig: {
        // navbar: false,
        logo: '/asserts/img/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://vuepress.vuejs.org/zh/', target: '_self', rel: '' },
            {
                text: 'Language',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/zh/' },
                    { text: 'English', link: '/en/' }
                ]
            },
            {
                text: '友情链接',
                items: [
                    {
                        text: '官方站点',
                        items: [
                            { text: 'Vue', link: 'https://v3.cn.vuejs.org/', target: '_self' },
                            { text: 'Vue Rouiter', link: 'https://router.vuejs.org/zh/', target: '_self' },
                            { text: 'VuePress', link: 'https://vuepress.vuejs.org/zh/', target: '_self' },
                            { text: 'Element UI', link: 'https://element.eleme.io/#/zh-CN', target: '_self' }
                        ]
                    },
                    {
                        text: '个人博客',
                        items: [
                            { text: '阮一峰的个人网站', link: 'https://www.ruanyifeng.com/', target: '_self' },
                            { text: 'ES6入门文档', link: 'http://caibaojian.com/es6/' }
                        ]
                    }
                ]
            }
        ],
        sidebar: 'auto',
        searchMaxSuggestions: 10,
        lastUpdated: '最后更新于'
    },
    markdown: {
        lineNumbers: true,
        extractHeaders: ['h2', 'h3', 'h4']
    },
    evergreen: true

}