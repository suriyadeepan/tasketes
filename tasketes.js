
Task = Mongo.CollectionName = new Mongo.Collection("tasks");


if (Meteor.isClient) {


  Template.body.helpers({

    tasks : function(){
      return Task.find();

    }

  });



  Template.body.events({
    "submit .new-task": function(event){



      //title = event.target.title.value;
      Task.insert({
        title : event.target.title.value,
        createdAt : new Date()
      });

      event.target.title.value = "";

      return false;

    }
  });



Template.task.events({
  'click .remove': function(){

    Task.remove(this._id);
  }
});


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
