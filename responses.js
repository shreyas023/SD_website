function getBotResponse(input) {
    //rock paper scissors
    if (input == "1") {
        return "Your request will be shortly accepted. What is the defect?";
        
    } else if (input == "2") {
        return "Thank You for trusting us. Your request for exchange will be initiated.";
        
    } else if (input == "3") {
        return "What is the issue?";
        
    }

    let secondMessage = "1.Return Product"
    let thirdMessage = "2.Exchange Product"
    let fourthMessage = "3.Other"
    let hotHtml= '<p class="botText"><span>' + secondMessage + '<br>' + thirdMessage +'<br>' + fourthMessage + '</span></p>';

    // Simple responses
    if (input == "I'm having technical issues.") {
        return "We will make your contact with our customer care";
    } else if (input == "I'm having technical issues") {
        return "We will make your contact with our customer care";
    } else if (input == "technical issues") {
        return "We will make your contact with our customer care";
    }else if (input == "Its useless") {
        return "Thanks for your feedback. It will help me to improve.";
    }else {
        return "Please enter the option number";
        }
}