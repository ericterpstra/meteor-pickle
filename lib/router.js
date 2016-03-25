FlowRouter.route('/', {
    triggersEnter: [
        function (context, redirect) {
            redirect('/joke');
        }
    ]
});

FlowRouter.route('/joke', {
    action(params) {
        BlazeLayout.render('app', {
            top: 'header',
            main: 'joke'
        });
    }
});

FlowRouter.route('/crud', {
    action(params) {
        BlazeLayout.render('app', {
            top: 'header',
            main: 'crud'
        });    
    }
});

FlowRouter.route('/stats', {
    action(params) {
        BlazeLayout.render('app', {
            top: 'header',
            main: 'stats'
        });
    }
});
