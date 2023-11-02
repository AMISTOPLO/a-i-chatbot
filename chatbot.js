function sendMessage() {
    var userInput = document.getElementById("userInput").value;
    var chatbox = document.getElementById("chatbox");
    var typingAnimation = document.getElementById("typing-animation");

    var userMessage = document.createElement("div");
    userMessage.className = "message user";
    userMessage.textContent = "You: " + userInput;
    chatbox.appendChild(userMessage);

    var botMessage = document.createElement("div");
    botMessage.className = "message bot";
    chatbox.appendChild(botMessage);

    typingAnimation.style.display = "inline-block";

    var response = ""; // Initialize an empty response

    // Your custom logic for generating bot responses goes here
    // For example:
    if (userInput.toLowerCase().includes("introduce yourself")) {
        response = "Hi there! i am chatbot made as a demo for the 31st NATIONAL CHILDREN SCIENCE CONGRESS on the topic  PROBELMS OF RAPID GROWTH OF ARTIFICIAL INTELLIGENCE IN THE SOCIETY. I am made inorder to make you all understand  HOW A CHATGPT SHOULD BE IN FUTURE  ";
    } else if (userInput.toLowerCase().includes("explain about our future chatgpt")) {
        response = "Ok lets get into our topic.... A I chatbots should only help humans and it will make them lazy to think.Nowadays studies say that chatbot like CHATGPT is being used by students for completing their work.A I should only help them to complete their work.But CHATGPT is now completing everything instructed to them.Instead CHATGPT should work like a helper......... ";
    } else if (userInput.toLowerCase().includes("give an example")) {
        response = "SURE!!! Lets begin by completing a very simple question from class 9 physics...      A train attains a velocity of 120 Km/hr from rest in 5 minutes.calculate the acceleration of the train.  LETS DO THIS ANSWER TOGETHER..... First read the question 2 or 3 times inorder to understand it  Now lets start doing it.. As per the question we need to find the Acceleration.the formula is ACCELERATION = (v-u)/t where v is the final velocity , u is the initial velocity and t is the time taken.... u = 0 km/hr, v = 120 km/hr and time = 5 minutes. (NOTE : Time is in minutes. it should be converted to hour. For converting minutes to hour DIVIDE IT WITH 60) . NEXT is to apply the value to the formula  and calculate it. ";
    } 

     else {
        response = "I'm not sure how to respond to that.";
    }  

    var words = response.split(" "); // Split the response into an array of words
    var index = 0;

    var interval = setInterval(function() {
        if (index < words.length) {
            botMessage.textContent += words[index] + " "; // Add the next word to the message
            index++;
        } else {
            clearInterval(interval); // Stop the interval when all words are added
            typingAnimation.style.display = "none"; // Hide the typing animation
            // Scroll to the bottom of the chatbox
            chatbox.scrollTop = chatbox.scrollHeight;
        }
    }, 70); // Delay between typing each word (adjust as needed)
}