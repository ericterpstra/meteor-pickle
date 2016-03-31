Template.joke.onCreated(function(){

    this.subscribe('jokes',true);

});

Template.joke.helpers({

    joke() {

        let jokes = Jokes.find({}).fetch();

        if ( jokes.length > 0 ) {

            return _.sample(jokes,1)[0];

        }

    }


});