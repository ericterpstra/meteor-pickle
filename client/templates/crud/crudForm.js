
Template.crudForm.events({

    'click .submit' : function(e, template) {

        let question = template.find('input[name=question]').value;
        let punchline = template.find('input[name=punchline]').value;

        if (question.length && punchline.length) {

            Jokes.insert({
                question,
                punchline
            });

        }

    }
    
});