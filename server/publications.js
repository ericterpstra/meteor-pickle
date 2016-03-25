Meteor.publish('jokes', function(isActiveOnly) {

    let filter = isActiveOnly ? {active:true} : {};

    return Jokes.find(filter);
    
});