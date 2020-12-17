import ReactDOM from 'react-dom';
//import Button from 'muicss/lib/react/Button';



class Example extends React.Component {
    render() {



        return ( 
            <div>
                <div>
                    <Button>Button</Button>
                    <Button color="primary" variant="contained" >Button</Button>
                    <Button color="danger">Button</Button>
                    <Button color="accent">Button</Button>
                </div>
                <div>
                    <Button disabled={true}>Button</Button>
                    <Button color="primary" disabled={true}>Button</Button>
                    <Button color="danger" disabled={true}>Button</Button>
                    <Button color="accent" disabled={true}>Button</Button>
                </div>
            </div>
        );
    }
}

export default Example;


//ReactDOM.render(<Example />, document.getElementById('mui'));
console.log("mui called");
