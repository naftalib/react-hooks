import React, { useContext, useState, useEffect, useReducer } from 'react';
import * as ACTIONS from '../store/actions/actions';
import * as UserReducer from '../store/hooks_state/user_reducer_hooks';
import * as Reducer1 from '../store/hooks_state/reducer1_hooks';
import Context from '../utils/context';


const HooksContainer1 = () => {
  const context = useContext(Context)

  //const value = useState(0)[0]
  //const setValue = useState(0)[1]
  const [value, setValue] = useState(0)

  const [useEffectValue, setUseEffectValue] = useState(null)

  const [state, dispatch] = useReducer(Reducer1.Reducer1, Reducer1.initialState)

  useEffect(() => {
      setTimeout(() => setUseEffectValue("useEffect worked"), 3000 );
  }, [value])

  const incrementValue = () => {
    setValue(value + 1 )
  }

  const decrementValue = () => {
    setValue(value - 1 )
  }

  const handleuseEffectValue = () => {
    setUseEffectValue("some string")
  }

  const handleDispatchTrue = () => {
    //    dispatch2(type: "SUCCESS")
    //    dispatch2(ACTIONS.SUCCESS)
    dispatch(ACTIONS.success())
  }

  const handleDispatchFalse = () => {
    //     dispatch2(type: "FAILURE")
    //    dispatch2(ACTIONS.FAILURE)
    dispatch(ACTIONS.failure())
  }

  return (
    <div>
      <div>
      <button onClick={() => handleuseEffectValue()}> Handle Value  </button>
      <button onClick={() => handleDispatchTrue()}>Dispatch True </button>
      <button onClick={() => handleDispatchFalse()}>Dispatch False </button>
      <button onClick={() => context.dispatchContextTrue()}>Dispatch Context True </button>
      <button onClick={() => context.dispatchContextFalse()}>Dispatch Context False </button>
      <button onClick={() => incrementValue()}> Add Local Value </button>
      <button onClick={() => decrementValue()}> Dec Local Value </button>
      <button onClick={() => context.addGlobalValue()}> Add Global Value </button>
      <button onClick={() => context.decGlobalValue()}> Dec Global Value </button>
      <br />
      <br />
      {context.useContextSubmitState
        ? <h3> {context.useContextSubmitState} </h3>
        : <h3> No User Text </h3>
      }
      <br />
      {state.stateprop1
        ? <p> stateprop1 is true </p>
        : <p> stateprop1 is false </p>
      }
      <br />
      {context.userReducer1State
        ? <p> stateprop2 is true </p>
        : <p> stateprop2 is false </p>
      }
      <br />
      {useEffectValue
        ? <p> { useEffectValue }</p>
        : <p> No value </p>
      }
      <br />
      <p>Local Value: {value}</p>
      <br />
      <p>Global Value: {context.valueGlobalState}</p>
      <br />
      </div>
    </div>
  )
}



export default HooksContainer1;
