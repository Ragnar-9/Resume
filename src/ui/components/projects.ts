import { ResumeItem } from "../utils/utils";

    export class Project extends ResumeItem{
            constructor() {
                super();
                const template: any = document.getElementById('project');
                const templateContent = template.content.cloneNode(true);
                this.attachShadow({ mode: 'open' })
                    .appendChild(templateContent);
            }

            create(){
            }
    }
    window.customElements.define('app-project', Project);
