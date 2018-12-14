/* global $ */


    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore = 0;
        if (q1Result === "Yes") {
            totalScore +4;
        }
        else if (q1Result === "Mixed"){ 
            totalScore + 1;
        }
        else if (q1Result === "No") { 
            totalScore + 1;
        }
        else if (q2Result === "Front"){ 
            totalScore + 1;
        }
        else if (q2Result === "Behind"){ 
            totalScore + 3;
        }
        else if (q2Result === "Mixed"){ 
            totalScore + 2;
        }
        else if (q3Result === "Support"){
            totalScore +2;
        }
        else if (q3Result === "Squishy"){ 
            totalScore +1;
        }
        else if (q2Result === "Mixed"){ 
            totalScore + 3;
        }
    if (totalScore >= 8) {
        alert("Attack Damage Carry is good for you " + name +"!");
    }
    });

