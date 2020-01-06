import * as moment from 'moment';
import { Moment } from "moment";

interface Location {
  time: string;
  location: string;
}

interface Lecture {
  date: Date|Moment;
  name?: string;
  location?: Location[];
  locationName?: string;
  slides?: string;
}

interface Major {
  date: Date|Moment;
  name?: string;
  link?: string;
  location?: Location[];
  locationName?: string;
}

interface OfficeHour {
  date: Date|Moment;
  name?: string;
  location?: Location[];
  locationName?: string;
}

interface Section {
  date: Date|Moment;
  name?: string;
  location?: Location[];
  locationName?: string;
  slides?: string;
}

class CalendarData {
  datesOfInstruction = {
    start: moment('Sun 2020-01-05', 'ddd YYYY-MM-DD'),  // Must be a Sunday
    end:   moment('Sat 2020-03-21', 'ddd YYYY-MM-DD')   // Must be a Saturday
  };

  locations = {
    lecture: [
      {
        time: '11:30 - 12:50',
        location: 'NAN 181'
      }
    ],

    section: [
      {
        time: '10:30 - 11:20',
        location: 'MGH 295'
      },
      {
        time: '11:30 - 12:20',
        location: 'MGH 295'
      },
      {
        time: '1:30 - 2:20',
        location: 'MGH 295'
      },
      {
        time: '2:30 - 3:20',
        location: 'MGH 295'
      }
    ],

    sectionMorningOnly: [
      {
        time: '10:30 - 11:20',
        location: 'MGH 295'
      },
      {
        time: '11:30 - 12:20',
        location: 'MGH 058'
      }
    ],

    sectionAfternoonOnly: [
      {
        time: '1:30 - 2:20',
        location: 'MGH 295'
      },
      {
        time: '2:30 - 3:20',
        location: 'MGH 295'
      }
    ],

    posterSession: [
      {
        time: '11:30 - 12:50',
        location: 'Allen Atrium'
      }
    ],

    /*
        examQA: [
          {
            time: "TBD",
            location: "TBD"
          }
        ],
    */

    officeHourJames: [
      {
        time: "3:30 - 4:30",
        location: "Allen 632"
      }
    ],
    officeHourJesse: [
      {
        time: "2:00 to 3:00",
        location: "Allen 4th Floor Breakout"
      }
    ],
    officeHourQisheng: [
      {
        time: "10:00 to 11:00",
        location: "Allen 4th Floor Breakout"
      }
    ],

    /*
        officeHourJamesAt200: [
          {
            time: "2:00 - 3:00",
            location: "CSE 632"
          }
        ],

        officeHourJamesAt300: [
          {
            time: "3:00 - 4:00",
            location: "CSE 632"
          }
        ],
    */
  };

  holidays = [
    {
      date: moment('2020-01-20', 'YYYY-MM-DD'),
      name: 'Martin Luther King Day'
    },
    {
      date: moment('2020-02-17', 'YYYY-MM-DD'),
      name: 'Presidents Day'
    }
  ];

