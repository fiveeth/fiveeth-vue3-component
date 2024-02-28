import Button from "./Button/src/index.vue";

// 按需导入组件
export { Button }

const components = [Button]
const install = (App) => {
    components.forEach(component => {
        App.component(component.__name, component)
    })
}

// 全局导入所有组件
export default {
    install
}
