export default {
    // @ts-ignore
    install(app, options) {
        app.config.globalProperties.$log = (data: string) => {
            console.log(data)
        }
    }
}