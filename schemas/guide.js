export default {
    name: 'guide',
    title: 'Guide',
    type: 'document',
    fields: [
        {
            name: 'first_name',
            title: 'First Name',
            type: 'string',
            description: 'The first of the guide',
        },
        {
            name: 'last_name',
            title: 'Last Name',
            type: 'string',
            description: 'The last name of the guide',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'string',
            description: 'Slug for url (<firstname-lastname>',
        },
        {
            name: 'featured_pic',
            title: 'Featured Pic',
            type: 'image',
            description: 'The image of the guide',
        },
        {
            name: 'gallery',
            title: 'Gallery',
            type: 'array',
            of: [
                { 
                    type: 'image',
                    options: {
                        hotspot: true,
                    }
                },
            ],
            options: {
                layout: 'list',
                sortable: true,
            }
        },
        {
            name: 'backcountry',
            title: 'Backcountry Guide',
            type: 'boolean',
            description: 'Does this guide fish the backcountry?',
        },
        {
            name: 'offshore',
            title: 'Offshore Guide',
            type: 'boolean',
            description: 'Does this guide fish offshore?',
        },
        {
            name: 'business_name',
            title: 'Business Name',
            type: 'string',
            description: 'The guide\'s boat or business name',
        },
        {
            name: 'about_me',
            title: 'About Me',
            type: 'string',
            description: 'The guide\'s bio, a few sentences or more',
        },
        {
            name: 'boats',
            title: 'Boat(s)',
            type: 'array',
            of: [{type: 'string'}],
            description: 'Length, make, model, and engine of boat',
        },
        {
            name: 'dock',
            title: 'Dock',
            type: 'string',
            description: 'The dock the guide charters from',
        },
        {
            name: 'specialty',
            title: 'Specialty',
            type: 'string',
            description: 'The guide\'s specialties (comma separated)',
        },
        {
            name: 'fun_fact',
            title: 'Fun Fact',
            type: 'string',
            description: 'A fun fact about the guide',
        },
        {
            name: 'days_off',
            title: 'On Days Off...',
            type: 'string',
            description: 'What the guide likes to do on their days off',
        },
    ],
  };
  