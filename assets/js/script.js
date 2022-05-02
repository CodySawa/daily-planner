// get and display current date on index.html
function displayHeaderDate() {
    var date = moment().format('dddd, MMMM Do');
    $("#currentDay").text(date);
}

// function for creating one time block
function generateTimeBlock(hour) {
    var row = $("<div>")
        .addClass("row time-block");
    $(".container").append(row);

    var colTime = $("<div>")
        .addClass("col-sm-2 hour")
        .text(convertTime(hour));
    
    var colDescription = $("<div>")
        .addClass("col-sm-8 description");

    var descriptionInput = $("<textarea>")
    colDescription.append(descriptionInput);
    descriptionInput.attr("id", hour);
    if (hour < moment().format("HH")) {
        descriptionInput.attr({"class": "past"});
    } else if (hour === moment().format("HH")) {
        descriptionInput.attr({"class": "present"});
    } else if (hour > moment().format("HH")) {
        descriptionInput.attr({"class": "future"});
    }

    var saveBtn = $("<i class='fa-solid fa-floppy-disk'></i>")
    var save = $("<button>")
        .attr({"class": "col-sm-2 saveBtn"});

    save.append(saveBtn);
    row.append(colTime, colDescription, save);
    
}

// display time blocks on index.html
function DisplayTimeBlocks() {
    for (var i = 9; i <= 18; i++) {
        generateTimeBlock(i);
    }
}

// converts military time to AM/PM
function convertTime(hour) {
    var aORp = "";
    if (hour < 12) {
        aORp = "AM"
    } else {
        aORp = "PM"
    }

    hour = hour % 12;
    hour = hour ? hour : 12;
    return hour + aORp;
}

displayHeaderDate();
DisplayTimeBlocks();