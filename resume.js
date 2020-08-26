(() => {
    const buttons = document.querySelectorAll('button[data-j-componentName]');
    console.log(buttons);


    buttons.forEach((btn) => {
        const componentName = btn.getAttribute('data-j-componentName');
        const componentLoader = document.getElementById('componentLoader');

        btn.addEventListener('click', () => {
            const component = document.createElement(`app-${componentName}`);
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
})();