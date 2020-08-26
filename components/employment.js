(() => {
    class About extends HTMLElement {
        constructor() {
            super();
            const template = document.getElementById('employment');
            const templateContent = template.content;
            this.attachShadow({ mode: 'open' })
                .appendChild(templateContent.cloneNode(true));
        }
    }
    window.customElements.define('app-employment', About);

})();