import React from "react";

const speakers = [
  {
    name: "Алексей Некрасов",
    description:
      "Лидер направления Python в МТС, географический директор направления Python в Skillbox. Опыт работы — более 6 лет",
    image: "https://s3-alpha-sig.figma.com/img/9f59/0d76/03c51a85a891bb0c5f200701fd654017?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ewPpHc92ZVsHBA2wWIqGl0Jjh8hpVidseY4VdK3UicMwS8ph1J3PqKQAH24kFG0mcRtyYvPUE6sMeBb0QvznYcu4ZLhGeopI3Wx7vRfrGZu-I8HhBn0~ZnIkawjopraBizShGIEHtJ2kj617W1GgNu~oGE6hRLdW1i7kn85aW3H2a3h3RZjfDVPM-Zd1epS31ySkOdZHloXSmvh-pr5TROglRCoISNaXioMFVkE86PVvk41IngaHH45bsDJKCMM4i9qkbG4uHzNyuZJTOmxsHSrtnmoZCyJbZL6udGiJQnv1iAE8vkkpbE4z5BSRHt0yW1rkv5n7rrQiCDTEN3eMOQ__", // Rasm URL
  },
  {
    name: "Никита Нестеренко",
    description:
      "Руководитель проектов и главный инженер по разработке в Ozon. Опыт работы — более 5 лет",
    image: "https://s3-alpha-sig.figma.com/img/c3a1/d18c/a497af1a5bc43d53c2f399b2d9d5cc15?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ADiI1SzCAhG6l9gOXysa8JchIJUL4tNspmqunFBKWxSlL2YUxgXd5FH~knGE9v5f86wBFuSa~nmTNmY5dJ4GFrOIsbMVDm6gcaeTyeZVhRGs1PLZ899~8veP8lgjvTQYqgJ7WxvH4wlC0vWzQltu-TGWpw6Ttp~Ix~TrI5ah~hDbBs5ehdwz6NIct39XncL2wM~oori-8Yu2QvKC8-xtAAEgeQbO1X0pDzEL-kkmt0djL-fF9ut8ZME0fZus38XoUGWByTu8kkEROmpeq~87HHR5waYsBy2FQfNJ0~AQIJzN6DpPP5pfJ5dWgnIctmbrkWBMDA5rM~S560ox6OtXTA__",
  },
  {
    name: "Алексей Половинкин",
    description: "Python-разработчик компании АЛМИ. Опыт работы — более 7 лет",
    image: "https://s3-alpha-sig.figma.com/img/302a/7f95/96c55dbbb2c94994f59ac00ceb851a0d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LjQBnPqod-hssC74Wbly1AKv8V3kyJxAEwp5F49MdB65oeZuS16SmQn4YIlnFK-rC2iL8xjeffE38PFEKSpZrdWlwkdt92VzweD~AD4ej0Tscqg9NaqGpN3KxwjNyIg2xpGHwHTQl9LH~5MZfogdacpl5mb13I-4Z152Z~sqIh-jfsohM0l0gSU8le9rowENXbbwK0RBRgEcQvmpPKP9ffocRoqnNMaPgsrGR4XMtJIdZAn-Y4pqfpPlyZs2jkca-CL6Gst3j47s-dPvk~fsb9OmBKjben7nDC~tMZo7cQYVp5dQeBDIciXE7ttyK7XQY6de-oVct0NMaB3rEqya4w__",
  },
  {
    name: "Дмитрий Якин",
    description: "Инженер по тестированию в компании Яндекс",
    image: "https://s3-alpha-sig.figma.com/img/0a0f/0822/2a1e0dcc97c82a2533c283e254285532?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k4iP7jTKXE4v~qiJikyiaTiFPgR0cW6WK7H3kti~Nw9GVVb-jQHgQ8Ck~4vehZimq6O-CSH4bhhIJjbZnS3ugQQlb~spc59xbWEnpqamb9CYBooPwOA9O5u7-J~0YkhBIyyg1szcg7e3y9CfSJpdyNioy2Sv3sPSgUjLLhT51~s-6qhWHnpIqm~tyj420KSoqIPSNpG4ZaNZ7o5mV7bbChXvEto-VYENTwjmwfolW3Py8NmUjXEphSaDmarf~4qERNn1uzcl95-DkKgamjou-fOVxWS6wtY-6XwWM5KpIJqyZbuEtaFDOKCvqzzWNx94IRl4Hcx-ysgMlFjdb2xcww__",
  },
  {
    name: "Тимофей Тиунов",
    description:
      "Системный архитектор в СберМаркет. 10 лет занимается веб-разработкой",
    image: "https://s3-alpha-sig.figma.com/img/7b0f/9daa/9272640bb39365aff037039b1a4774c7?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lWbt7KJUwIRhpfJa~4xUEqTvhle8etSf9vF4uQFwb0fpkt9dW3wmytU5yesxfGg~h~SAJ0pYZ5mGkRTw9K0o-YCflgVH3-qCsJWBkwX4PMhdoNa40GosKXiL3CJwkuTvW955ed74KKMxNIpiNlFsaJMC7WZJWFQjb4w3jUMaehHLiawyU50pwQbqLWHRbiIN6ozAQirf6uFGgrwfDYKsHGd3smVs0Az5O9QQsN45QCch~YBxVn9jqrgooOtoTINUhaHvWqZgalF1xNSv~WvdbtZT691enV~OoK-pQjJoq4auFs0MEQflbfpS-uHPLRGrjf-1m2HPR0wBwTohVckJbg__",
  },
  {
    name: "Данил Пилипенко",
    description:
      "Java-программист с опытом работы 15 лет, директор центра по подбору персонала SymbioWay",
    image: "https://s3-alpha-sig.figma.com/img/4b23/809b/272e1c8ad77b37aefd079067e769bbe6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lEpubpECofLTOl9jXB11-LB0ebLxr-KSIaXySLuhQOJSEcezKr57Yp0zkEqqJGarIWraWHOdn7IjuMfHzVQTYvZ25lK7cXTCDtyZg~lnzy00LH88bJFVnFENPCp5-82cIxIO59MnhxTm5bB9UjIV1o3z5n40a-BjxfzM04l4hzF5~F1mOkBGVv~d-xjoxnTP6KulUeR6XLCK~YMOhYw53iuclJH3LsyR0vyjBGR400cG1ghywbcBOcWc~ewl959vh80RhzTqqy7d5jBDqBqv8hAUNVAVRGKM~DNWdgOi-ILF6e9mu~tp2I2u2k448HHcj3URGhMDhnF-fPO1QnK0vQ__",
  },
  {
    name: "Михаил Овчинников",
    description:
      "Разработчик социальная сеть для записи видео с опытом в IT более 15 лет",
    image: "https://s3-alpha-sig.figma.com/img/b618/cc8b/b14325887bf02e9b3bf6dadc3bb6bd54?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a-~8RuFwCJ1aexqOPV7ApjpFaaOFH6ts9qzr1rXOMTjVYiH2QnwhHbIIwzwc9dJOfpES0XOc~cdWf5ZVRIIAnBMmNu6zJB~jyItHlvY5cCR2iotmF6Mh~WxbeMi-Asvs3CI-LYCjqti-tVWi823mhC99F2lmPiXIpvChITOEeOR3aEI1xl3W2SPMwyEe50Tn~RARWTaqbi-mxg2J732DkxhhkNIPW9xo0XS6kWypa3bOCJI2n3dZ0wfBAd3CTQyv-bKCFn-PMt8xgzl8nIzsjuHrhl7zGPaTXOND3B2IfvLLYAuzyUtUdhzWHdmEivZww0YYAf0wg4CkkiXR89NL0Q__",
  },
  {
    name: "Глеб Михеев",
    description:
      "Технический директор Skillbox Holding. 19 лет в разработке",
    image: "https://s3-alpha-sig.figma.com/img/c38f/0d78/41747124c7574f01f82091a41075c221?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G~dUDAO~fYrh5EBHzj3GnMj4jVkTBxmiGFDFZ9Tn786DufRufvz4~zukuHbE94Ni8E0EsmI1~Kgf9j3EUMwfyhEF9aS8mvfJkK4udlNkFkmH5gkVWY6DVMzO54c~zze5bP-86Mn0AInMVfZGQcUhYc2GBvsrDhHFOoImt9JgXY7LQcyFjDSo1PQ8aX16iWluRbj6fiNXCtC20XnEj-O6zRYwRyJOpCdNVcCke0sF6fVnb-I-u9m68vDQUITK1Xzdubi8Kvdlwp9Su4NF0yZyHTbUPpHR8tUNmaivd0fxkrLTnsw-p22dTgSYR9Bo9KNGmzI2Dx-S0FYmYNLoMRO-0w__",
  },
  {
    name: "Сергей Корниенко",
    description:
      "Frontend Teamlead в Процед. Более 20 лет в разработке",
    image: "https://s3-alpha-sig.figma.com/img/da7a/3ab5/92795c236d6994b24484c6e7735e0f0c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qpvNDZJydJ2EGM9SSOtaNMNXCneAR835Lo7ZjJEA8TPfjLG-OO8hAeZP~h~~yKsZKRb6IkNJtFCIiyRjTD5n2Jc4748LvTieo4Hm~QnHdRLmxW7xNx0xnDrv7mvAqrSlrURTWQgwVIOQB8jfQtFHuGs7c1t5VFP86jTp~C7ntQmmATnCl3pMYW9Ok17KDbrrVwohQIFKaY7mg8LRlrhROfj6B3SDMjm2qcKeTlnD5HCs82~GTcVUay1j1JKqNA79P0crY0yu4T7qtYqsCdEmL~8-WpC5qM1m8SUCiHAR8JrWsyiiAk3B0Gn0gN-EURq6IlCNOUu4zGSf0iy29QYfzg__",
  },
  {
    name: "Игорь Боруянов",
    description: "Frontend Tech Lead в Miro",
    image: "https://s3-alpha-sig.figma.com/img/bc92/7e11/aa87f8e4497f63a46d32f3fd14faba6d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BTacWekR2z8qlzFNNh~orLQBp7HXekU-WNqIiroYcYKsYhkCgUYLD8AWWyb45jHSBVD78qCj7vKyWCutTqlE3MUb0NtVJlw5OEbT8v320vCjw4e9ryRIxWN0RPb9SBYjAC78L3NXZt-BoKgSHkF8jByirChOTy~jjaABqZDxsKreTljhcf5FEJhx3DRn3-N3Vc8iPeonibVmQ5v85o9yDm4IQb6sI2M1gHYDGczpTiBETj9EJB0txXWpIZU2tOFkl~OgyRyG74kGAwYdmQlv9xEQVzpnBtdx3l9oM~aFhB~NjH7-GuuRw0QeBS0w5PrB0olNSknQkbTS49XsOs6e8A__",
  },
  {
    name: "Алексей Авдеев",
    description:
      "CTO в дизайн-агентстве Meta. 10 лет в веб-разработке",
    image: "https://s3-alpha-sig.figma.com/img/dd37/ee8b/3017b62714acdb451bac9d9a181e9c1a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dP989lO~q~3fktCEC1sbev-t9iC6w9W-H1dgeeygmTpnDcxzYFgWBLEZQEuJ0qXLykKU18EyJbPsOxgTy3bNNlnf9QO7mAWVWZLFdngpNEOMkmI--Ac~ERZfrICeS5mXYImYXRc03E7WeCO7-P~81J3~I1YyKN5cU22PJVdp-Cc~otg3pkTtOaHRJQp78fF~vzGTBRG-dlA8NJROSS1pteUqwl3MXmxSfAcX1K4E~ImwNBVwa~Xx03s1GBHJGGPFp6umKL8gLT1TkfmUC49wF2om8MbsU6YAheMvrudHpYOeLOCKLYTk0Ic1cciCI~08qsr~Z6gdFFcriVwyqhiVvA__",
  },
  {
    name: "Александр Поздняков",
    description:
      "Angular Developer в InSales. Менее 10 лет в веб-разработке",
    image: "https://s3-alpha-sig.figma.com/img/2eb5/6c24/9af2917b757d08ebee233eae5975becc?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h86vgpfYO31jtWUql~j0HEs~AyhECss~prIjNQFG5voMzL~HRqNbGcJDRG9llxOGSWHQS661umcXWGhG50IQldz4AGALbX2tRfc4CZEixOrKyG16oun1EJO8i2DfCfW4yq7n6N5elhc~oDtvLGr7ugqOJQcaJZBpST8~8ArnXOU2JnztOB~Xs0v9mItEIzLWsUWVEfA~b~vAJvKhMtBYQNf6CDfoQSMYzTsyLG1Rw9WRTG~RqD~t92SnZpcIYx5PBvzdhH1MMzoAUl7Iulc0bZcjHh7KiQyNMqSdf52ZaaxBc1XKtK1no6C1xzimAXyE~ndAzJ79St2Fizc3sjR9CQ__",
  },
];

const App = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Спикеры</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {speakers.map((speaker, index) => (
          <div key={index} className="text-center">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-full max-w-[200px] mx-auto mb-4"
            />
            <h2 className="font-semibold">{speaker.name}</h2>
            <div className="flex flex-col items-center mt-2">
              <hr className="w-40 border-t border-gray-500 mb-2" />
              <p className="text-gray-600 text-sm">{speaker.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
