class XSearch extends HTMLElement {
    connectedCallback() {
        const mountPoint = document.createElement('span');
        this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

        const name = this.getAttribute('name');
        console.log("XSearch name is  " + name );
        const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);

        var a = React.createElement("a", {
            href: url
        }, name);
        ReactDOM.render(a, mountPoint);


        //ReactDOM.render(<a href={url}>{name}</a>, mountPoint);
    }
}

customElements.define('x-search', XSearch);
