interface Collection_Item {
  id: number;
  name: string;
  url: string;
  idFsT: number;
}
interface Fashions_Item {
  id: number;
  name: string;
}

export const Data_Example = {
  Fashions_Type: [
    {
      id: 1,
      name: "Women",
    },
    {
      id: 2,
      name: "Men",
    },
    {
      id: 3,
      name: "Kid",
    },
  ] as Fashions_Item[],
  Collections: [
    {
      id: 1,
      name: "Fall clothing is coming",
      url: "/img/collections/1.jpg",
      idFsT: 1,
    },
    {
      id: 2,
      name: "Fall clothing is coming",
      url: "/img/collections/2.jpg",
      idFsT: 2,
    },
    {
      id: 3,
      name: "Fall clothing is coming",
      url: "/img/collections/3.jpg",
      idFsT: 1,
    },
    {
      id: 4,
      name: "Fall clothing is coming",
      url: "/img/collections/4.jpg",
      idFsT: 3,
    },
    {
      id: 5,
      name: "Fall clothing is coming",
      url: "/img/collections/5.jpg",
      idFsT: 2,
    },
    {
      id: 6,
      name: "Fall clothing is coming",
      url: "/img/collections/6.jpg",
      idFsT: 3,
    },
    {
      id: 7,
      name: "Fall clothing is coming",
      url: "/img/collections/7.jpg",
      idFsT: 2,
    },
    {
      id: 8,
      name: "Fall clothing is coming",
      url: "/img/collections/8.jpg",
      idFsT: 1,
    },
    {
      id: 9,
      name: "Fall clothing is coming",
      url: "/img/collections/9.jpg",
      idFsT: 2,
    },
  ] as Collection_Item[],
};
