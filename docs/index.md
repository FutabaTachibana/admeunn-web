---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: Admeunn服务器
  text: 高版本群组服
  tagline: Admeunn服务器致力于打造一个和谐友好的游戏环境。无论你是建筑达人、红石高手，还是纯粹的生存冒险者，Admeunn服务器都将成为你最理想的游戏乐园！
  image: 
    src: '/image/image.png'
    alt: VitePress
  actions:
    - theme: brand
      text: 文档
      link: /introduction/introduction
    - theme: alt
      text: 服务器地址
      link: /introduction/introduction.html#%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%9C%B0%E5%9D%80
    - theme: alt
      text: 加入QQ群
      link: https://qm.qq.com/cgi-bin/qm/qr?authKey=i8GuRb%2Bt0Dm5sEMbHRtvXKpuNFo36vED5BAYVe%2FnVURT9AS24XK7%2Fs3f6%2BtU%2B7Nr&k=Pap9NT2vzt2jA3RV74X2MH-35TSZV0RS&noverify=0

features:
  - icon: 🛠️
    title: 优秀的管理团队
    details: 专业的管理团队，负责制作游戏内容、找到并处罚作弊的玩家等工作，为玩家安心游玩保驾护航。
  - icon: ⚡️
    title: 强劲的服务器性能
    details: 为保障玩家游戏体验，减少卡顿，我们不采用羸弱的面板服开服，而是性能强大的VPS。
  - icon: ❤️
    title: 优秀的游戏氛围
    details: 游戏氛围优秀，玩家之间其乐融融，互帮互助。


---

<script setup>
  import { VPTeamMembers } from 'vitepress/theme'
  const members = [
    {
      avatar: './image/avatar/Futaba_Tachibana.jpg',
      name: 'Futaba_Tachibana',
      title: '技术/网站搭建',
      links: [
        { icon: 'github', link: 'https://github.com/FutabaTachibana' },
        { icon: 'bilibili', link: 'https://space.bilibili.com/37149306' }
      ]
    },
    {
      avatar: './image/avatar/Dr_SFLSJ.jpg',
      name: 'Dr_SFLSJ',
      title: '宣传/文案',
      links: [
        
      ]
    },
    {
      avatar: './image/avatar/wyykoko.jpg',
      name: 'wyykoko',
      title: '美工/建筑',
      links: [
        
      ]
    },
    {
      avatar: './image/avatar/Dark_Young.jpg',
      name: 'Dark_Young',
      title: '部分资金支持',
      links: [
        
      ]
    },
    {
      avatar: './image/avatar/Ringona.jpg',
      name: 'Ringona',
      title: '日常管理',
      links: [
        
      ]
    },
    {
      avatar: './image/avatar/CloudLeaf_.jpg',
      name: 'CloudLeaf_',
      title: '日常管理',
      links: [
        
      ]
    },
  ]
</script>

<h2 style="text-align:center; line-height:2.0; font-size:250%;"><b>运维团队</b></h2>

<VPTeamMembers size="medium" :members="members" />

