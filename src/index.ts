// src/index.ts
import type { App } from 'vue'
import Button from './components/button/Button.vue'
import Input from './components/input/Input.vue'
import Form from './components/form/Form.vue'
import FormItem from './components/form/FormItem.vue'
import Select from './components/select/Select.vue'
import Collapse from './components/collapse/Collapse.vue'
import CollapseItem from './components/collapse/components/CollapseItem.vue'
import DropDown from './components/dropdown/DropDown.vue'
import Icon from './components/icon/Icon.vue'
import Message from './components/message/Message.vue'
import Switch from './components/switch/Switch.vue'
import ToolTip from './components/toolTip/ToolTip.vue'

// 需要把组件名设置好（.name），否则 install 时拿不到名字
const components = [
  Button,
  Input,
  Form,
  FormItem,
  Select,
  Collapse,
  CollapseItem,
  DropDown,
  Icon,
  Switch,
  ToolTip
]

const install = (app: App) => {
  components.forEach(comp => {
    if ((comp as any).name) {
      app.component((comp as any).name, comp)
    }
  })
}

// 自动全局安装（script 引入时）
if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue)
}

export {
  Button,
  Input,
  Form,
  FormItem,
  Select,
  Collapse,
  CollapseItem,
  DropDown,
  Icon,
  Message,
  Switch,
  ToolTip
}

export default { install }
