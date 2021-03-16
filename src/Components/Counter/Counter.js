import React from "react";
import { connect } from "react-redux";
// Actions
import { counterPlus } from "../../Actions/CounterActions";
import { counterMinus } from "../../Actions/CounterActions";

const Counter = ({ counter, counterPlus,counterMinus }) => {
    return (
        <div className="qty mt-5">
            <span className="minus bg-dark" onClick={counterMinus}>-</span>
            <input type="number" className="count" name="qty" value={counter} />
            <span className="plus bg-dark" onClick={counterPlus} >+</span>
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
    counterMinus
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);