import React from "react";
import { connect } from "react-redux";
// Actions
import { counterPlus } from "../../Actions/CounterActions";
import { counterMinus } from "../../Actions/CounterActions";
import { counterTwo } from "../../Actions/CounterActions";
import { PlusTwo } from "../../Actions/CounterActions";
import { InTwo } from "../../Actions/CounterActions";
import { MinusTwo } from "../../Actions/CounterActions";
import { Zero } from "../../Actions/CounterActions";

const Counter = ({ counter, counterPlus, counterMinus, counterTwo, PlusTwo, InTwo, MinusTwo, Zero }) => {
    return (
        <div className="qty mt-5">
            <span className="start bg-dark" onClick={Zero}>start</span>
            <span className="ontwo bg-dark" onClick={MinusTwo}>-2</span>
            <span className="ontwo bg-dark" onClick={InTwo}>/2</span>
            <span className="minus bg-dark" onClick={counterMinus}>-</span>
            <input type="number" className="count" name="qty" value={counter} />
            <span className="plus bg-dark" onClick={counterPlus} >+</span>
            <span className="ontwo bg-dark" onClick={counterTwo} >*2</span>
            <span className="ontwo bg-dark" onClick={PlusTwo} >+2</span>
        </div>
    )
}

const mapStateToProps = ({ CounterReducer }) => {
    console.log("mapStateToProps ", CounterReducer)
    const { counter } = CounterReducer;
    return { counter };
}
const mapDispatchToProps = {
    counterPlus,
    counterMinus,
    counterTwo,
    PlusTwo,
    InTwo,
    MinusTwo,
    Zero,
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);