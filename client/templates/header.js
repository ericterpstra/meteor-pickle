Template.header.helpers({

    isNavBtnActive: function(route) {
        return route === this.main() ? 'active' : null;
    }

});


Template.header.events({

    'click .menu > .item' : function(e) {
        let link = $(e.currentTarget).data('target');
        FlowRouter.go(`/${link}`);
    }

});