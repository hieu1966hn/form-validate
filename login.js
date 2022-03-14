
let login = document.getElementById('login-info');
login.addEventListener("submit", (event) => {
  event.preventDefault();// chặn sự kiện reload mặc định của trình duyệt

  let users = JSON.parse(localStorage.users)
  // console.log(users);
  // Lấy được toàn bộ user đã đăng ký và lưu trữ trong biến (users)


  let email = document.getElementById("email")
  let pw = document.getElementById("password");

  let check = users.map(index =>
    index.email == email.value.trim()
    &&
    index.pw == pw.value.trim()
  )
  console.log(check);// [false,false,false, true]


  if (check[0] == true) {
    // alert("You are log in");
    window.location.href = "./trangchu.html"
  }
  else {
    alert("Please input again")
  }

})