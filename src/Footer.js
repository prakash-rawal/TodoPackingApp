import React from "react";


function Footer({ toDoList }) {

    function list() {
        
        const listItem = toDoList.length;
        const count = toDoList.filter((v) => v.complete).length;
        const percentage = Math.floor((count/listItem)*100);
        // console.log(percentage)
        // console.log(listItem)
        // console.log(count)
        if(listItem === 0){
            return <span>Start Adding Some Item To your Packing List🚀</span>
        }else if(count != listItem){
            return <span>👜You have {listItem} items on your list, and You already packed {count} ({percentage}%) </span> 
        }else if( listItem === count && listItem !=0 ){
            return <span>You Got everything Ready TO Go🛫</span>
        }
    }
    return (
        <>
            <div className="footer">
                <div className="footer-text">
                {list()}
                </div>
            </div>
        </>
    )
}

export default Footer;