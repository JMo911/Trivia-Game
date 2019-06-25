var questions = {
    "Question 1": {
        "Data-position": 0,
        "Question" : "How many step sisters does Cinderella have?",
        "Answer" : "2",
        "Distractors" :  [3,4,5],
        "Image" : "assets/images/cinderellawithstepsisters.jpg"
    },
    "Question 2": {
        "Data-position": 1,
        "Question" : "What's the name of the bear from the Jungle Book?",
        "Answer" : "Baloo",
        "Distractors" :  ["Mowgli", "Blue", "Pascal"],
        "Image" : "assets/images/Baloo.jpg"
    },
    "Question 3": {
        "Data-position": 2,
        "Question" : "What's the name of the kingdom in Frozen?",
        "Answer" : "Arendelle",
        "Distractors" :  ["Ariel", "Ardendale","Airbnb"],
        "Image" : "assets/images/Arendelle.png"
    },
    "Question 4": {
        "Data-position": 3,
        "Question" : "Which animal does Moana's grandmother have tattoed on her back?",
        "Answer" : "Stingray",
        "Distractors" :  ["Jellyfish","Starfish","Nemo"],
        "Image" : "assets/images/Moanagrandmatatt.gif"
    },
    "Question 5": {
        "Data-position": 4,
        "Question" : "What kind of animals own the ice cream shop in Zootopia?",
        "Answer" : "Elephants",
        "Distractors" :  ["Cows","Rabbits","Sloths"],
        "Image" : "assets/images/Elephanticecream.jpg"
    },
    "Question 6": {
        "Data-position": 5,
        "Question" : "What kind of animal is Meeko from Pocahontas",
        "Answer" : "Raccoon",
        "Distractors" :  ["Badger","Squirrel","Hummingbird"],
        "Image" : "assets/images/Meeko.png"
    },
    "Question 7": {
        "Data-position": 6,
        "Question" : "What's the name of Belle's horse?",
        "Answer" : "Philippe",
        "Distractors" :  ["Phil","Maximus","Pegasus"],
        "Image" : "assets/images/Belleandphilippe.jpg"
    },
    "Question 8": {
        "Data-position": 7,
        "Question" : "Which word does Ariel use for a fork?",
        "Answer" : "Dinglehopper",
        "Distractors" :  ["Whozit","Thingamajig","Pokey-stick"],
        "Image" : "assets/images/Arielwithfork.gif"
    },
    "Question 9": {
        "Data-position": 8,
        "Question" : "Which ride was not an opening day attraction at Disneyland in 1955?",
        "Answer" : "Pinocchio's Daring Journey",
        "Distractors" :  ["Space Mountain","Mickey's Grand Adventure","Peter Pan's Flight"],
        "Image" : "assets/images/pinocchiosdaringjourney.jpeg"
    },
    "Question 10": {
        "Data-position": 9,
        "Question" : "What was the last attraction that Walt Disney personally supervised?",
        "Answer" : "Pirate's of the Caribbean",
        "Distractors" :  ["Haunted Mansion","Big Thunder Mountain Railroad","Harry Potter World"],
        "Image" : "assets/images/piratesofthecaribbean.jpg"
    },
    "Question 11": {
        "Data-position": 10,
        "Question" : "By the end of this year, how many themed lands will Disneyland have?",
        "Answer" : "9",
        "Distractors" :  [7,12,15],
        "Image" : "assets/images/disneylandparkslayout.jpg"
    },
    "Question 12": {
        "Data-position": 11,
        "Question" : "What year did Tokyo Disneyland open?",
        "Answer" : "1983",
        "Distractors" :  [1971,1990,2005],
        "Image" : "assets/images/tokeydisneylandopening.jpg",
        "factoid" : "it was the first international Disney park"
    },
    "Question 13": {
        "Data-position": 12,
        "Question" : "Which park does not have a Winnie the Pooh themed attraction?",
        "Answer" : "Disneyland Paris",
        "Distractors" :  ["Disneyland Hong Kong","Disneyland Tokyo", "Shanghai Disneyland"],
        "Image" : "assets/images/winniethepooh.gif"
    },
    

};

