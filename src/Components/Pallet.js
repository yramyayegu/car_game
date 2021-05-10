import React, { useState,useEffect } from "react"
import Car from '../car.png';
const Pallet = (props) =>{

  
    var classn = "pallet ";
    var [car,setcar] = useState(null);   
    let leftright  = [2,3,4,9,19,29,28,27,32,33,34,35,24]
    let topleft    = [1,7,26]
    let topbottom  = [6,11,16,12,13,15,17]
    let topright   = [21,31,23]
    let bottomright= [20,22,30]
    let leftbottom = [25,10]
    let yellow     = [7,25,30,10,23,1,21,26,31]
    let green      = [5]
    let blue      = [35]
 
    let [style,setstyle] = useState("rotatetop")
    
    if( props.ii === 14 )
    {
        classn += "o-round "
    }
    if( props.ii === 5 )
    {
        classn += "o-left-right-bottom "
    }
    if( props.ii === 35 )
    {
        classn += "o-left-right-bottom "
    }

    if( props.ii === 18 )
    {
        classn += "o-top "
    }

    if( props.ii === 8 )
    {
        classn += "o-left "
    }

    
    if( leftright.includes(props.ii) ){
        classn += "left-right "
    } 
    if( topleft.includes(props.ii) ){
        classn += "top-left "
    } 
    if( topbottom.includes(props.ii) ){
        classn += "top-bottom "
    } 
    if( topright.includes(props.ii) ){
        classn += "top-right "
    } 
    if( bottomright.includes(props.ii) ){
        classn += "bottom-right "
    } 

    if( leftbottom.includes(props.ii) ){
        classn += "left-bottom "
    } 


    if( yellow.includes(props.ii) ){
        classn += "yellow"
    } 

    if( green.includes(props.ii) ){
        classn += "green"
    }
    if( blue.includes(props.ii) ){
        classn += "blue"
    } 

    
  



    let getclass = (classn) =>{
        let cls = classn.split(' ')
        console.log(cls)
        if(cls.includes('blue')){
            return 'finish'
            
        }else{
            return cls[1].split('-')
        }
    }

    useEffect(()=>{
        if(props.nextmove === props.ii)
        {
            
//            console.log("props.clickedDirection : "+props.clickedDirection)
//            console.log(style)
            
            
            switch(props.clickedDirection)
            {
                case "top" : 
                    setstyle("rotatetop")
                break;
                case "bottom" : 
                    setstyle("rotatebottom")
                break;
                case "right" : 
                    setstyle("rotateright")
                break;
                case "left" : 
                    setstyle("rotateleft")
                break;
            }
            setcar("car")  
            console.log(style)
            let dontmove = getclass(classn)
           //console.log(dontmove)
           props.nextMovebtn(dontmove)
        }else{
            setcar("")        
        }
        
    },[props,classn])


    useEffect(()=>{
        if(props.ii === 5)  
        {   
            setcar("car")        
            let returnback = {
                classnames : classn,
                cellno : props.ii
            }
            setstyle("rotatetop")
            props.getClassfrompallet(returnback)
        }
    },[])

    return(
        <div>
             <div  className={classn}>
             
                { (car) ? <img className={style} src={Car} /> : null  }
                 
                  </div>
             {/*<div className={classn}>{data} {props.ii} </div> */}
        </div>     
        
    )

}


export default Pallet;