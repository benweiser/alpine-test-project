import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 


document.addEventListener('alpine:init', () => {
    Alpine.data('data', () => ({
        data: [],
        loading: false,

        async getData() {
            this.loading = true

            try {
            const response = await fetch('https://swapi.dev/api/people/')
            const data = await response.json()
            this.data = data.results
            } catch (e) {
                // handle error state
            } finally {
                this.loading = false
            }
        }
    }))
})

Alpine.start()