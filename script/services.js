let tabs = document.querySelectorAll("div.tabs ul li");
let content = document.querySelectorAll("section.service")

const removeActiveTab = ()=>{
  tabs.forEach((v)=>{
    v.classList.remove("active");
  })
}

const removeActiveService = ()=> {
  content.forEach((v)=>{
    $(v).fadeOut('fast');
  })
}

tabs.forEach((v,i)=>{
  v.addEventListener("click", (e)=>{
    if (v.classList.contains("active")) {
      
    }
    else{
      removeActiveTab();
      v.classList.add("active")
      removeActiveService();
      $(content[i]).fadeIn('fast')  
    }

  });
});

document.addEventListener("readystatechange", (e)=>{
  document.readyState
})