  lectures: Lecture[] = [
    {
      date: moment('2020-01-07', 'YYYY-MM-DD'),
      name: 'Introduction,<br>Project Overview',
      slides: 'https://canvas.uw.edu/files/60961965/download?download_frd=1'
    },
    {
      date: moment('2020-01-09', 'YYYY-MM-DD'),
      name: 'Design Diamond',
      // Theoretical basis for expand/contract in design, should go early
      // Includes IDEO video, which works well early
      // Allows explaining the assignment milestones if needed
      // slides: ''
    },
    {
      date: moment('2020-01-14', 'YYYY-MM-DD'),
      // name: '',
      // slides: ''
    },
    {
      date: moment('2020-01-16', 'YYYY-MM-DD'),
      // name: '',
      // slides: ''
    },
    {
      date: moment('2020-01-21', 'YYYY-MM-DD'),
      name: 'Critique',
      // slides: ''
    },
    {
      date: moment('2020-01-23', 'YYYY-MM-DD'),
      // name: '',
      // slides: ''
    },
    {
      date: moment('2020-01-28', 'YYYY-MM-DD'),
      // name: '',
      // slides: ''
    },
    {
      date: moment('2020-01-30', 'YYYY-MM-DD'),
      // name: '',
      // slides: ''
    },
    {
      date: moment('2020-02-04', 'YYYY-MM-DD'),
      // name: '',
      // slides: ''
    },
    {
      date: moment('2020-02-06', 'YYYY-MM-DD'),
      // name: '',
      // slides: ''
    },
    {
      date: moment('2020-02-11', 'YYYY-MM-DD'),
      // name: '',
      // slides: ''
    },
    // Presentations
    {
      date: moment('2020-02-18', 'YYYY-MM-DD'),
      // name: '',
      // slides: ''
    },
    {
      date: moment('2020-02-20', 'YYYY-MM-DD'),
      // name: '',
      // slides: ''
    },
    // Exam
    {
      date: moment('2020-02-27', 'YYYY-MM-DD'),
      name: 'Designing for Diverse Needs',
      // slides: ''
    },
    {
      date: moment('2020-03-03', 'YYYY-MM-DD'),
      // name: '',
      // slides: ''
    },
    // Presentations
    {
      date: moment('2020-03-10', 'YYYY-MM-DD'),
      name: 'Video Critique',
      // slides: ''
    },

//      name: 'Contextual Inquiry,<br>Design Research',
      // Required for 2b planning of design research over weekend
      // Can allow pre-project-team in-class exercise considering strengths/weakness of different design research methods for a project

//      name: 'Design of Everyday Things',

//      name: 'Critique',
      // Required to be day that 2b is due, includes in-class critique of 2b

//      name: 'Task Analysis',
      // Required for Project 2d

//      name: 'Additional Background<br>in Personal Informatics<br>and Machine Learning',

//      name: 'Storyboarding,<br>Video Prototyping',
      // Required for 2g
      // Doing before 2f allows including a bit of a refresh on sketching

//      name: 'Presentations,<br>Paper Prototyping,<br>Testing',
      // Should be week before Assignment 2 presentations,
      // so they can benefit from this as this as they make their presentations
      // Required for 3a

//      name: 'Testing,<br>Patterns',

//      name: 'Inspection',
      // Required to be day that 3a is due, includes in-class start on 3b'

//      name: 'Human Performance'

//      name: 'Designing for Diverse Needs',

//      name: 'History',

//      name: 'Interface Implementation',

  ];

  sections: Section[] = [
    {
      date: moment('2020-01-10', 'YYYY-MM-DD'),
    },
    {
      date: moment('2020-01-17', 'YYYY-MM-DD'),
    },
    {
      date: moment('2020-01-24', 'YYYY-MM-DD'),
    },
    {
      date: moment('2020-01-31', 'YYYY-MM-DD'),
    },
    {
      date: moment('2020-02-07', 'YYYY-MM-DD'),
    },
    // Presentations
    {
      date: moment('2020-02-21', 'YYYY-MM-DD'),
    },
    {
      date: moment('2020-02-28', 'YYYY-MM-DD'),
    },
    // Presentations
    {
      date: moment('2020-03-13', 'YYYY-MM-DD'),
    },
/*
    {
      date: moment('2019-02-25', 'YYYY-MM-DD'),
      name: 'Exam Q&A',
      locationName: 'examQA',
      slides: 'https://canvas.uw.edu/files/54172899/download?download_frd=1'
    },
    {
      date: moment('2019-03-14', 'YYYY-MM-DD'),
      locationName: 'lecture',
    },
*/
  ];

  majors: Major[] = [
    {
      date: moment('2020-02-13', 'YYYY-MM-DD'),
      name: 'Presentations',
      locationName: 'lecture',
      link: '/assignments/assignment2#id-2i-presentation'
    },
    {
      date: moment('2020-02-14', 'YYYY-MM-DD'),
      name: 'Presentations',
      locationName: 'section',
      link: '/assignments/assignment2#id-2i-presentation'
    },
    {
      date: moment('2020-02-25', 'YYYY-MM-DD'),
      name: 'Exam',
      locationName: 'lecture',
      // link: 'slides/lecture/cse440-consolidated-17au.pdf'
    },
    {
      date: moment('2020-03-05', 'YYYY-MM-DD'),
      name: 'Presentations',
      locationName: 'lecture',
      link: '/assignments/assignment3#id-3g-presentation'
    },
    {
      date: moment('2020-03-06', 'YYYY-MM-DD'),
      name: 'Presentations',
      locationName: 'section',
      link: '/assignments/assignment3#id-3g-presentation'
    },
    {
      date: moment('2020-03-12', 'YYYY-MM-DD'),
      name: 'Poster Session',
      locationName: 'posterSession',
      link: '/assignments/assignment4#id-4p-poster-session'
    }
  ];

