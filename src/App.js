import React, { useReducer } from 'react';
import reducer, {initialState} from './reducers';
import { applyNumber, changeOperation, setMemory, setTotal, clearMemory, clearTotal } from './actions';


import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  
  const handleClick = (num) => {
    // dispatch(addOne());
    dispatch(applyNumber(num))
  }

  const handleOperationChange = (op) => {
    dispatch(changeOperation(op));
  }

  const handleSetMemory = () => {
    dispatch(setMemory());
  }

  const handleSetTotal = () => {
    dispatch(setTotal());
  }
  
  const handleClearMemory = () => {
    dispatch(clearMemory());
  }

  const handleClearTotal = () => {
    dispatch(clearTotal());
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={() => handleSetTotal()} value={"M+"}/>
              <CalcButton onClick={() => handleSetMemory()} value={"MR"}/>
              <CalcButton onClick={() => handleClearMemory()} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleClick(1)} value={1}/>
              <CalcButton onClick={() => handleClick(2)} value={2}/>
              <CalcButton onClick={() => handleClick(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleClick(4)} value={4}/>
              <CalcButton onClick={() => handleClick(5)} value={5}/>
              <CalcButton onClick={() => handleClick(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleClick(7)} value={7}/>
              <CalcButton onClick={() => handleClick(8)} value={8}/>
              <CalcButton onClick={() => handleClick(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleOperationChange('+')} value={"+"}/>
              <CalcButton onClick={() => handleOperationChange('*')} value={"*"}/>
              <CalcButton onClick={() => handleOperationChange('-')} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={() => handleClearTotal()} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
