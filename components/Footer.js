class Footer {
    create() {
        this.element = document.createElement('footer')
        this.element.classList.add('footer')
        
        this.element.innerHTML=`
            <div class="container">
                <p>Footer txt</p>
            </div>
        `
        return this.element
    }
    init() {
        return this.create()
    }
}

const footer = new Footer ().init()

export default footer