  assignments = [
    // Assignment 0
    {
      date: moment('2020-01-09', 'YYYY-MM-DD'),
      name: "0 - Introduction Slide",
      dueNote: "[due end of day]",
      link: "/assignments/assignment0/"
    },

    // Assignment 1
    {
      date: moment('2020-01-09', 'YYYY-MM-DD'),
      dueNote: '[due night before section]',
      name: '1a - Project Brainstorm',
      link: '/assignments/assignment1#id-1a-proposal-brainstorm'
    },
    {
      date: moment('2020-01-13', 'YYYY-MM-DD'),
      name: '1b - Project Proposal',
      dueNote: '[due night before class]',
      link: '/assignments/assignment1#id-1b-project-proposal'
    },
    {
      date: moment('2020-01-15', 'YYYY-MM-DD'),
      name: '1c - Project Bid',
      dueNote: '[due night before class]',
      link: '/assignments/assignment1/#id-1c-project-bid'
    },

    // Assignment 2
    {
      date: moment('2020-01-17', 'YYYY-MM-DD'),
      name: '2a - Project Ideation',
      dueNote: '[done in section]',
      link: '/assignments/assignment2#id-2a-project-ideation'
    },
    {
      date: moment('2020-01-20', 'YYYY-MM-DD'),
      name: '2b - Design Research Plan',
      dueNote: '[due night before class]',
      link: '/assignments/assignment2#id-2b-design-research-plan'
    },
    {
      date: moment('2020-01-23', 'YYYY-MM-DD'),
      name: '2c - Design Research Check-In',
      dueNote: '[due night before section]',
      link: '/assignments/assignment2#id-2c-design-research-check-in'
    },
    {
      date: moment('2020-01-27', 'YYYY-MM-DD'),
      name: '2d - Design Research Review',
      dueNote: '[due night before class]',
      link: '/assignments/assignment2#id-2d-design-research-review'
    },
    {
      date: moment('2020-01-30', 'YYYY-MM-DD'),
      name: '2e - Task Review',
      dueNote: '[due night before section]',
      link: '/assignments/assignment2#id-2e-task-review'
    },
    {
      date: moment('2020-02-03', 'YYYY-MM-DD'),
      name: '2f - Design Check-In',
      dueNote: '[due night before class]',
      link: '/assignments/assignment2#id-2f-design-check-in-3x4',
    },
    {
      date: moment('2020-02-06', 'YYYY-MM-DD'),
      name: '2g - Design Review',
      dueNote: '[due night before section]',
      link: '/assignments/assignment2#id-2g-design-review-1x2'
    },
    {
      date: moment('2020-02-10', 'YYYY-MM-DD'),
      name: '2web - Getting the Right Design',
      dueNote: '[due night before class]',
      link: '/assignments/assignment2#id-2web-getting-the-right-design'
    },
    {
      date: moment('2020-02-12', 'YYYY-MM-DD'),
      name: '2p - Presentation',
      dueNote: '[due night before class]',
      link: '/assignments/assignment2#id-2p-presentation'
    },

    // Assignment 3
    {
      date: moment('2020-02-17', 'YYYY-MM-DD'),
      name: '3a - Paper Protoype',
      dueNote: '[due night before class]',
      link: '/assignments/assignment3#id-3a-paper-prototype'
    },
    {
      date: moment('2020-02-18', 'YYYY-MM-DD'),
      name: '3b - Heuristic Evaluation',
      dueNote: '[done in class]',
      link: '/assignments/assignment3#id-3b-heuristic-evaluation'
    },
    {
      date: moment('2020-02-20', 'YYYY-MM-DD'),
      name: '3c - Usability Testing Check-In',
      dueNote: '[due night before section]',
      link: '/assignments/assignment3#id-3c-usability-testing-check-in'
    },
    {
      date: moment('2020-02-27', 'YYYY-MM-DD'),
      name: '3d - Usability Testing Review',
      dueNote: '[due night before section]',
      link: '/assignments/assignment3#id-3d-usability-testing-review'
    },
    {
      date: moment('2020-03-02', 'YYYY-MM-DD'),
      name: '3e - Digital Mockup',
      dueNote: '[due night before class]',
      link: '/assignments/assignment3#id-3e-digital-mockup'
    },
    {
      date: moment('2020-03-09', 'YYYY-MM-DD'),
      name: '3web - Getting the Design Right',
      dueNote: '[due night before class]',
      link: '/assignments/assignment3#id-3web-getting-the-design-right'
    },
    {
      date: moment('2020-03-04', 'YYYY-MM-DD'),
      name: '3p - Presentation',
      dueNote: '[due night before class]',
      link: '/assignments/assignment3#id-3p-presentation'
    },

    // Assignment 4
    {
      date: moment('2020-03-02', 'YYYY-MM-DD'),
      name: '4a - Initial Poster and Pitch',
      dueNote: '[due night before class]',
      link: '/assignments/assignment4#id-4a-initial-poster-and-pitch'
    },
    {
      date: moment('2020-03-09', 'YYYY-MM-DD'),
      name: '4b - Initial Video',
      dueNote: '[due night before class]',
      link: '/assignments/assignment4#id-4b-initial-video'
    },
    {
      date: moment('2020-03-09', 'YYYY-MM-DD'),
      name: '4c - Final Poster and Pitch',
      dueNote: '[due night before class]',
      link: '/assignments/assignment4#id-4c-final-poster-and-pitch'
    },
    {
      date: moment('2020-03-13', 'YYYY-MM-DD'),
      name: '4d - Final Video',
      dueNote: '[due end of day]',
      link: '/assignments/assignment4#id-4d-final-video'
    },

    // Group Feedback
    {
      date: moment('2020-02-14', 'YYYY-MM-DD'),
      name: 'Group Feedback',
      dueNote: '[due end of day]',
      link: '/#group-feedback'
    },

    {
      date: moment('2020-03-13', 'YYYY-MM-DD'),
      name: 'Group Feedback',
      dueNote: '[due end of day]',
      link: '/#group-feedback'
    },

    /*
    // Readings
    {
      date: moment('2019-01-17', 'YYYY-MM-DD'),
      name: 'Reading 1: Contextual Inquiry<br>and Design Research',
      dueNote: '[due night before section]',
      link: '/assignments/readings/#reading-1-contextual-inquiry-and-design-research'
    },
    {
      date: moment('2019-01-28', 'YYYY-MM-DD'),
      name: 'Reading 2: Research Paper',
      dueNote: '[due night before class]',
      link: '/assignments/readings/#reading-2-research-paper'
    },
    {
      date: moment('2019-02-04', 'YYYY-MM-DD'),
      name: 'Reading 3: Storyboarding<br>and Video Prototyping',
      dueNote: '[due night before class]',
      link: '/assignments/readings/#reading-3-storyboarding-and-video-prototyping'
    },
    {
      date: moment('2019-02-11', 'YYYY-MM-DD'),
      name: 'Reading 4: Paper Prototyping<br>and Usability Testing',
      dueNote: '[due night before class]',
      link: '/assignments/readings/#reading-4-paper-prototyping-and-usability-testing'
    },
    {
      date: moment('2019-02-22', 'YYYY-MM-DD'),
      name: 'Reading 5: Design Patterns',
      dueNote: '[due night before class]',
      link: '/assignments/readings/#reading-5-patterns'
    },
     */
  ];

