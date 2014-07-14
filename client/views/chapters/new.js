Template.new_chapter.events({
   'submit form': function(event, template) {
      event.preventDefault();

      var title = template.find('.title'),
         subtitle = template.find('.subtitle'),
         lesson = template.find('.lesson'),
         summary = template.find('.summary'),
         question = template.find('.question');

      Meteor.call('addChapter', title.value, subtitle.value, lesson.value, summary.value, question.value);
      title.value = '';
      subtitle.value = '';
      lesson.value = '';
      summary.value = '';
      question.value = '';

      Router.go('home');
   }
});

// Template.chapters.helpers({
//    chapters: function() {
//       return Chapters.find();
//    }
// })
