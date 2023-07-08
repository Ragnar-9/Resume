export class Resume {
    init(defaultSelection?: string){
        const buttons = document.querySelectorAll('button[data-j-componentName]');
    console.log(buttons);
    let defaultComponent = null;

    buttons.forEach((btn) => {
        const componentName: string = btn.getAttribute('data-j-componentName') as string;
        if(!componentName) {
            return;
        }
        if(componentName === defaultSelection) {
            defaultComponent = btn;
        }
        const componentLoader: HTMLElement | null = document.getElementById('componentLoader');
        if(!componentLoader) {
            return;
        }
        btn.addEventListener('click', () => {
            const component = document.createElement(`app-${componentName}`);
            component.innerHTML = `<span slot="title">${componentName.toUpperCase()}</span>`;
            buttons.forEach((btnClassUpdate) => {
                btnClassUpdate.classList.remove('selected');
            });
            if (!btn.classList.contains('selected')) {
                btn.classList.add('selected');
            }

            const replaceNode = componentLoader.children[0];
            if (replaceNode) {
                componentLoader.replaceChild(component, replaceNode);
            } else {
                componentLoader.append(component);
            }
        });
    });
    this.selectDefault(defaultComponent);
    }

    selectDefault(defaultComponent: any) {
        if(!defaultComponent){
            return;
        }
        defaultComponent.click();
    }
}