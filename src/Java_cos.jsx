import { useState } from 'react'
import './App.css'

function calc(n1,n2,opr) {
    var outpt = 0;
    switch(opr.charAt(0)){
        case '+':
            outpt = parseInt(n1)+parseInt(n2);
            return n1+opr+n2+"="+outpt;
        case '-':
            outpt = parseInt(n1)-parseInt(n2);
            return n1+opr+n2+"="+outpt;
        case '/':
            if (n2 == 0 )
            {
                outpt = "Nie dziel przez zero!!";
                return outpt;
            }
            else
            {
                outpt = parseInt(n1)/parseInt(n2); 
                console.log(n1,opr,n2,"=",outpt) 
                return n1+opr+n2+"="+outpt;
            }
        case '*':
            outpt = parseInt(n1)*parseInt(n2);
            return n1+opr+n2+"="+outpt;
    }
    
    
    
    console.log(n1,opr,n2,"=",outpt)
}
function Java_cos() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operand, setOperand] = useState('+');
    const [output, setOutput] = useState('');

  return (
    <div>
     <div>Prosty kalkulator Java</div>
     <div className="grid">
        <div className="output">
        {output}
        </div>
        <input type="number"
            value={num1}
            onChange={(num1_obj) => setNum1(num1_obj.target.value)}>

        </input>
        <input type="number"
            value={num2}
            onChange={(num2_obj) => setNum2(num2_obj.target.value)}>
        </input>
        <select id="operands" 
            value={operand}
            onChange={(operand_obj) => setOperand(operand_obj.target.value)}
            placeholder=""
        >
            <option value="+" default> + </option>
            <option value="-"> - </option>
            <option value="*"> * </option>
            <option value="/"> / </option>
        </select>

        <button 
            onClick={() => setOutput(calc(num1,num2,operand))}>
            Licz!
        </button>
        {/*
        <button 
            onClick={() => console.log(num1,num2,operand)}>
            debug
        </button>
        <div className="debug">
            <span>{num1}</span>
            <span>{operand}</span>
            <span>{num2}</span>
            
            
        </div>
        */}
     </div>
    </div>
  )
}

export default Java_cos