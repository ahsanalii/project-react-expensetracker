import React,{useState,useContext} from 'react';
import {GlobalContext} from '../context/GlobalState'

function AddTransaction(){
    const [text, setText]=useState('');
    var [amount, setAmount]=useState({});
    const {addTransaction}=useContext(GlobalContext);
    const onSubmit=e=>{
        e.preventDefault();
        const newTransaction={
            id: Math.floor(Math.random()*100000000),
            text,
            amount:+amount
        }
        addTransaction(newTransaction);
        setAmount(0);
        setText('');
    }

    /*const incomeHandler=(e)=>{
        e.preventDefault();
        if(amount<0){
            alert("You can't enter negative value")
            setText('');
            setAmount('');
            return false;
        }
        setAmount(amount);
        

    }
    const expenseHandler=(e)=>{
        e.preventDefault();
        if(amount<0){
            alert("You can't enter negative value")
            setText('');
            setAmount('');
            return false;
        }
        amount*=-1;
        setAmount(amount);

    }*/
    
    return(
        <>
            <h4>Add New Transaction</h4>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="Enter Description here"  />
                </div>


                <div className="form-control">
                    <label htmlFor="amount">Amount<br/>negative(-) expense , positive(+) income</label>
                    <input type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder="Enter Amount here"  />
                </div>
                <button className="btn" >Add Transaction</button> 
                  
            </form>
            
            
        </>
    )

}
export default AddTransaction;