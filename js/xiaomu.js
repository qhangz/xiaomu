function change(){
    var pageStyle=document.getElementById('pageStyle');
    if(pageStyle.getAttribute('href')=='./css/day.css'){
        pageStyle.setAttribute('href','./css/night.css');
        // document.getElementsByClassName('Department-introduction').style.backgroundColor="blue";
    }else{
        pageStyle.setAttribute('href','./css/day.css');
        // document.getElementsByClassName('Department-introduction').style.backgroundColor="blue";
    }
}