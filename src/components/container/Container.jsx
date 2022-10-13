import Card from "../card/Card";

import { useState } from "react";

const Container = (props)=>{

    const [count , setCount] = useState(5)

    const inc =()=>{
        count>=20 ? setCount(5): setCount(count+5);
        console.log(count)
    }
    
    const dec = ()=>{
         count<=5 ? setCount(20): setCount(count-5);
         console.log(count);
    }

    const {data} =props;
    // console.log(data);
    return (
        <div className="container mx-auto my-4 bg-light">
            <h1 className="text-center">Employee List</h1>
            <h3 className="text-center">Employees <span>{count-4}</span> to <span>{count}</span></h3>
            <div className="cards mt-5">
                {data.map((item,index)=>{
                    if(index>=(count-5) && index<count){
                        const {id, name , age , image , email} = item;
                    return(
                        <Card key={id} name={name} age={age} image={image} email={email} />
                        )
                    }
                    
                })}
                
            </div>
            <div className="btns text-center p-3">
                  <button  onClick={dec} className="btn btn-info mx-3 p-2 text-white fs-3">Prev</button>
                  <button onClick={inc} className="btn btn-info p-2 fs-3 text-white">Next</button>
            </div>
        </div>
    )
}

export default Container;