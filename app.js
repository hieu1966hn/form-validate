// function store(e) { // khởi tạo hàm store
//     e.preventDefault();

// }


let register = document.querySelector(".register")
register.addEventListener("submit", (e) => {
  e.preventDefault()
  let email = document.getElementById('email');
  let pw = document.getElementById("password");

  let lowerCaseLetter = /[a-z]/g;
  let upperCaseLetter = /[A-Z]/g;

  let numbers = /[0-9]/g;

  if (email.value.trim().length == 0 && pw.value.trim().length == 0) {
    alert("Please input your email & password")
  }
  else if (email.value.trim().length == 0) {
    alert("Please input your email")
  }
  else if (pw.value.trim().length == 0) {
    alert("Please input your password")
  }
  else if (pw.value.trim().length < 8) {
    alert("Password must be at least 8 characters.")
  }

  // kiem tra ky tu viet thuong trong chuoi
  else if (!pw.value.trim().match(lowerCaseLetter)) {
    alert("Password must  contain a lowercase letter")
  }
  else if (!pw.value.trim().match(upperCaseLetter)) {
    alert("Password must  contain a uppercase letter")
  }
  else if (!pw.value.trim().match(numbers)) {
    alert("Password must  contain a number or special character")
  }
  // ko có lỗi nào liên quan tới đăng ký. Cho phép lưu trữ tren localStorage
  else {
    if (localStorage.users) {
      let users = JSON.parse(localStorage.users)
      users.push({
        email: email.value.trim(),
        pw: pw.value.trim()
      })
      localStorage.setItem("users", JSON.stringify(users));
    }
    else {
      localStorage.setItem("users",
        JSON.stringify(
          [
            {
              email: email.value.trim(),
              pw: pw.value.trim()
            }
          ]));
    }
    location.replace("./Login.html")
    console.log("hello");
  }
  /*
  TH1: là có ký tự viết thường -> ko in ra thông báo lỗi
  TH2: là không có ký tự viết thường -> in ra thông báo lỗi.
   */
})

