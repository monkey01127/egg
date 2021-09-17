exports.keys = "monkey01127_copy";

// 添加 view 配置
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};

exports.development = {
  // don't reload when ts fileChanged
  // https://github.com/sindresorhus/multimatch
  reloadPattern: ['**', '!**/*.ts'],
};

exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0',
};

// add middleware robot
exports.middleware = [
  'robot',
  'test'
];
// robot's configurations
exports.robot = {
  ua: [
    /Baiduspider/i,
  ]
};
