module.exports = {
  title: 'Chatbot AI',
  description: 'Canada Games & Brock University Chatbot Project',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      {
        text: 'More',
        ariaLabel: 'more',
        items: [
          {
            text: 'Use',
            items: [
              {
                text: 'Deploy',
                link: '/use/deploy.html'
              },
              {
                text: 'Development',
                link: '/use/dev.html'
              }
            ]
          },
          {
            text: 'Development',
            items: [
              {
                text: 'Train Data',
                link: '/dev/train-data.html'
              },
              {
                text: 'Hook',
                link: '/dev/hook.html'
              }
            ]
          },
          {
            text: 'API',
            items: [
              {
                text: 'Chatbot Api',
                link: '/api/chat.html'
              }
            ]
          },
          {
            text: 'Code',
            items: [
              {
                text: 'Open Source',
                link: '/code/open-source.html'
              }
            ]
          }
        ]
      },
      { text: 'Github', link: 'https://github.com/COSC-4P02' }
    ]
  }
}