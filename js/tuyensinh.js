const btn_cmt = document.getElementById('button_comment');
const input_content = document.getElementById('comment');

btn_cmt.onclick = function(){login()}

function login(){
    const overlay = document.querySelector('.overlay_login');
    const btn_login = document.getElementById('btn_login');
    const name = document.getElementById('name');
    overlay.style.display = 'grid';
    btn_login.onclick = ()=>{
    overlay.style.display = 'none';
        add_comment(name.value);
        input_content.value = "";
        name.value = "";
    }
}

function add_comment(name){
    const box_cmt = document.querySelector('.box_comment');
    const div_cmt = document.createElement('div');
    const char_name = name;
    div_cmt.className = 'users_comment';
    div_cmt.innerHTML = `<div class="avatar">${char_name[0]}</div>
    <div class="comment">
      <p class="user_name">${name}</p>
      <p class="user_comment">${input_content.value}</p>
    </div>`;
    box_cmt.appendChild(div_cmt);
}


$(document).ready(function(){
    $(".div_login").draggable({
        containment: "parent",
        cursor: "grabbing"
    });
  });


