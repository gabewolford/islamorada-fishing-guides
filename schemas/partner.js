export default {
    name: 'partner',
    title: 'Partner',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'The name of the partner.',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        description: "The image of the partner\'s logo.",
      },
      {
        name: 'url',
        title: 'URL',
        type: 'url',
        description: 'The URL of the partner\'s website.',
      },
    ],
  };
  