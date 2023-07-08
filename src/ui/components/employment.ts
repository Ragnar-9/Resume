import { ResumeItem } from "../utils/utils";

   export class Employement extends ResumeItem {
        constructor() {
            super();
            const template: any = document.getElementById('employment');
            const templateContent = template.content;
            this.attachShadow({ mode: 'open' })
                .appendChild(templateContent.cloneNode(true));
        }

        create(){
            
        }


    }
    window.customElements.define('app-employment', Employement);

