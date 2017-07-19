var express = require('express');
var router = express.Router();
var sentencer = require('sentencer');


// sentencer configuration here //

var prompts = [
    {
        name: "Write about...",
        template: "Write about {{ adjective }} {{ noun }}."
    },
    {
        name: "Test",
        template: "Lorum {{adjective}} Ipsum"
    },
    {
        name: "Test2",
        template: "Foo Lorum {{adjective}} Ipsum"
    },
    {
        name: "Test3",
        template: "Bar Lorum {{adjective}} Ipsum"
    }
];

var generate = function(id) {
    if(id === undefined) id = 0;

    console.log("id: " + id);
    var prompt = prompts[id].template;
    // var prompt = prompts[0].template;
    console.log("prompt: " + prompt);
    var _sentence = sentencer.make(prompt);
    return _sentence;
};

var generateAll = function() {
    var allPrompts = new Array();

    for(var i = 0; i < prompts.length; i++) {
        var thisPrompt = generate(i);
        allPrompts.push(thisPrompt);
    }

    return allPrompts;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  // sentencer code here //
  var _prompts = generateAll();
  // var _sentence = generate();
  res.render('index', { prompts: _prompts });
});

router.get('/new', function(req, res, next) {
    var id = req.query.id;
    console.log("GET /new — id: " + id);
    var _sentence = generate(id);
    res.send(_sentence);
});

module.exports = router;
