let input=document.getElementById("input-box");
let buttons=document.querySelectorAll("button");
let string="";
let arr=Array.from(buttons);
arr.forEach((button)=>{
    button.addEventListener('click',()=>{
        try{
            if(button.innerHTML==="=")
                {
                    string=eval(string);
                    input.value=string;
                }
            else if(button.innerHTML==="AC")
                {
                    string="";
                    input.value=string;
                }
            else if(button.innerHTML==="DEL"){
                string=string.substring(0,string.length-1);
                input.value=string;
            }
            else
            {
                string+=button.innerHTML;
                input.value=string;
            }
        }
        catch
        {
            input.value="error";
        }
    });
});



// let input = document.getElementById("input-box");
// let buttons = document.querySelectorAll("button");
// let string = "";
// let arr = Array.from(buttons);

// arr.forEach((button)=>{
//     button.addEventListener("click",(e)=>{
//         try{
//             if(e.target.innerHTML === "="){
//                 string = eval(string);
//                 input.value = string;
//             }
//             else if(e.target.innerHTML === "AC"){
//                 string = "";
//                 input.value = string;
//             }
//             else if(e.target.innerHTML === "DEL"){
//                 string =string.substring(0,(string.length-1));
//                 input.value = string;
//             }
//             else{
//                 string = string + e.target.innerHTML;
//                 input.value = string;
//             }
//         }
//         catch{
//             input.value = "error";
//         }
//     });
// });