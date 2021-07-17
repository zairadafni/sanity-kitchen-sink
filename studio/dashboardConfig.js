export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60f31968d73ef73de6d83db7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-k2ezv6u9',
                  apiId: '7387c39e-9125-4374-b82b-f0262e0821d0'
                },
                {
                  buildHookId: '60f31968d262936439ea75ab',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-n2ni1o92',
                  apiId: '64339386-35c5-49d5-b2ec-d3e718b90066'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zairadafni/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-n2ni1o92.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
