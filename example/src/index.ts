
/// <reference path="./components/index.ts" />

namespace app {

    const {
        App,
    } = components;

    export const main = () => {
        ReactDOM.render(<App />, document.getElementById('#mount-point'));
    };

};
