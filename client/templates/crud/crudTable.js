Template.crudTable.helpers({

    jokes: function() {
        return Jokes.find({});
    }

});

Template.crudTable.events({

    'click .delete' : function(e) {

        let id = $($(e.currentTarget)[0]).data('id');

        Jokes.remove(id);

    }

});