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
      productName: 'Dare it!, 2022, Acrylic on Canvs',
      productPrice: '1,230',
      description:
        'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control',
      isOff: true,
      offPercentage: 10,
      productImage: require('../database/images/painting/painting6.jpg'),
      isAvailable: true,
      productImageList: [
        require('../database/images/painting/painting3.jpg'),
        require('../database/images/painting/painting8.jpg'),
        require('../database/images/painting/painting1.png'),
      ],
    },
    {
      id: 2,
      category: 'product',
      productName: 'Killing me softly,  2021 Nikolaos, spain Acrylic on canvas',
      productPrice: '1,499',
      description:
        'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically designed to meet the needs of music lovers.',
      isOff: false,
      productImage: require('../database/images/painting/painting3.jpg'),
      isAvailable: true,
      productImageList: [
        require('../database/images/painting/painting4.jpg'),
        require('../database/images/painting/painting5.jpg'),
        require('../database/images/painting/painting2.jpg'),
      ],
    },
    {
      id: 3,
      category: 'accessory',
      productName: 'boAt Airdopes 441',
      productPrice: '1,999',
      description:
        'Bluetooth: It has Bluetooth v5.0 with a range of 10m and is compatible with Android & iOS',
      isOff: true,
      offPercentage: 18,
      productImage: require('../database/images/sculpture/sculpture8.jpg'),
      isAvailable: true,
      productImageList: [
        require('../database/images/sculpture/sculpture3.jpg'),
        require('../database/images/sculpture/sculpture7.jpg'),
        require('../database/images/sculpture/sculpture.png'),
      ],
    },
    {
      id: 4,
      category: 'accessory',
      productName: 'boAt Bassheads 242',
      productPrice: '399',
      description:
        'Fly into your workouts with precise tones that inspire and energize your system with its HD sound, all the time.',
      isOff: false,
      productImage: require('../database/images/sculpture/sculpture1.jpg'),
      isAvailable: true,
      productImageList: [
        require('../database/images/sculpture/sculpture2.jpg'),
        require('../database/images/sculpture/sculpture4.jpg'),
        require('../database/images/sculpture/sculpture5.jpg'),
      ],
    },
    
    {
      id: 5,
      category: 'accessory',
      productName: 'boAt Rockerz 255 Pro+',
      productPrice: '1,499',
      description:
        'The unbeatable boAt signature sound shines through no matter what are you playing courtesy its 10mm drivers.',
      isOff: false,
      productImage: require('../database/images/painting/painting8.jpg'),
      isAvailable: false,
      productImageList: [
        require('../database/images/painting/painting8.jpg'),
        require('../database/images/painting/painting8.jpg'),
        require('../database/images/painting/painting8.jpg'),
      ],
    },
    {
      id: 6,
      category: 'accessory',
      productName: 'Boult Audio AirBass Propods TWS',
      productPrice: '1,299',
      description:
        'One Touch Control & Voice Assistant: With one multifunction button, you can play/pause, previous/next track and answer/hang-up calls.Voice assistant function lets you access siri/Google Assistant',
      isOff: false,
      productImage: require('../database/images/painting/painting8.jpg'),
      isAvailable: true,
      productImageList: [
        require('../database/images/painting/painting8.jpg'),
        require('../database/images/painting/painting8.jpg'),
        require('../database/images/painting/painting8.jpg'),
      ],
    },
  ];