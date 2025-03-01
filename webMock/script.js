let tbody = document.querySelector("tbody")
let getdata = async()=>{
    let data = await fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(data)

    let finalData = await data.json()
    // console.log(finalData)
    finalData.forEach((ele)=>{
        tbody.innerHTML +=`
         
        <tr>
        <td>${ele.name}</td>
        <td>${ele.email}</td>
        <td>${ele.phone}</td>
        <td>${ele.website}</td>
       
        <td>${ele.company.name}</td>
    
        
        
        </tr>
        
        `
    })
}

getdata()






