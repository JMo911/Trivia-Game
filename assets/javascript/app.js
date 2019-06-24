var questions = {
    "Question 1": {
        "Data-position": 0,
        "Question" : "How many step sisters does Cinderella have?",
        "Answer" : "2",
        "Distractors" :  [3,4,5],
        "image-source" : "assets/images/cinderellawithstepsisters.jpg"
    },
    "Question 2": {
        "Data-position": 1,
        "Question" : "What's the name of the bear from the Jungle Book?",
        "Answer" : "Baloo",
        "Distractors" :  ["Mowgli", "Blue", "Pascal"],
        "image-source" : "assets/images/Baloo.jpg"
    },
    "Question 3": {
        "Data-position": 2,
        "Question" : "What's the name of the kingdom in Frozen?",
        "Answer" : "Arendelle",
        "Distractors" :  ["Ariel", "Ardendale","Airbnb"],
        "image-source" : "assets/images/Arendelle.png"
    },
    "Question 4": {
        "Data-position": 3,
        "Question" : "Which animal does Moana's grandmother have tattoed on her back?",
        "Answer" : "Stingray",
        "Distractors" :  ["Jellyfish","Starfish","Nemo"],
        "image-source" : "assets/images/Moanagrandmatatt.gif"
    },
    "Question 5": {
        "Data-position": 4,
        "Question" : "What kind of animals own the ice cream shop in Zootopia?",
        "Answer" : "Elephants",
        "Distractors" :  ["Cows","Rabbits","Sloths"],
        "image-source" : "assets/images/Elephanticecream.jpg"
    },
    "Question 6": {
        "Data-position": 5,
        "Question" : "What kind of animal is Meeko from Pocahontas",
        "Answer" : "Raccoon",
        "Distractors" :  ["Badger","Squirrel","Hummingbird"],
        "image-source" : "assets/images/Meeko.png"
    },
    "Question 7": {
        "Data-position": 6,
        "Question" : "What's the name of Belle's horse?",
        "Answer" : "Philippe",
        "Distractors" :  ["Phil","Maximus","Pegasus"],
        "image-source" : "assets/images/Belleandphilippe.jpg"
    },
    "Question 8": {
        "Data-position": 7,
        "Question" : "Which word does Ariel use for a fork?",
        "Answer" : "Dinglehopper",
        "Distractors" :  ["Whozit","Thingamajig","Pokey-stick"],
        "image-source" : "assets/images/Arielwithfork.gif"
    },
    "Question 9": {
        "Data-position": 8,
        "Question" : "Which ride was not an opening day attraction at Disneyland in 1955?",
        "Answer" : "Pinocchio's Daring Journey",
        "Distractors" :  ["Space Mountain","Mickey's Grand Adventure","Peter Pan's Flight"],
        "image-source" : "assets/images/pinocchiosdaringjourney.jpeg"
    },
    "Question 10": {
        "Data-position": 9,
        "Question" : "What was the last attraction that Walt Disney personally supervised?",
        "Answer" : "Pirate's of the Caribbean",
        "Distractors" :  ["Haunted Mansion","Big Thunder Mountain Railroad","Harry Potter World"],
        "image-source" : "assets/images/piratesofthecaribbean.jpg"
    },
    "Question 11": {
        "Data-position": 10,
        "Question" : "By the end of this year, how many themed lands will Disneyland have?",
        "Answer" : "9",
        "Distractors" :  [7,12,15],
        "image-source" : "assets/images/disneylandparkslayout.jpg"
    },
    "Question 12": {
        "Data-position": 11,
        "Question" : "What year did Tokyo Disneyland open?",
        "Answer" : "1983",
        "Distractors" :  [1971,1990,2005],
        "image-source" : "assets/images/tokeydisneylandopening.jpg",
        "factoid" : "it was the first international Disney park"
    },
    "Question 13": {
        "Data-position": 12,
        "Question" : "Which park does not have a Winnie the Pooh themed attraction?",
        "Answer" : "Disneyland Paris",
        "Distractors" :  ["Disneyland Hong Kong","Disneyland Tokyo", "Shanghai Disneyland"],
        "image-source" : "assets/images/winniethepooh.gif"
    },
    

};

function fetchQuestions (){
    //BUG EVERY TIME I HIT 0
     var randomquestionnumber = Math.floor(Math.random()*(Object.keys(questions).length-1));
    //  console.log(randomquestionnumber);

    //CLEAR CARD BODY
    $(".card-body").empty();
    // APPEND QUESTION ITSELF
    $(".card-body").append(questions["Question " + randomquestionnumber].Question);
    // APPEND KEYED RESPONSE
    var keyedResponse = $("<button>");
    keyedResponse.text(questions["Question " + randomquestionnumber].Answer);
    keyedResponse.addClass("keyedresponse responseoption");
    $(".card-body").append(keyedResponse);
    // APPEND DISTRACTORS
    for (i=0;i<questions["Question " + randomquestionnumber].Distractors.length; i++) {
    var answerbuttons = $("<button>");
    answerbuttons.text(questions["Question " + randomquestionnumber].Distractors[i]);
    answerbuttons.addClass("distractor responseoption");
    $(".card-body").append(answerbuttons);
}
}

// function gameMessages(){

// }


$(".card-body").delegate(":button", "click", function(){
    // console.log($(this).hasClass("distractor"));

    if ($(this).hasClass("distractor")){
        
        $(".card-body").empty();
        var wrongAnswer = $("<div>");
        wrongAnswer.text("Sorry, that's not right.");
        $(".card-body").append(wrongAnswer);
        setTimeout(fetchQuestions,5000);
    }
    else if ($(this).hasClass("keyedresponse")){
        
        $(".card-body").empty();
        var rightAnswer = $("<div>");
        rightAnswer.text("Well done!");
        $(".card-body").append(rightAnswer);
        setTimeout(fetchQuestions,5000);
    }
    else{fetchQuestions();}
    
    //  fetchQuestions();

});







