

let questions = [
    {
      question: "What is the formula of the Present perfect tense?",
      variants: [
        "S + V",
        "S + have/has + V?",
        "S + had + V",
        "S + will + V"
      ],
      correctAnswer: "S + have/has + V?",
    },
    {
      question: "What is the varieble of can in the past tense?",
      variants: [
        "would",
        "can",
        "could",
        "may"
      ],
      correctAnswer: "could",
    },
    {
      question: "How many legs does a spider have?",
      variants: [
        "8",
        "10",
        "4",
        "6"
      ],
      correctAnswer: "6",
    },
    {
      question: "What is the YUMURTQA in the literary language",
      variants: [
        "Potato",
        "Carrot",
        "Tomato",
        "Egg"
      ],
      correctAnswer: "Egg",
    },
    {
      question: "Which operation system first created the following systems?",
      variants: [
        "Linux",
        "Windows",
        " Mac",
        "Android"
      ],
      correctAnswer: "Linux",
    },
    {
      question: "Which Computer is the best in the world?",
      variants: [
        "Macbook",
        "Asus",
        " Dell",
        "Victus"
      ],
      correctAnswer: "Victus",
    },
    
  ];
  
  
  
  function addQuestion() {
    let question = prompt("Yangi savol kiriting");
    if (question) {
      let variants = [];
      for (let i = 0; i < 4; i++) {
        let variant = prompt(`Enter variant ${String.fromCharCode(97 + i)}:`);
        variants.push(variant);
      }
      let correctAnswer = prompt("Enter the correct answer:");
  
      questions.push({ question, variants, correctAnswer });
      alert("Savol qo'shildi!");
    } else {
      alert("Savol yozilmadi!");
    }
  }
  
  function startTest() {
    let sertifikat = prompt(
      "Sizda chet tilini bilish sertifikari bormi?" +
        "\n" +
        "Javob berish HA yoki YO'Q buyrug'ini kiriting! "
    );
    let IELTS = 0;
    let sertifikat1 = sertifikat.toUpperCase();
    if (sertifikat1 == "HA") {
      IELTS = 1.3;
    } else {
      IELTS = 1;
    }
    
    
    let questions = [
      
      {
        question: "What is the formula of the Present perfect tense?",
        variants: [
          "S + V",
          "S + have/has + V?",
          "S + had + V",
          "S + will + V"
        ],
        correctAnswer: "S + have/has + V?",
      },
      {
        question: "What is the varieble of can in the past tense?",
        variants: [
          "would",
          "can",
          "could",
          "may"
        ],
        correctAnswer: "could",
      },
      {
        question: "How many legs does a spider have?",
        variants: [
          "8",
          "10",
          "4",
          "6"
        ],
        correctAnswer: "6",
      },
      {
        question: "What is the YUMURTQA in the literary language",
        variants: [
          "Potato",
          "Carrot",
          "Tomato",
          "Egg"
        ],
        correctAnswer: "Egg",
      },
      {
        question: "Which operation system first created the following systems?",
        variants: [
          "Linux",
          "Windows",
          " Mac",
          "Android"
        ],
        correctAnswer: "Linux",
      },
      {
        question: "Which Computer is the best in the world?",
        variants: [
          "Macbook",
          "Asus",
          " Dell",
          "Victus"
        ],
        correctAnswer: "Victus",
      },
      
    ];
  
    
  
    let counter = 0;
  
    function Rendom(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  
    Rendom(questions);
  
    const startTime = new Date();
    for (let i = 0; i < questions.length; i++) {
      let userAnswer = prompt(
        i + 1 + ") " + questions[i].question + "\n" + toVariant(questions[i].variants).join("\n")
      );
      let n = userAnswer.toLowerCase().charCodeAt(0) - 97;
      if (questions[i].variants[n] === questions[i].correctAnswer) {
        counter++;
      }
    }
    const endTime = new Date();
    const sarflanganVaqt = endTime - startTime;
  
    alert(
      "Siz " + questions.length + " ta savoldan " + counter + " ta to'gri bajardingiz." +
      "\n" +
      "IELTS uchun berilgan indeks: " +
      IELTS +
      "\n" +
      "Siz to'plagan umumiy ball: " +
      "\n" +
      counter * 5 * IELTS +
      "\n" +
      "Sizning savolga sarflagan vaqtinggiz " +
      Math.floor(sarflanganVaqt / 1000) +
      " sekund"
    );
  }
  
  
  
  function toVariant(arr) {
    let newArr = arr.map((el, i) => {
      return String.fromCharCode(65 + i) + ") " + el;
    });
    return newArr;
  }
  
  function showQuestions() {
    let questionsList = "Savollar ro'yxati: \n";
    for (let i = 0; i < questions.length; i++) {
      questionsList += i + 1 + ") " + questions[i].question + "\n";
    }
    alert(questionsList);
  }
  function editTest() {
    let questionIndex = +prompt("Qaysi savolni tahrirlamoqchisiz (Tahrirlamoqchi bo'lgan savol raqamini kiriting):");
  
    if (questionIndex >= 1 && questionIndex <= questions.length) {
      let newQuestion = prompt("Yangi savol kiriting", questions[questionIndex - 1].question);
      let newVariants = [
        prompt("Variant kiriting a:", questions[questionIndex - 1].variants[0]),
        prompt("Variant kiriting b:", questions[questionIndex - 1].variants[1]),
        prompt("Variant kiriting c:", questions[questionIndex - 1].variants[2]),
        prompt("Variant kiriting d:", questions[questionIndex - 1].variants[3])
      ];
      let newCorrectAnswer = prompt("Correct answer kiriting:", questions[questionIndex - 1].correctAnswer);
  
      questions[questionIndex - 1].question = newQuestion;
      questions[questionIndex - 1].variants = newVariants;
      questions[questionIndex - 1].correctAnswer = newCorrectAnswer;
  
      alert("Savol muvaffaqiyatli kiritildi!");
    } else {
      alert("Savol raqami noto'g'ri kiritildi!");
    }
  }
  
  function deleteQuestion() {
  
    let questionsWord = "O'chirmoqchi bo'lgan savol raqamini tanlang: \n";
    for (let i = 0; i < questions.length; i++) {
      questionsWord += i + 1 + ") " + questions[i].question + "\n";
    }
    alert(questionsWord);
    
    let questionIndex = +prompt("Nechanchi savolni ochirmoqchisiz? (raqamni kiriting)");
  
    
    if (questionIndex >= 1 && questionIndex <= questions.length) {
      questions.splice(questionIndex - 1, 1);
      alert("Savol  o'chirildi!");
    } else {
      alert("Savol raqami noto'g'ri kiritildi!");
    }
  }
  