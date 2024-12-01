const input = document.querySelector('#input-box')
const button = document.querySelector('.add')
const list = document.querySelector('#list-container')

function addinList(){
    if(input.value === ''){
        alert("You must write something")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = input.value
       
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
         list.appendChild(li)
         
        
    }
    input.value =""
    savData()
}


list.addEventListener('click' , (e)=>{
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked")
        savData()
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove()
        savData()
    }
})

button.addEventListener('click',addinList)

function savData(){
    localStorage.setItem("data",list.innerHTML)
}

function showTask(){
    list.innerHTML = localStorage.getItem("data")
}

showTask()