const user = {
    username : "Hitesh",
    price : 999, 


    welcomeMessage: function() {
            console.log(`${this.username}, welcome to website`);       //This keyword represeng current context
            console.log(this);
            
            
    }

}

// user.welcomeMessage()
// user.username = "Ragahv"
// user.welcomeMessage()

console.log(this);