  officeHours: OfficeHour[] = [
    // James
    {
      date: moment('2020-01-14', 'YYYY-MM-DD'),
      name: 'Office Hours - James',
      locationName: 'officeHourJames'
    },
    {
      date: moment('2020-01-21', 'YYYY-MM-DD'),
      name: 'Office Hour - James',
      locationName: 'officeHourJames'
    },
    {
      date: moment('2020-01-28', 'YYYY-MM-DD'),
      name: 'Office Hour - James',
      locationName: 'officeHourJames'
    },
    {
      date: moment('2020-02-04', 'YYYY-MM-DD'),
      name: 'Office Hour - James',
      locationName: 'officeHourJames'
    },
    {
      date: moment('2020-02-11', 'YYYY-MM-DD'),
      name: 'Office Hour - James',
      locationName: 'officeHourJames'
    },
    {
      date: moment('2020-02-18', 'YYYY-MM-DD'),
      name: 'Office Hour - James',
      locationName: 'officeHourJames'
    },
    {
      date: moment('2020-02-25', 'YYYY-MM-DD'),
      name: 'Office Hour - James',
      locationName: 'officeHourJames'
    },
    {
      date: moment('2020-03-03', 'YYYY-MM-DD'),
      name: 'Office Hour - James',
      locationName: 'officeHourJames'
    },
    {
      date: moment('2020-03-10', 'YYYY-MM-DD'),
      name: 'Office Hour - James',
      locationName: 'officeHourJames'
    },

    // Qisheng
    {
      date: moment('2020-01-22', 'YYYY-MM-DD'),
      name: 'Office Hour - Qisheng',
      locationName: 'officeHourQisheng'
    },
    {
      date: moment('2020-01-29', 'YYYY-MM-DD'),
      name: 'Office Hour - Qisheng',
      locationName: 'officeHourQisheng'
    },
    {
      date: moment('2020-02-05', 'YYYY-MM-DD'),
      name: 'Office Hour - Qisheng',
      locationName: 'officeHourQisheng'
    },
    {
      date: moment('2020-02-12', 'YYYY-MM-DD'),
      name: 'Office Hour - Qisheng',
      locationName: 'officeHourQisheng'
    },
    {
      date: moment('2020-02-19', 'YYYY-MM-DD'),
      name: 'Office Hour - Qisheng',
      locationName: 'officeHourQisheng'
    },
    {
      date: moment('2020-02-26', 'YYYY-MM-DD'),
      name: 'Office Hour - Qisheng',
      locationName: 'officeHourQisheng'
    },
    {
      date: moment('2020-03-04', 'YYYY-MM-DD'),
      name: 'Office Hour - Qisheng',
      locationName: 'officeHourQisheng'
    },
    {
      date: moment('2020-03-11', 'YYYY-MM-DD'),
      name: 'Office Hour - Qisheng',
      locationName: 'officeHourQisheng'
    },

    // Jesse
    {
      date: moment('2020-01-23', 'YYYY-MM-DD'),
      name: 'Office Hour - Jesse',
      locationName: 'officeHourJesse'
    },
    {
      date: moment('2020-01-30', 'YYYY-MM-DD'),
      name: 'Office Hour - Jesse',
      locationName: 'officeHourJesse'
    },
    {
      date: moment('2020-02-06', 'YYYY-MM-DD'),
      name: 'Office Hour - Jesse',
      locationName: 'officeHourJesse'
    },
    {
      date: moment('2020-02-13', 'YYYY-MM-DD'),
      name: 'Office Hour - Jesse',
      locationName: 'officeHourJesse'
    },
    {
      date: moment('2020-02-20', 'YYYY-MM-DD'),
      name: 'Office Hour - Jesse',
      locationName: 'officeHourJesse'
    },
    {
      date: moment('2020-02-27', 'YYYY-MM-DD'),
      name: 'Office Hour - Jesse',
      locationName: 'officeHourJesse'
    },
    {
      date: moment('2020-03-05', 'YYYY-MM-DD'),
      name: 'Office Hour - Jesse',
      locationName: 'officeHourJesse'
    },
    {
      date: moment('2020-03-12', 'YYYY-MM-DD'),
      name: 'Office Hour - Jesse',
      locationName: 'officeHourJesse'
    },
  ];

