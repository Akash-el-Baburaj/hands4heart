import { Component } from '@angular/core';
// import { Option, Question, Quiz, QuizConfig } from '../models/index';
import { ActivatedRoute, Router } from '@angular/router';

import { AccessmentService } from 'src/app/core/service/accessment.service';

@Component({
  selector: 'app-test-evaluation',
  templateUrl: './test-evaluation.component.html',
  styleUrls: ['./test-evaluation.component.css']
})
export class TestEvaluationComponent {
  banner: any = {
    pagetitle: "Assessment",
    bg_image: "assets/images/banner/bnr1.jpg",
    title: "Assessment",
  };

  quizes: any[] = [];
  quiz: any ;
  // quiz: Quiz = new Quiz(null);
  mode = 'quiz';
  quizName: string = '';
  config: any = {
    'allowBack': true,
    'allowReview': true,
    'autoMove': false,
    'duration': 300,
    'pageSize': 1,
    'requiredAll': false,
    'richText': false,
    'shuffleQuestions': false,
    'shuffleOptions': false,
    'showClock': false,
    'showPager': true,
    'theme': 'none'
  };

  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  timer: any = null;
  startTime!: Date;
  endTime!: Date;
  ellapsedTime = '00:00';
  duration = '';
  page: number = 1;

  constructor(private quizService: AccessmentService, private route: ActivatedRoute, private router: Router) { 
    this.getCourseId();
   }

  ngOnInit() {
    // this.quizes = this.quizService.getAll();
    // this.quizName = this.quizes[0].id;'307477b1-087d-460d-9bad-635f70b0ed0d'
  }

  getCourseId() {
    let id: any;
    this.route.queryParams.subscribe(params => {
      const ID = params['id']; 
      if (ID) {
        id = ID;
        this.getQuiz(id, this.page)
      }
    })
  }

  loadQuiz(quizName: string) {
    // this.quizService.get(quizName).subscribe(res => {
    //   this.quiz = new Quiz(res);
    //   this.pager.count = this.quiz.questions.length;
    //   this.startTime = new Date();
    //   this.ellapsedTime = '00:00';
    //   this.timer = setInterval(() => { this.tick(); }, 1000);
    //   this.duration = this.parseTime(this.config.duration);
    // });
    this.mode = 'quiz';
  }

  getQuiz(id: string, page: number) {
    this.quizService.getQuiz(id, page).subscribe({
      next: (res: any) => {
        if (res.success) {
          const quizData = res.data;
          this.quiz = {
            id: quizData.quiz,
            name: 'Sample Quiz',
            questions: quizData.questions.map((q: any) => ({
              id: q.id,
              name: q.text,
              options: q.options.map((o: any) => ({
                id: o.id,
                name: o.text,
                isCorrect: o.isCorrect,
                selected: false,
              })),
            })),
          };
          this.pager.count = this.quiz.questions.length;
          this.startTime = new Date();
          this.ellapsedTime = '00:00';
          this.timer = setInterval(() => this.tick(), 1000);
          this.duration = this.parseTime(this.config.duration);
        } else {
          console.error('Failed to load quiz:', res.message);
        }
      },
      error: (err) => {
        console.error('Error fetching quiz:', err);
      },
    });
  }
  

  tick() {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    if (diff >= this.config.duration) {
      this.onSubmit();
    }
    this.ellapsedTime = this.parseTime(diff);
  }

  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }

  get filteredQuestions() {
    return (this.quiz.questions) ?
      this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  // onSelect(question: any, option: any) {
  //   if (question) {
  //     question.options.forEach((x: any) => { if (x.id !== option.id) x.selected = false; });
  //     console.log('question => ', question)

  //   }

  //   if (this.config.autoMove) {
  //     this.goTo(this.pager.index + 1);
  //   }
  // }
  onSelect(question: any, option: any) {
    // Ensure only one option can be selected
    if (question) {
      question.options.forEach((x: any) => (x.selected = false));
    }
    option.selected = !option.selected; // Toggle selection
  
    if (this.config.autoMove && option.selected) {
      this.goTo(this.pager.index + 1);
    }
  }
  
  isOptionSelected(question: any): boolean {
    return question.options.some((option: any) => option.selected);
  }
  

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'quiz';
    }
  }

  isAnswered(question: any) {
    return question.options.find((x :any) => x.selected) ? 'Answered' : 'Not Answered';
  };

  isCorrect(question: any) {
    return question.options.every((x :any) => x.selected === x.isAnswer) ? 'correct' : 'wrong';
  };

  // onSubmit() {
  //   let answers = [];
  //   this.quiz.questions.forEach((x :any) => answers.push({ 'quizId': this.quiz.id, 'questionId': x.id, 'answered': x.answered }));

  //   // Post your data to the server here. answers contains the questionId and the users' answer.
  //   console.log(this.quiz.questions);
  //   this.mode = 'result';
  // }

  onSubmit() {
    const answers = this.quiz.questions.map((q: any) => ({
      questionId: q.id,
      selectedOption: q.options.find((o: any) => o.selected)?.id || null,
    }));
  
    console.log('Submitted Answers:', answers);
  
    // After submitting, calculate results
    this.mode = 'result';
    this.quiz.questions.forEach((q: any) => {
      q.isCorrect = q.options.every((o: any) => o.selected === !!o.isCorrect);
    });
  }
  
  navigateTo(url: string) {
    this.router.navigate([url])
  }

}
