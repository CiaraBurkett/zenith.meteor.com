Meteor.methods({
   addChapter: function(title, subtitle, lesson, summary, question) {
      Chapters.insert({
         title: title,
         subtitle: subtitle,
         lesson: lesson,
         summary: summary,
         question: question
      });
   }
});
