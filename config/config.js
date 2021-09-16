// 自定义配置，参考 ./default/setting.config.js，需要自定义的属性在这里配置即可

module.exports = {
  theme: {
    color: '#337ab7', // 主题色
    mode: 'dark'
  },
  multiPage: true, // 多标签页
  hideSetting: false, // 隐藏设置抽屉
  fixedHeader: true, // 固定头部状态栏
  animate: {
    disabled: false,
    name: 'fade',
    direction: 'left'
  },
  SSO: {
    // TODO 统一登录环境配置
    main: 'https://tmspcloud.juneyaoair.com',
    login: 'https://hosso.juneyaoair.com/oauth2.0/authorize?response_type=code&client_id=100',
    logout: 'https://hosso.juneyaoair.com/logout'
    // main: 'http://localhost:8080/home',
    // login: 'https://test-sso.juneyaoair.com/oauth2.0/authorize?response_type=code&client_id=100',
    // logout: 'https://test-sso.juneyaoair.com/logout'
  }
}
