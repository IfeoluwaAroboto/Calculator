let display = document.getElementById("display")

let buttons = Array.from(document.getElementsByClassName("button"))

buttons.map(button => {
    button.addEventListener("click", (e) => {
         /*   console.log("clicked");
            console.log(e);
            console.log(e.target);
            console.log(e.target.innerText)*/
            switch(e.target.innerText){
                case 'AC':
                display.innerText = ""
                break;
                case 'RND':
           display.innerHTML = Math.round(display.innerHTML) 
                    break;
                    
                    case 'EXP':
               display.innerHTML = Math.exp(display.innerHTML) 
                        break;
                        
                        case 'M+':
                   display.innerHTML = display.innerHTML
                   break;
                   case 'MR':
                    display.innerHTML = display.innerHTML
                    break;
                         
                   case 'M-':
              display.innerHTML = display.innerHTML
                                         break;
                case "Back":
                    if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);}
                    break;
                        case "Ans" :
                        try{
                        display.innerText= eval(display.innerHTML)
                } 
                
                catch{
                    display.innerHTML = "Error!"
                }

                        break;
                    case "=" :
                        try{
                        display.innerText= eval(display.innerHTML)
                } 
                
                catch{
                    display.innerHTML = "Error!"
                }

                        break;
                default:display.innerText += e.target.innerText
            }
    })
})