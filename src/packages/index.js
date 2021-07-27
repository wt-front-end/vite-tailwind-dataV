/*
 * @Author: xkloveme
 * @Date: 2021-07-27 14:39:23
 * @LastEditTime: 2021-07-27 17:28:14
 * @LastEditors: xkloveme
 * @Description: 包主入口
 * @FilePath: /shijianwei-dx-hidden-danger/src/packages/index.js
 * @Copyright © xkloveme
 */
import WtCard from './wt-card'
import WtModal from './wt-modal'
import WtTitle from './wt-title'

const components = [WtCard,WtModal,WtTitle]

// eslint-disable-next-line to ignore the next line.
const install = function(Vue) {
  components.map((component) => {
    Vue.component(component.name, component)
  })
}
export default {
  install,
  ...components,
}