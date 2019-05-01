
module.exports = {
    base: '/vuepress/',
    locales: {
        //键名是该语言所属的子路径
        //作为特例，默认语言可以使用‘/’作为其路径
        '/': {
            lang: 'en-US',
            title: 'Vue',
            description: 'The Progressive\n' +
                'JavaScript Framework',
            '/zh/': {
                lang: 'zh-CN',
                title: 'Vue',
                description: '渐进式Javascript框架'
            }
        }
    },
    themeConfig: {
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                algolia: {},
                nav: [
                    {text: 'Learn', link: '/learn'},
                    {text: 'About', link: '/about'},
                    {
                        text: 'language', items: [
                            {text: 'English', link: '/'},
                            {text: 'Chinese', link: '/zh/'}
                        ]
                    }
                ],
                sidebar: 'auto',

                '/zh/': {
                    // 多语言下拉菜单的标题
                    selectText: '选择语言',
                    // 该语言在下拉菜单中的标签
                    label: '简体中文',
                    // 编辑链接文字
                    editLinkText: '在 GitHub 上编辑此页',
                    // Service Worker 的配置
                    serviceWorker: {
                        updatePopup: {
                            message: "发现新内容可用.",
                            buttonText: "刷新"
                        }
                    },
                    // 当前 locale 的 algolia docsearch 选项
                    algolia: {},
                    nav: [
                        {text: '学习', link: '/zh/learn'},
                        {text: '关于', link: '/zh/about'},
                        {
                            text: '选择语言', items: [
                                {text: '英语', link: '/'},
                                {text: '简体中文', link: '/zh/'}
                            ]
                        }
                    ],
                    sidebar: 'auto'
                }
            }
        }
    }
}



