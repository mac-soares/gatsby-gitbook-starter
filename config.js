const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://proofmarked.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: './src/components/images/logo.svg',
    logoLink: 'https://proofmarked.com',
    title:
      "<a href='https://hasura.io/learn/'><img class='img-responsive' src='./src/components/images/logo.svg' alt='Proofmarked' /></a>",
    githubUrl: 'https://github.com/hasura/gatsby-gitbook-boilerplate',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/hasurahq" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discordapp.com/invite/hasura" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
  },
  siteMetadata: {
    title: 'Proofmarked',
    description: 'Documentation built with mdx.',
    ogImage: null,
    docsLocation: 'https://proofmarked.com',
    favicon: './src/components/images/favicon.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Proofmarked',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
