import type { IConfig } from 'dumi'

// const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const config: IConfig = {
  title: 'Ant Design Mini',
  favicon: 'https://gw.alipayobjects.com/zos/bmw-prod/35bd3910-2382-4f5d-903f-ac4c31b76199.svg',
  logo: 'https://gw.alipayobjects.com/zos/bmw-prod/d1971355-ffff-44ef-9e20-1bc9a237d463.svg',
  outputPath: 'docs-dist',
  locales: [['zh', '中文']],
  mode: 'site',
  hash: true,
  // routes: [
  //   { path: '/preview', component: 'plugin/preview.tsx' },
  // ],
  algolia: {
    appId: '8V6T3YYVB3',
    apiKey: '00471a2ff478c1da9b9e3634edf53a6f',
    indexName: 'mini-ant',
  },
  ssr: {},
  exportStatic: {},
  sitemap: {
    hostname: 'https://mini.ant.design',
  },
  plugins: ['./plugin/index.ts'],
  metas: [
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover',
    },
  ],
  headScripts: [
    { src: 'https://gw.alipayobjects.com/os/lib/current-device/0.10.2/umd/current-device.min.js' },
    { src: 'https://v1.cnzz.com/z_stat.php?id=1280900245&web_id=1280900245' }
  ],
  links: [
    {
      rel: 'preconnect',
      href: 'https://8V6T3YYVB3-dsn.algolia.net'
    }
  ],
  scripts: [
    `
    var a = document.querySelector(".__dumi-default-navbar-logo")
    a && (a.innerHTML = '');
    `,
    `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtag/js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','G-M5MFVPJE7L');
    `,
    `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-M5MFVPJE7L');`,
    `
    if(window.location.pathname==='/components/icon'){
      window.addEventListener('message', async (e) => {
        if(e.data.iconType) {
          await navigator.clipboard.writeText(e.data.iconType);
        }
      })
    }
    `,
    `
    (function () {
      function matchBrowser() {
        var userAgent = navigator.userAgent;
        var isIE = (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1) || userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;

        return isIE;
      }
      
      function renderBrowserUpdate() {
        var div = document.createElement("div");
        var style = document.createElement("style");
        style.setAttribute("type", "text/css");
        var styleContent =
            "html, body { width: 100%; height: 100%; overflow: hidden; }.legacy-warn { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #fff; z-index: 999999; }  .legacy-container {      position: relative;    width: 940px;      margin: 150px auto;  }  .legacy-close {      position: absolute;    right: -16px;    top: -32px;    cursor: pointer;   }  .legacy-img { width: 438px; float: left;  margin-right: 16px;}.legacy-tips{float: right;}.legacy-img img {min-width: 100%; max-width: 100%;}.legacy-tips-title { margin-bottom: .5em; color: rgba(0,0,0,.85); font-weight: 600; font-size: 30px;line-height: 1.35;}.legacy-tips-desc {  margin: 8px 0 24px;color: rgba(0,0,0,.45);font-size: 16px;  line-height: 24px;}.legacy-browsers {  margin-top: 40px;}.legacy-browsers li {  display: inline-block;  text-align: center;  width: 44px;  margin-right: 32px;}.legacy-browsers a {  color: rgba(0, 0, 0, 0.65); text-decoration: none; }.legacy-browsers img { margin-bottom: 8px;}";
        // support IE 8
        if (style.styleSheet) {
          style.styleSheet.cssText = styleContent;
        } else {
          style.innerHTML = styleContent;
        }

        div.innerHTML =
          '<div class="legacy-warn"><div class="legacy-container"><div class="legacy-close" id="legacy-close">X</div><div class="legacy-img"><img src="https://gw.alipayobjects.com/mdn/rms_defc2e/afts/img/A*vU2YQp24hpIAAAAAAAAAAABkARQnAQ" alt="" width="438" height="268" ></div><div class="legacy-tips"><p class="legacy-tips-title">浏览器版本不兼容</p><p class="legacy-tips-desc">浏览器版本过低，为避免可能存在的安全隐患，推荐升级以下浏览器</p><ul class="legacy-browsers"><li><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/chrome/"><img src="https://gw.alipayobjects.com/mdn/rms_66ee3f/afts/img/A*DU8tSpLpRHYAAAAAAAAAAABkARQnAQ" alt="" width="32" height="32"><span>Chrome</span></a></li><li><a target="_blank" rel="noopener noreferrer" href="https://www.microsoft.com/edge"><img src="https://gw.alipayobjects.com/zos/antfincdn/F2rupPM9KL/Microsoft_Edge_Logo.png" alt="" width="32" height="32"><span>Edge</span></a></li><li><a target="_blank" rel="noopener noreferrer" href="https://support.apple.com/downloads/safari"><img src="https://gw.alipayobjects.com/mdn/rms_66ee3f/afts/img/A*TN2-R5PECp0AAAAAAAAAAABkARQnAQ" alt="" width="32" height="32"><span>Safari</span></a></li><li><a target="_blank" rel="noopener noreferrer" href="https://www.mozilla.org/exp/firefox/new/"><img src="https://gw.alipayobjects.com/mdn/rms_66ee3f/afts/img/A*m0yRSZUoWFMAAAAAAAAAAABkARQnAQ" alt="" width="32" height="32"><span>Firefox</span></a></li></div></div></div></div>';

        document.body.appendChild(style);
        document.body.appendChild(div);

        var closeEle = document.getElementById("legacy-close");
        if (closeEle) {
          closeEle.onclick = function () {
            document.body.removeChild(div);
            document.body.removeChild(style);
          };
        }
      }

      try {
        if (matchBrowser()) {
          renderBrowserUpdate();
        }
      } catch (e) {
        console.error("[BrowserUpdate ERROR]", navigator.userAgent, e);
      }
    })();
    `
  ],
  styles: [`
  html {
    touch-action: manipulation;
  }
  #root .__dumi-default-dark {
    display: none;
  }
  #root .__dumi-default-navbar {
    padding-left: 32px;
  }
  #root .__dumi-default-navbar-logo{
    padding-left: 200px;
    text-indent: -10000px;
  }
  #root .__dumi-default-navbar{
    box-shadow: none;
  }
  a[title='站长统计']  {
    display: none;
  }
  #simulatorContainer {
    top: 100px !important;
    height: 700px !important;
  }
  #root .__dumi-default-device {
    margin-left: 5px;
    width: 370px;
  }
  #root .__dumi-default-layout-content {
    margin: 0 auto;
  }

  #root .__dumi-default-device[data-device-type="iOS"] {
    display: none;
  }
  #root .__dumi-default-menu-inner ul li ul {
    padding-left: 0;
  }
  #root .__dumi-default-navbar nav > span > a:hover,#root  .__dumi-default-navbar nav > span > a.active {
    color: #1677ff;
  }
  #root .__dumi-default-menu[data-mode='site'] .__dumi-default-menu-list > li > a.active {
    color: #1677ff;
    background-color: #EDF3FF;
  }
  #root .__dumi-default-menu[data-mode="site"] .__dumi-default-menu-list > li > a:hover {
    color: #1677ff;
  }
  #root .markdown a {
    color: #1677ff;
  }
  /** 侧边栏选中状态 */
  #root .__dumi-default-menu-inner > ul ul a.active{
    background-color: #EDF3FF;
    color: #1677ff;
  }
  /** 侧边栏悬停状态 */
  #root .__dumi-default-menu-inner > ul ul a:hover {
    color: #1677ff;
  }
  #root .__dumi-default-menu-inner ul li.active a::before,  #root  .__dumi-default-menu-inner ul li a.active::before{
    display: none;
  }
  /** 左侧选中状态竖线 */
  #root .__dumi-default-menu-inner ul li.active a::after,  #root  .__dumi-default-menu-inner ul li a.active::after{
    position: absolute;
    content:'';
    right: 1px;
    top: 0;
    height: 100%;
    width: 2px;
    background: #1677FF;
  }

  /** header选中状态上划线 */
  #root .__dumi-default-navbar nav > span > a.active::after {
    background: #1677FF;
    bottom: auto;
    top: 0;
  }
  @media only screen and (min-width: 768px) {
    #root .__dumi-default-menu[data-mode='site'] {
      width: 240px;
      padding-top: 32px;
    }
    #root .__dumi-default-menu[data-mode='site'] .__dumi-default-menu-list > li > a ~ ul {
      margin-left: 0;
    }
    #root .__dumi-default-menu[data-mode='site'] .__dumi-default-menu-list > li > a {
      padding-left: 40px;
    }
    #root .__dumi-default-menu-inner > ul ul a {
      padding-left: 40px;
    }
  }
  /** 分类标题 */
  #root .__dumi-default-menu-inner > ul > li > a:not([href]) {
    color: #8C8B8C !important;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid #EBEDF0;
    margin-bottom: 8px;
    padding-left: 0!important;
    margin-left: 40px;
    margin-right: 24px;
  }
  /** a标签 */
  #root .__dumi-default-menu-inner ul li a,  #root .__dumi-default-menu-inner ul li > span {
    line-height:  38px;
    margin-bottom: 8px;
    color: #000;
    font-size: 14px;
  }
  #root .__dumi-default-table {
    margin-top: 0;
    margin-bottom: 0;
  }
  #root .__dumi-default-table-content {
    border-radius: 12px;
    border: 1px solid #ebedf1;
  }
  /** 选中底部线条 */
  #root .__dumi-default-tabs-ink-bar {
    background: #1677ff;
  }
  #root .__dumi-default-previewer-source-tab {
    border: none;
    background: rgba(0,0,0,.02);
  }
  #root .__dumi-default-tabs-tab {
    color: #314659;
  }
  #root .__dumi-default-tabs-tab-active {
    color: #1677ff;
  }

  /** 底部github编辑、最后更新时间 */
  #root .__dumi-default-layout-footer-meta > a, #root .__dumi-default-layout-footer-meta > span:last-child::before {
    color: #1677ff;
  }
  /** 左侧标题描述 */
  #root .__dumi-default-menu-inner > ul ul a>span>span {
    display: inline;
    padding-left: 8px;
    color: rgba(0,0,0,.45);
  }
  /** 描述选中态 */
  #root .__dumi-default-menu-inner > ul ul a.active>span>span,  #root .__dumi-default-menu-inner > ul ul a:hover>span>span {
    color: #1677ff73;
  }
  #root .__dumi-default-layout[data-site-mode='true'][data-show-sidemenu='true'] {
    padding-left: 280px;
    padding-top: 104px;
  }
  #root .markdown table {
    border-radius: 12px;
    overflow: hidden;
  }
  #root .markdown ul {
    margin: 0;
  }
  #root .markdown li {
    margin-left: 20px;
    padding-left: 4px;
    list-style-type: circle;
  }
  #root .markdown p {
    margin: 0;
    font-size: 14rpx;
    color: #314659;
    line-height: 28px;
  }
  #root .markdown .__dumi-default-code-block {
    border-radius: 12px;
  }
  #root .markdown hr {
    border-top: none;
    margin: 0 0 24px;
  }
  #root .markdown .margin16 {
    margin-bottom: 16px;
  }
  #root .markdown h1 {
    font-size: 30px;
    line-height: 38px;
    color: #0D1A26E6;
    margin-bottom: 16px;
  }
  #root .markdown h2 {
    font-size: 24px;
    line-height: 32px;
    color: #0D1A26E6;
    margin-top: 40px;
    margin-bottom: 16px;
  }
  #root .markdown h2#属性 {
    margin-top: 64px;
  }
  /** h3 */
  #root .markdown h3 {
    font-size: 18px;
    line-height: 32px;
    color: #0D1A26E6;
    margin-top: 24px;
    margin-bottom: 16px;
  }
  #root .markdown h4 {
    margin-top: 24px;
    margin-bottom: 16px;
  }
  /** 内容区锚点 */
  #root .__dumi-default-layout-toc li a.active {
    color: #1677ff;
  }
  #root .__dumi-default-layout-toc li a.active::before {
    background: #1677ff;
  }
  /** 样式类table样式，判断只有2个th */
  th:nth-last-child(2):first-child {
    width: 40%;
  }
  /** 事件table样式，判断只有3个th */
  th:nth-last-child(3):first-child {
    width: 20%;
  }
  th:nth-last-child(2):nth-child(2) {
    width: 40%;
  }
  `],
  navs: {
    zh: [
      {
        title: '指南',
        path: '/guide',
      },
      {
        title: '组件',
        path: '/components',
      },
      {
        title: '资源',
        path: '/resources',
      },
      {
        title: '国内镜像',
        path: 'https://ant-design-mini.antgroup.com',
      },
      {
        title: 'v1',
        // 可通过如下形式嵌套二级导航菜单，目前暂不支持更多层级嵌套：
        children: [
          { title: 'v1', path: 'https://mini.ant.design' },
          { title: 'v0', path: 'https://0x-mini.ant.design' },
        ],
      },
      {
        title: '发布日志',
        path: 'https://github.com/ant-design/ant-design-mini/releases',
      },
      {
        title: '仓库地址',
        path: 'https://github.com/ant-design/ant-design-mini',
      },
    ],
  },
  menus: {
    '/': [
      {
        title: 'Home',
        path: 'index',
      },
    ],
    '/guide': [
      {
        title: '快速开始',
        path: '/guide/quick-start',
      },
      {
        title: '定制主题',
        path: '/guide/customize-theme',
      },
      {
        title: '升级到v1',
        path: '/guide/migration-v1',
      },
      {
        title: '贡献指南',
        path: '/guide/contribute',
      },
      {
        title: '常见问题',
        path: '/guide/faq',
      },
    ],
  },

  chainWebpack(config) {
    // @ts-ignore
    // config.plugin('MonacoWebpackPlugin').use(MonacoWebpackPlugin, [
    //   {
    //     languages: ['javascript', 'typescript', 'json', 'css', 'html', 'xml'],
    //     publicPath:
    //       process.env.NODE_ENV === 'development' ? 'http://localhost:8000/' : 'https://gw.alipayobjects.com/a/minidev/',
    //   },
    // ])
  }
};

export default config;
