$(document).ready(function() {
    const userid=window.location.search.split("=")[1];
    console.log(userid)
$.get("/api/user?id="+userid).then((user)=>{
console.log(user)
})
})