function weeklyGoal(userName, dailyGoal, bonusTasks) {
    // Weekly Goal: Calculate the total weekly task goal for a user.

    // Output message to console
    // FIXED: Added missing parenthesis.
    console.log("Checking status for: " + userName); 

    // Calculate weekly goal based on number of workdays (5) per week
    // FIXED: Corrected variable name from 'dialyGoal' to 'dailyGoal' and corrected multiplier from 15 to 5.
    let weeklyGoal = dailyGoal * 5; 

    // Add bonusTasks to weeklyGoal. 
    // Note: Check for data type issues
    // FIXED: Changed minus to plus. 
    let totalGoal = weeklyGoal  + bonusTasks; 

    var output = "User: " + userName + "<br>" + "Total Weekly Goal: " + totalGoal;

    document.getElementById("goal-message").innerHTML = output;
}


document.getElementById("goal-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const userName = document.getElementById("user-name").value;
    const dailyGoal = document.getElementById("daily-goal").value;
    const bonusTasks = document.getElementById("weekly-bonus").value;

    weeklyGoal(userName, dailyGoal, bonusTasks);
});