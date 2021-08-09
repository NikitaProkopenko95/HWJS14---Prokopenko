import header from './Header.js'
import main from './Main.js'
import footer from './Footer.js'
import data from './Data.js'

class App {
        create() {
            this.app = document.createElement('div');
            this.app.classList.add('app');
            this.app.appendChild(header);
            this.app.appendChild(main);
            this.app.appendChild(footer);
            data.then(newData => newData)

            document.body.appendChild(this.app) 

            //==================================== ДАННЫЕ С API надо в метод

            async function getResp() {
                let resp = await fetch('https://fakestoreapi.com/products')
                let content = await resp.json()
                content = content.splice(0,10)

                for(let key in content)
                console.log(content[key])

                // localStorage.setItem('content', '') == не понимаю
            }
            getResp()   
            
            //==================================== сохранить в localstorage
      }
        render() {
            
            //==================================== не создается document.body.appendChild(this.app);
            // document.body.appendChild(this.app);
        }
        init() {
            import ('./Head.js')
                .then ((data) => {
                    let headTitle = data.title
                    headTitle.innerHTML="NIK"
                    this.create()
                }) 
            // добавить CSS каталог
        }
}

const app = new App().init()

export default app
