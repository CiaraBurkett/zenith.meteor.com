Meteor.methods({
   addChapter: function(title, subtitle, lesson, summary, exercise) {
      Chapters.insert({
         title: title,
         subtitle: subtitle,
         lesson: lesson,
         summary: summary,
         exercise: exercise
      });
   }
});
