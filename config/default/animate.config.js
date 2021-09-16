const directS = ['left', 'right']
const directOne = ['left', 'right', 'down', 'up']
const directOneB = ['downBig', 'upBig', 'leftBig', 'rightBig']
const directTwo = ['topLeft', 'bottomRight', 'topRight', 'bottomLeft']
const directThree = ['downLeft', 'upRight', 'downRight', 'upLeft']

// animate.css 配置
const ANIMATE = {
  preset: [
    // 预设动画配置
    { name: 'back', alias: '渐近', directions: directOne },
    { name: 'bounce', alias: '弹跳', directions: directOne.concat('default') },
    {
      name: 'fade',
      alias: '淡化',
      directions: directOne
        .concat(directOneB)
        .concat(directTwo)
        .concat('default')
    },
    { name: 'flip', alias: '翻转', directions: ['x', 'y'] },
    { name: 'lightSpeed', alias: '光速', directions: directS },
    {
      name: 'rotate',
      alias: '旋转',
      directions: directThree.concat('default')
    },
    { name: 'roll', alias: '翻滚', directions: ['default'] },
    { name: 'zoom', alias: '缩放', directions: directOne.concat('default') },
    { name: 'slide', alias: '滑动', directions: directOne }
  ]
}
module.exports = ANIMATE
