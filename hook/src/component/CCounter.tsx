import { Component } from "react";



type Props={
    count:number;
};

type State ={
    count:number;
};

export default class CCounter extends Component<Props,State>{
    constructor(props:Props){
        super(props);
        this.state={
            count:props.count,
        };
    }
    handleClick =():void =>{
        this.setState((prevState)=>{
            return {count:prevState.count+1};
        });
    };

    render(){
        console.log('render 호출');
    return(
        <div>
            <p>{this.state.count}번 클릭</p>
            <button onClick = {this.handleClick}>클릭</button>
        </div>
    );
    }
    componentDidMount():void{
        console.log('componentDidMount 호출');
    }
    componentDidUpdate():void{
        console.log('componentDidUpdate 호출');

    }
    componentWillUnmount():void{
        console.log('componentWillUnmount 호출');
    }

}