var counter;
var currentCorrectAnswer;
var correctAnswers=0;
var incorrectAnswers=0;
var timeouts=0;
var previousQuestionNumbers=[];
var picsource;


function fetchQuestions (){  
     var randomquestionnumber = Math.ceil(Math.random()*(Object.keys(questions).length));
    


    
    //CLEAR CARD BODY
    $(".card-body").empty();
    //START TIMER
    var timerDiv=$("<div>")
    var count=31;
    clearInterval(counter);
    counter=setInterval(timer, 1000); //1000 will  run it every 1 second
    $(".card-body").append(timerDiv);

    function timer()
    {
      count=count-1;
      if (count <= 0)
      {
         clearInterval(counter);
         //event handler for time out
         $(".card-body").empty();
        var timeOut = $("<div>");
        timeOut.text("Sorry, time ran out!");
        $(".card-body").append(timeOut);
         setTimeout(fetchQuestions,5000);
        //  timeouts++;
      }
    
      timerDiv.text("Time Remaining: " + count);
    }
    
    // // APPEND QUESTION ITSELF
    if (previousQuestionNumbers.indexOf(randomquestionnumber) === -1 ) {
    $(".card-body").append(questions["Question " + randomquestionnumber].Question);
    previousQuestionNumbers.push(randomquestionnumber);
    
    
    //grab associated pic
    picsource = questions["Question " + randomquestionnumber].Image;
    // APPEND KEYED RESPONSE
    var keyedResponse = $("<button>");
    keyedResponse.text(questions["Question " + randomquestionnumber].Answer);
    keyedResponse.addClass("keyedresponse responseoption");
    $(".card-body").append(keyedResponse);

    //storing correct answer for display if they answer incorrectly
    currentCorrectAnswer = questions["Question " + randomquestionnumber].Answer;
    
    // APPEND DISTRACTORS
    for (i=0;i<questions["Question " + randomquestionnumber].Distractors.length; i++) {
    var answerbuttons = $("<button>");
    answerbuttons.text(questions["Question " + randomquestionnumber].Distractors[i]);
    answerbuttons.addClass("distractor responseoption");
    $(".card-body").append(answerbuttons);
    ;
    //push random number to a previous number array? then use indexof !==-1 to make sure it's a new question?
    }
}   else if (previousQuestionNumbers.length === 12){
    
    $(".card-body").empty();
    $(".card-body").append("<p>Correct Answers: " + correctAnswers + "</p>");
    $(".card-body").append("<p>Incorrect Answers: " + incorrectAnswers + "</p>");
    $(".card-body").append("<p>Timeouts: " + incorrectAnswers + "</p>");
}
    else {
        fetchQuestions();
    }


}
//END OF FETCHQUESTIONS FUNCTION




$(".card-body").delegate(":button", "click", function(){
    // console.log($(this).hasClass("distractor"));
    

    if ($(this).hasClass("distractor")){
        //tell them good job and show pic
        $(".card-body").empty();
        var wrongAnswer = $("<div>");
        wrongAnswer.text("Sorry, that's not right. Correct answer was: " + currentCorrectAnswer);
        $(".card-body").append(wrongAnswer);
        var photo=$("<img>");
        photo.attr("src",picsource);
        $(".card-body").append(photo);
        ++incorrectAnswers;
        setTimeout(fetchQuestions,5000);
        
    }
    else if ($(this).hasClass("keyedresponse")){
        //tell them what the correct answer was, and show pic
        $(".card-body").empty();
        var rightAnswer = $("<div>");
        rightAnswer.text("Well done!");
        $(".card-body").append(rightAnswer);
        var photo=$("<img>");
        photo.attr("src",picsource);
        $(".card-body").append(photo);
        ++correctAnswers;
        
        
        setTimeout(fetchQuestions,5000);
  
    }
    else{
        fetchQuestions();}
    
    

});







