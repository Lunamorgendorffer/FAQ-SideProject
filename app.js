const questions = document.querySelectorAll(".question"); // Sélectionner tous les éléments avec la classe 'question' dans le document

questions.forEach(function (question) { // Pour chaque élément 'question'
  const btn = question.querySelector(".btn"); // Sélectionner le bouton à l'intérieur de l'élément 'question'
  // console.log(btn);

  btn.addEventListener("click", function () { // Ajouter un écouteur d'événements de clic au bouton
    // console.log(question);

    questions.forEach(function (item) { // Pour chaque élément 'question'
      if (item !== question) { // Si l'élément actuel n'est pas celui sur lequel le bouton a été cliqué
        item.classList.remove("show-text"); // Retirer la classe 'show-text' de l'élément pour masquer le texte
      }
    });

    question.classList.toggle("show-text"); // Ajouter ou retirer la classe 'show-text' de l'élément sur lequel le bouton a été cliqué pour afficher ou masquer le texte
  });
});


/* METHODE DOM*/
// const btns = document.querySelectorAll('.btn'); // Sélectionner tous les éléments avec la classe 'btn' dans le document

// btns.forEach(function(btn){ // Pour chaque élément avec la classe 'btn'
//     btn.addEventListener('click', function(e){ // Ajouter un écouteur d'événements de clic au bouton
//         const question= e.currentTarget.parentElement.parentElement; // Sélectionner l'élément parent du parent du bouton (l'élément 'question')
//         question.classList.toggle('show-text'); // Ajouter ou retirer la classe 'show-text' de l'élément 'question' pour afficher ou masquer le texte

//     });
// });
