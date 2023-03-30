export const COLOURS = {
  white: '#ffffff',
  black: '#000000',
  green: '#00AC76',
  red: '#C04345',
  blue: '#0043F9',
  backgroundLight: '#F0F0F3',
  backgroundMedium: '#B9B9B9',
  backgroundDark: '#777777',
};

export const Items = [
  {
    id: 1,
    category: 'product',
    productName: 'Fabric Painting Designs Ideas in Fashion Design - Hamstech',
    productPrice: '2,000',
    description:
      'Painting techniques make stunning creativeness which is made by the depth of hue and shades or the creativity of the textures formed.',
    isOff: true,
    offPercentage: 10,
    productImage: require('../database/images/painting/painting1.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/painting/painting3.jpg'),
      require('../database/images/painting/painting6.jpg'),
      require('../database/images/painting/p3.jpg'),

    ],
  },
  {
    id: 2,
    category: 'product',
    productName: 'Fabric Painting Designs Ideas in Fashion Design - Hamstech',
    productPrice: '2,000',
    description:
      'Painting techniques make stunning creativeness which is made by the depth of hue and shades or the creativity of the textures formed.',
    isOff: false,

    productImage: require('../database/images/painting/painting8.jpg'),
    isAvailable: true,
    productImageList: [

      require('../database/images/painting/p10.jpg'),
      require('../database/images/painting/painting4.jpg'),
      require('../database/images/painting/painting5.jpg'),
      require('../database/images/painting/painting2.jpg'),
      require('../database/images/painting/painting3.jpg'),
      require('../database/images/painting/painting8.jpg'),
      require('../database/images/painting/painting1.png'),
      require('../database/images/painting/p1.jpg'),
      require('../database/images/painting/p2.jpg'),
      require('../database/images/painting/p3.jpg'),
      require('../database/images/painting/p4.jpg'),
      require('../database/images/painting/p5.jpg'),
      require('../database/images/painting/p6.jpg'),
      require('../database/images/painting/p8.jpg'),
    ],
  },

   /* ----------------------------------------------- Sculpture DataGet ------------------------------*/

  {
    id: 3,
    category: 'sculpture',
    productName: 'ArtWork Sculpture',
    productPrice: '3,000',
    description:
      'Sculpture techniques make stunning creativeness which is made by the depth of hue and shades or the creativity of the textures formed.',
    isOff: true,
    offPercentage: 18,
    productImage: require('../database/images/sculpture/s2.jpg'),

    isAvailable: true,
    productImageList: [

      require('../database/images/sculpture/sculpture3.jpg'),
      require('../database/images/sculpture/sculpture7.jpg'),
      require('../database/images/sculpture/s1.jpg'),

    ],
  },

  {
    id: 4,
    category: 'sculpture',
    productName: 'ArtWork Sculpture',
    productPrice: '3,000',
    description:
      'Hands of sculptor and hammer detail while carving.',

    isOff: false,
    productImage: require('../database/images/sculpture/s6.jpg'),
    isAvailable: true,
    productImageList: [

      require('../database/images/sculpture/sculpture2.jpg'),
      require('../database/images/sculpture/s1.jpg'),
      require('../database/images/sculpture/s3.jpg'),
      require('../database/images/sculpture/s4.jpg'),
      require('../database/images/sculpture/s5.jpg'),
      require('../database/images/sculpture/s6.jpg'),
      require('../database/images/sculpture/s7.jpg'),
      require('../database/images/sculpture/s8.jpg'),

    ],
  },

   /* ----------------------------------------------- Textile DataGet ------------------------------*/
  {
    id: 5,
    category: 'textile',
    productName: 'ArtWork Textile',
    productPrice: '4,000',
    description:
      'Textile techniques make stunning creativeness which is made by the depth of hue and shades or the creativity of the textures formed.',
    isOff: true,
    offPercentage: 20,
    productImage: require('../database/images/textile/textile3.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/textile/textile3.jpg'),
      require('../database/images/textile/textile4.jpg'),
      require('../database/images/textile/textile5.jpg'),
    ],
  },

  {
    id: 6,
    category: 'textile',
    productName: 'ArtWork Textile',
    productPrice: '4,000',
    description:
      'Texttile techniques make stunning creativeness which is made by the depth of hue and shades or the creativity of the textures formed.',
    isOff: false,
    productImage: require('../database/images/textile/textile1.jpg'),
    isAvailable: false,
    productImageList: [
      require('../database/images/textile/textile2.jpg'),
      require('../database/images/textile/textile3.jpg'),
      require('../database/images/textile/textile4.jpg'),
      require('../database/images/textile/textile5.jpg'),
    ],
  },

   /* ----------------------------------------------- Photography DataGet ------------------------------*/

  {
    id: 7,
    category: 'photography',
    productName: 'ArtWork Photography',
    productPrice: '5,000',
    description:
      'Photography techniques make stunning creativeness which is made by the depth of hue and shades or the creativity of the textures formed.',
    isOff: true,
    offPercentage: 25,
    productImage: require('../database/images/photography/photo1.jpg'),
    isAvailable: true,
    productImageList: [

      require('../database/images/photography/photo2.jpg'),
      require('../database/images/photography/photo3.jpg'),
      require('../database/images/photography/photo4.jpg'),
      require('../database/images/photography/photo5.jpg'),
      require('../database/images/photography/photo6.jpg'),
    ],
  },

  {
    id: 8,
    category: 'photography',
    productName: 'ArtWork Photography',
    productPrice: '5,000',
    description:
      'Photography techniques make stunning creativeness which is made by the depth of hue and shades or the creativity of the textures formed.',
    isOff: false,
    productImage: require('../database/images/photography/photo5.jpg'),
    isAvailable: false,
    productImageList: [
      require('../database/images/photography/photo5.jpg'),
      require('../database/images/photography/photo6.jpg'),
    ],
  },

   /* ----------------------------------------------- Digital DataGet ------------------------------*/

  {
    id: 9,
    category: 'digital',
    productName: 'ArtWork Digitals',
    productPrice: '6,000',
    description:
      'Printing workshop with printing tool and color for screen printing.',
    isOff: true,
    productImage: require('../database/images/digital/dig1.jpg'),
    isAvailable: true,
    offPercentage: 30,
    productImageList: [
    
      require('../database/images/digital/dig4.jpg'),
      require('../database/images/digital/dig5.jpg'),
      require('../database/images/digital/dig6.png'),
    ],
  },

  {
    id: 10,
    category: 'digital',
    productName: 'ArtWork Digital',
    productPrice: '6,000',
    description:
      'Printing workshop with printing tool and color for screen printing.',
    isOff: false,
    productImage: require('../database/images/digital/dig5.jpg'),
    isAvailable: false,
    productImageList: [
      require('../database/images/digital/dig2.jpg'),
      require('../database/images/digital/dig3.jpg'),
      require('../database/images/digital/dig4.jpg'),
      require('../database/images/digital/dig5.jpg'),
      require('../database/images/digital/dig6.png'),
    ],
  },
  
   /* ----------------------------------------------- Drawing DataGet ------------------------------*/

  {
    id: 11,
    category: 'drawing',
    productName: 'ArtWork Drawing',
    productPrice: '7,000',
    description:
      'Printing workshop with printing tool and color for screen printing.',
    isOff: true,
    productImage: require('../database/images/drawing/draw4.jpg'),
    isAvailable: true,
    offPercentage: 35,
    productImageList: [
      require('../database/images/drawing/draw4.jpg'),
      require('../database/images/drawing/draw5.jpg'),
      require('../database/images/drawing/draw6.jpg'),
    ],
  },

  {
    id: 12,
    category: 'drawing',
    productName: 'ArtWork Drawing',
    productPrice: '7,000',
    description:
      'Drawing ArtWork techniques make stunning creativeness which is made by the depth of hue and shades or the creativity of the textures formed.',
    isOff: false,
    productImage: require('../database/images/drawing/draw2.jpg'),
    isAvailable: false,
    productImageList: [
      require('../database/images/drawing/draw2.jpg'),
      require('../database/images/drawing/draw3.jpg'),
      require('../database/images/drawing/draw4.jpg'),
      require('../database/images/drawing/draw5.jpg'),
      require('../database/images/drawing/draw6.jpg'),
    ],
  },

   /* ----------------------------------------------- Paper DataGet ------------------------------*/

  {
    id: 13,
    category: 'paper',
    productName: 'ArtWork Work On Paper',
    productPrice: '8,000',
    description:
      'Paper ArtWork techniques make stunning creativeness which is made by the depth of hue and shades or the creativity of the textures formed.',
    isOff: true,
    offPercentage: 40,
    productImage: require('../database/images/paper/w6.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/paper/w2.jpg'),
      require('../database/images/paper/w3.jpg'),
      require('../database/images/paper/w4.jpg'),

    ],
  },

  {
    id: 14,
    category: 'paper',
    productName: 'Work On Paper',
    productPrice: '8000',
    description:
      'Paper ArtWork techniques make stunning creativeness which is made by the depth of hue and shades or the creativity of the textures formed.',
    isOff: false,
    productImage: require('../database/images/paper/w5.jpg'),
    isAvailable: false,
    productImageList: [
      require('../database/images/paper/w6.jpg'),
      require('../database/images/paper/w7.jpg'),
      require('../database/images/paper/w8.jpg'),
      require('../database/images/paper/w9.jpg'),
      require('../database/images/paper/w10.jpg'),
      require('../database/images/paper/w11.jpg'),
      require('../database/images/paper/w12.jpg'),
    ],
  },

   /* ----------------------------------------------- Printing DataGet ------------------------------*/

  {
    id: 15,
    category: 'print',
    productName: 'Print',
    productPrice: '9,000',
    description:
      'Printing workshop with printing tool and color for screen printing.',
    isOff: true,
    productImage: require('../database/images/print/pr5.jpg'),
    isAvailable: true,
    offPercentage: 45,
    productImageList: [
      require('../database/images/print/pr4.jpg'),
      require('../database/images/print/pr2.jpg'),
      require('../database/images/print/pr3.jpg'),
    ],
  },

  {
    id: 16,
    category: 'print',
    productName: 'Print',
    productPrice: '10,000',
    description:
      'Printing workshop with printing tool and color for screen printing.',
    isOff: false,
    productImage: require('../database/images/print/pr7.jpg'),
    isAvailable: false,
    productImageList: [
      require('../database/images/print/pr6.jpg'),
      require('../database/images/print/pr7.jpg'),
      require('../database/images/print/pr8.jpg'),
      require('../database/images/print/pr9.jpg'),
      require('../database/images/print/pr10.jpg'),
      require('../database/images/print/pr11.jpg'),
      require('../database/images/print/pr12.jpg'),
      require('../database/images/print/pr13.jpg'),
      require('../database/images/print/pr14.jpg'),
    ],
  },
];