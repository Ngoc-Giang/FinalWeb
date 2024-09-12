function login(e){
    event.preventDefault();
    var hoten=document.getElementById("fullname").value;
    var sdt=document.getElementById("telephone").value;
    var ns=document.getElementById("date").value;
    var dc=document.getElementById("address").value;
    var tg=document.getElementById("choise").value;
    var anh=document.getElementById("image").value;
    var user={
        hoten: fullname,
        sdt: telephone,
        ns:Date,
        dc:address,
        tg:choise,
        anh:Image,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(hoten,json);
    alert("Luu thanh cong");
}