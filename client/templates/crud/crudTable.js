Template.crudTable.helpers({

    jokes: function() {
        return Jokes.find({});
    }

});

Template.crudTable.events({

    'click .delete' : function(e) {

        let id = e.currentTarget.getAttribute('data-id');

        Jokes.remove(id);

    },

    'change .active' : function(e) {

        let id = e.currentTarget.getAttribute('data-id');
        let joke = Jokes.findOne(id);

        Jokes.update(id, {
            $set : { active: !joke.active }
        });

    }

});