export interface Category {
  category: string;
  questions: Question[];
}
export interface Question {
  topic: string;
  desc: string;
  url: string;
}

export const DATA: Category[] = [
  {
    category: 'Angular',
    questions: [
      {
        topic: 'Find Sum',
        desc: 'Find the Sum of two text box.',
        url: 'displaysum',
      },
      {
        topic: 'Perform Auto Complete',
        desc: 'Once user key in three character, application will call API to retrieved all matched user name. Once User select the listed user name, Text box will auto complete with the selected name and display user ID in label.',
        url: 'autocomplete',
      },
    ],
  },
  { category: 'JavaScript', questions: [] },
];
