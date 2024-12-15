const inputField = document.getElementById("username")
const showData = document.getElementById("showApp")

const finder= async()=>{

const fetchData=  await fetch(`https://api.github.com/users/${inputField.value}`)

const response= await fetchData.json();
console.log(response);
inputField.value= ""

return github(response)
}

const github= (data)=>{

    if (data.status == "404") {
        Swal.fire({
          title: "Error",
          html: `<h1>${data.message}</h1>`, 
          icon: "error", 
        });
        return; 
      }else{
        showApp.innerHTML=`<div   class="container">
        <div style="background-color:#5f9e0a " class="card">
          <img src=${data.avatar_url} >
          
          <div class=" info">   
          <h2>${data.name || 'No Name'}</h2>
            <h2>${data.created_at}</h2>
            <p>${data.bio || 'This profile has no bio'}</p>
          </div>
        
          <div class="stats">
            <div>
              <h3>Repos</h3>
              <p>${data.public_repos}</p>
            </div>
            <div>
              <h3>Followers</h3>
              <p >${data.followers}</p>
            </div>
            <div>
              <h3>Following</h3>
              <p>${data.following}</p>
            </div>
          </div>
          <div class="row links">  
           <div class="col-sm-12 col-md-6">
          <p><i class="bi bi-geo-alt-fill"></i> ${data.location}</p>
          </div>
        
          <div class="col-sm-12 col-md-6">
          <p><i class="bi bi-link-45deg"></i> <a  href="https://github.com/${inputField}?tab=repositories">${data.repos_url}</a></p>
          </div>   
        <div class="row"></div>  
        <div class="col-sm-12 col-md-6">
        <p><i class="bi bi-building-fill"></i> ${data.blog || 'Not Available'}</p>
        </div>
        <div class="col-sm-12 col-md-6">
        <p><i class="bi bi-twitter"></i> ${data.twitter_username || 'Not Available'}</p>
        </div>
          </div> 
        </div>
        </div>
        `}
      }