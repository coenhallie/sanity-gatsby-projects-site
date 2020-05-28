export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ecf41a6ff23be80cfe26918',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-projects-site-studio',
                  apiId: '8bc61ecc-c920-47c2-ad33-a4f2cbdc8bfc'
                },
                {
                  buildHookId: '5ecf41a6f944647e13f65dd8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-projects-site',
                  apiId: 'c86801b0-1273-447d-a666-394e1d59d8ae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/coenhallie/sanity-gatsby-projects-site',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-projects-site.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
