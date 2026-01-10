
function log (){
    let overlay = document.getElementById("loginOverlay");
    overlay.innerHTML = `
    <form action="" class="w-50 bg-light rounded-3 p-4">
  <div class="d-flex justify-content-between">
    <h2 class="text-capitalize title mb-3 ">log in</h2>
    <button class="close border-0 bg-transparent"  onclick="closeLogin ()" ><i class="fa-solid fa-x"></i></button>
  </div>
  <label for="Email" >Email address</label>
  <input type="email" placeholder="Enter your email" class="form-control mb-3 mt-2 input-outline-secondary">
  <label for="password" > password</label>
  <input type="password" name="" id="password" placeholder="***" class="form-control mb-2 mt-2 input-outline-secondary">
  <input type="checkbox" name="" id="" class="my-3 ms-1"> <label for="" class="my-3">Remember me</label>
  <br>
  <button class="btn rounded-2 w-100" type = "submit">log in</button>
</form>
    `
    overlay.classList.remove("d-none");
    overlay.style.display = "flex"
}

function closeLogin (){
    document.getElementById("loginOverlay").style.display = "none"
}