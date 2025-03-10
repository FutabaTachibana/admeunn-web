import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'Admeunn服务器',
  description: 'Admeunn服务器官方网站',
  themeConfig: {
    logo: '/image/logo.jpg',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/introduction/introduction' },
      { text: '合作服务器', items:[
          {text: "好人服·诺金", link: 'https://toobee.top/'}
      ] }
    ],

    sidebar: [
      {
        text: '简介',
        items: [
          { text: '欢迎查看文档', link: '/introduction/introduction' },
          { text: '计划实现', link: '/introduction/todos' }
        ]
      }, 
      {
        text: '纯净服',
        items: [
          { text: '关于纯净服', link: '/vanilla/vanilla' },
          { text: '基础插件', link: '/vanilla/essentials' },
          { text: '领地', link: '/vanilla/residence' },
          { text: '交易', link: '/vanilla/trade' },
          { text: '假人', link: '/vanilla/fakeplayer' }
        ]
      }, 
      {
        text: '小游戏服',
        items: [
          { text: '关于小游戏服', link: '/minigames/minigames' }
        ]
      }
      
    ],

    socialLinks: [
      {
        icon: 'qq',
        link: 'https://qm.qq.com/cgi-bin/qm/qr?authKey=i8GuRb%2Bt0Dm5sEMbHRtvXKpuNFo36vED5BAYVe%2FnVURT9AS24XK7%2Fs3f6%2BtU%2B7Nr&k=Pap9NT2vzt2jA3RV74X2MH-35TSZV0RS&noverify=0',
        ariaLabel: 'QQ Group'
      }
    ],

    footer: {
      message: 'Presented by Futaba_Tachibana',
      copyright: 'Copyright © 2025 Admeunn'
    },

    docFooter: {
      prev: '上一篇文章',
      next: '下一篇文章'
    },
    outline: { label: '页面导航' },
    lightModeSwitchTitle: '切换至浅色背景',
    darkModeSwitchTitle: '切换至深色背景',

    search: {
      provider: 'local'
    },
  }
})
