const data = {
  Books: [
    {
      id: 1,
      title: "GRAPHQL",
      publishedYear: 2024,
      author: 1,
    },
    {
      id: 2,
      title: "NextJS",
      publishedYear: 2022,
      author: 2,
    },
    {
      id: 3,
      title: "Docker",
      publishedYear: 2020,
      author: 1,
    },
  ],

  Authors: [
    {
      id: 1,
      name: "Sejal Pande",
      book: [1, 2],
    },
    {
      id: 2,
      name: "Alice",
      book: [3],
    },
  ],
};

export const resolvers = {
  Book: {
    author: (parent, args, context, info) => {
      return data.Authors.find((auth) => auth.id === parent.author);
    },
  },
  Author: {
    books: (parent, args, context, info) => {
        return data.Books.filter(book => parent.book.includes(book.id))
    }
  },
  Query: {
    authors: () => {
      return data.Authors;
    },
    books: () => {
      return data.Books;
    },
  },
  Mutation: {
    addBook: (parent, args, context, info) => {
        const newBook = {...args,id: data.Books.length +1};
        data.Books.push(newBook);
        return newBook;
    }
  }
};
