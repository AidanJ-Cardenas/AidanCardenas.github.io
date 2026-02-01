window.addEventListener("load", function() {
        const loader = document.getElementById("loader-wrapper");
        
        // 1. Wait 4 seconds for the "Heroic" logo display
        setTimeout(function() {
            loader.classList.add("loader-hidden");

            // 2. Wait 1.5 seconds (the length of your CSS transition) 
            // before switching pages so the exit looks smooth.
            setTimeout(function() {
                window.location.href = "home.html"; // <-- CHANGE THIS TO YOUR URL
            }, 1000); 

        }, 4000);
    });