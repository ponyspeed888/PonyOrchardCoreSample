//const FancyButton = React.forwardRef((props, ref) => (


//    <button ref={ref} color="Accent" className="FancyButton">
//        accent fancy {props.children} 
//    </button>
//));


function FancyButton(props) {
    return <Button color="Accent" className="FancyButton">
        Accent FancyButton {props.children}
    </Button>
} ;

