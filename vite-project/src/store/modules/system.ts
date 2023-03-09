import { defineStore } from 'pinia'

export default defineStore('system', {
    state: () => ({
        title: 'Vite + Vue3 + Pinia + ElementPlus + TypeScript',
        config: {
            size: "default",
            zIndex: 2000,
            button: {
                autoInsertSpace: false
            }
        }
    }),
    getters: {
    },
    actions: {
        async insertPost(data: string) {
            // 可以做异步
            // await doAjaxRequest(data);
        }
    },
})