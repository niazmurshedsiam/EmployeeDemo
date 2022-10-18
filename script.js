$("#SubmitButton").click(function (e) {
    //var isValid = true;
    var FirstName = $("#FirstName").val();
    var LastName = $("#LastName").val();
    var Email = $("#Email").val();
    var Phone = $("#Phone").val();

    if (FirstName == '' || LastName == '' || Email == '' || Phone == '') {
        alert("Please enter a value for required field!");
        return false;
    }


    var Employees = {
        "url": "https://prod-02.centralus.logic.azure.com:443/workflows/ceab90e245c84df0a76c39e402ad9335/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=lrLhoJ3kfIgIS7QNjHqdEqKEevbVEzV8JJjzRbkHJRo",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "To": Email,
            "Subject": "Employee Information Demo",
            "FirstName": FirstName,
            "LastName": LastName,
            "Email": Email,
            "Phone": Phone
        }),
    };

    $.ajax(Employees).done(function (response) {
        //console.log(JSON.parse(response));
        //alert("hello");
        cleanForm();
        document.getElementById("PopUP").innerHTML = "Successfully Submitted";
        //return false;
    });

})

function cleanForm() {
    $("#form-employee :input").each(function () {
        $(this).val("");
    });
}