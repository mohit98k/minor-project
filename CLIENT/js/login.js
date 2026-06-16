document
.getElementById("loginForm")
.addEventListener("submit", async (e)=>{

    e.preventDefault();

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    try{

        const response = await fetch(
            `${API_BASE_URL}/auth/login`,
            {
                method:"POST",
                credentials:"include",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email,
                    password
                })
            }
        );

        const data = await response.json();

        if(!response.ok){
            alert(data.message || "Login failed");
            return;
        }

        console.log(data);

        window.location.href =
        "./dashboard.html";

    }catch(error){
        console.error(error);
        alert("Something went wrong");
    }

});