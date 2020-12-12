$(document).ready(function() {
    const userid=window.location.search.split("=")[1];
    console.log(userid)
$.get("/api/user?id="+userid).then((user)=>{
console.log(user)
$("#username").text(user[0].fname)
$("#goal").text(user[0].financeGoal)
$("#creditScore").text(user[0].creditScore)
$("#debt").text(user[0].currentDebt)
$("#retire").text(user[0].retirement)
})
})