const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "pelanggan" && password === "pelanggan"){
        alert("Kamu Berhasil Login sebagai Pelanggan.");
        window.location = "home.html";
    } else if (username === "teknisi" && password === "teknisi"){
        alert("Kamu Berhasil Login Sebagai Teknisi/Penagih.");
        window.location = "home.html";
    } else if (username === "stafadmin" && password === "stafadmin"){
        alert("Kamu Berhasil Login Sebagai Staf Administrasi/Customer Service.");
        window.location = "home.html";
    } else if (username === "kasir" && password === "kasir"){
        alert("Kamu Berhasil Login Sebagai Kasir/Bendahara.");
        window.location = "home.html";
    } else if (username === "Manager" && password === "manager"){
        alert("Kamu Berhasil Login Sebagai Manajer/Koordinator.");
        window.location = "home.html";
    } else if (username === "owner" && password === "owner"){
        alert("Kamu Berhasil Login Sebagai Owner.");
        window.location = "home.html";
    }
	
	else {
        loginErrorMsg.style.opacity = 1;
    }
})