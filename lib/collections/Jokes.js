Jokes = new Mongo.Collection('jokes');

Jokes.allow({
    update: function () {
        return true;
    }
});

JokeSchema = new SimpleSchema({
    question: {
        label: "Question",
        type: String
    },

    punchline: {
        label: "Punchline",
        type: String,
        defaultValue: ''
    },

    active: {
        label: "Active",
        type: Boolean,
        defaultValue: true
    },
    
    updated: {
        label: "Updated",
        type: Date,
        autoValue: function() {
            return new Date();
        }
    }

});

Jokes.attachSchema(JokeSchema);