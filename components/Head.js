const charset = document.createElement('meta')
const viewport = document.createElement('meta')
const title = document.createElement('title')
const css =  document.createElement('link')

charset.setAttribute('charset', 'UTF-8')

viewport.setAttribute('name','viewport')
viewport.setAttribute('content', 'width=device-width, initial-scale=1.0')

css.setAttribute('rel', 'stylesheet')
css.setAttribute('href', 'css/style.css')

document.head.appendChild(charset)
document.head.appendChild(viewport)
document.head.appendChild(title)
document.head.appendChild(css)

export {title}
