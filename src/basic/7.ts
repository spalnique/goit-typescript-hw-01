// type PageStatus = 'open' | 'close';

enum PageStatus {
  open = 'open',
  close = 'close',
}

interface IPage {
  title: string;
  likes: number;
  accounts: [...string[]];
  status: PageStatus;
  details?: { createAt: Date; updateAt: Date };
}

const page1: IPage = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: PageStatus.open,
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  },
};

const page2: IPage = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: PageStatus.close,
};
