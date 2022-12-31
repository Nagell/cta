export default function loadCQ() {
    const script = document.createElement('script')
    
    setTimeout(() => {
        script.src = 'http://cdn.jsdelivr.net/npm/container-query-polyfill@1/dist/container-query-polyfill.modern.js'
    },
    100)
    document.getElementsByTagName('head')[0].appendChild(script)
}