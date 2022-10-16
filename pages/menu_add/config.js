// pages/menu_add/config.js
module.exports = {
  // 圆角输入框
  radius: {
    num: {
      right: true,
      mode: 'wrapped',
      title: '编号',
      inputType: 'text',
      placeholder: '请输入菜品编号',
      componentId:"num"
    },
    title: {
      right: true,
      mode: 'wrapped',
      title: '名称',
      inputType: 'text',
      placeholder: '请输入菜品名称',
      componentId:"title"
    },
    keyword: {
      right: true,
      mode: 'wrapped',
      title: '关键词',
      inputType: 'text',
      placeholder: '搜索菜品的关键字',
      componentId: "keyword"
    },
    introduce: {
      right: true,
      mode: 'wrapped',
      title: '简介',
      inputType: 'text',
      placeholder: '对于菜品的简介',
      componentId: "introduce"
    }
  },
};