  aways = [
    {
      date: moment('2020-01-07', 'YYYY-MM-DD'),
      name: 'Jena Away',
    },
/*
    {
      date: moment('2019-01-10', 'YYYY-MM-DD'),
      name: 'Jeremy Away from Lecture',
    },
    {
      date: moment('2019-01-17', 'YYYY-MM-DD'),
      name: 'Jeremy Away from Lecture',
    },
    {
      date: moment('2019-01-24', 'YYYY-MM-DD'),
      name: 'Jeremy Away from Lecture',
    },
    {
      date: moment('2019-01-25', 'YYYY-MM-DD'),
      name: 'Mandy Away<br>Manaswi in 10:30',
    },
    {
      date: moment('2019-01-25', 'YYYY-MM-DD'),
      name: 'Jeremy Away<br>Mandy in 1:30',
    },
    {
      date: moment('2019-01-25', 'YYYY-MM-DD'),
      name: 'Jeremy Away<br>Annie in 2:30',
    },
    {
      date: moment('2019-01-31', 'YYYY-MM-DD'),
      name: 'Jeremy Away from Lecture',
    },
    {
      date: moment('2019-02-05', 'YYYY-MM-DD'),
      name: 'Snow Cancellation'
    },
    {
      date: moment('2019-02-07', 'YYYY-MM-DD'),
      name: 'Jeremy Away from Lecture',
    },
    {
      date: moment('2019-02-12', 'YYYY-MM-DD'),
      name: 'Snow Cancellation'
    },
    {
      date: moment('2019-02-21', 'YYYY-MM-DD'),
      name: 'Jeremy Away from Lecture',
    },
    {
      date: moment('2019-02-28', 'YYYY-MM-DD'),
      name: 'Jeremy Away from Lecture',
    },
    {
      date: moment('2019-03-01', 'YYYY-MM-DD'),
      name: 'Jeremy Away<br>Annie in 1:30',
    },
    {
      date: moment('2019-03-01', 'YYYY-MM-DD'),
      name: 'Jeremy Away<br>Annie in 2:30',
    },
    {
      date: moment('2019-03-07', 'YYYY-MM-DD'),
      name: 'Jeremy Away from Lecture',
    },
    {
      date: moment('2019-03-14', 'YYYY-MM-DD'),
      name: 'Jeremy Away from Lecture',
    }
*/
  ];
}

export const calendar = new CalendarData();
