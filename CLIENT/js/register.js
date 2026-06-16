document
.getElementById("registerForm")
.addEventListener("submit", async (e)=>{

    e.preventDefault();

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    await fetch(
        `${API_BASE_URL}/auth/register`,
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                email,
                password
            })
        }
    );

    window.location.href =
    "./login.html";

});