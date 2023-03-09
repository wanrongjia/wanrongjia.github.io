import useUserStore from './modules/user'
import useSystemStore from './modules/system'

// 统一导出useStore方法
export default function useStore() {
  return {
    user: useUserStore(),
    system: useSystemStore(),
  }
}