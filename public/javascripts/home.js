    var getNewPrompt = function(_id) {
        console.log("getting prompt id: " + _id);
        var parameters = {
            id: _id
        };

        $.get( '/new',parameters, function(data) {
            console.log("getNewPrompt() returned: ");
            console.log(data);

            // below lines are the problem
            // var promptElem = $('.prompt').find("[data-id=" + _id + "]");
            var promptElem = $('.prompt[data-id='+_id+']')
            console.log(promptElem);
            promptElem.html(data);
        });
    }
