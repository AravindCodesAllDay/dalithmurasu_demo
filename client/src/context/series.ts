type Series = {
  id: string;
  title: string;
  category: string;
  author: string;
  photo: string;
  parts: [
    {
      id: string;
      title: string;
      date: string;
      content: string[];
      photo: string[];
      author: string;
    }
  ];
};

export const series: Series[] = [];
