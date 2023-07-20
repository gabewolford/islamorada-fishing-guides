export default {
    name: 'resort',
    title: 'Resort',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'The name of the resort',
      },
      {
        name: 'blurb',
        title: 'Blurb',
        type: 'string',
        description: 'One-liner about the resort',
      },
      {
        name: 'main_photo',
        title: 'Main Photo',
        type: 'image',
        description: "The image of the resort",
      },
      {
        name: 'logo',
        title: 'Logo',
        type: 'image',
        description: "The logo of the resort",
      },
      {
        name: 'url',
        title: 'URL',
        type: 'url',
        description: 'The URL of the resort\'s website.',
      },
    ],
  };