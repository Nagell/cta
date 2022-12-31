export default function loadCQ() {
    const script = document.createElement('script')
    
    setTimeout(() => {
        script.src = 'https://cdn.jsdelivr.net/npm/shadow-container-query-polyfill@1/dist/shadow-container-query-polyfill.modern.mjs'
    },
    500)
    document.getElementsByTagName('head')[0].appendChild(script)
}