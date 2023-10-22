function validate()
{
    var bil1 = document.getElementById("bil1");
    var bil2 = document.getElementById("bil2");
    var NRP = document.getElementById("NRP");
    var enerpe  = "5026221094";
    
    if(bil1.value == "" && bil2.value == "" && NRP.value == ""){
        alert("Mohon diisi angka!");
        bil1.focus();
        bil2.focus();
        NRP.focus();
        return false;
    } else if(bil1.value == ""){
        //alert("Bilangan harus diisi");
        bil1.placeholder = "Mohon diisi angka!";
        bil1.focus();
        return false;
    } else if(bil2.value == ""){
        //alert("Bilangan harus diisi");
        bil2.placeholder = "Mohon diisi angka!";
        bil2.focus();
        return false;
    } else if(NRP.value == ""){
        //alert("NRP harus diisi");
        NRP.placeholder = "Mohon diisi angka!";
        NRP.focus();
        return false;
    } else if(isNaN(NRP.value)){
        alert("NRP harus diisi oleh angka!");
        return false;
    } else if(NRP.value.length != enerpe.length){
        alert("NRP harus 10 digit!");
        return false;
    } else {
        return true;
    }

}