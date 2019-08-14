import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from 'components/Layout'
import Content from 'components/Content';
import SEO from 'components/Seo';
import Social from 'components/Social';

const IndexPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            descriptionEn
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO lang="en" title={site.siteMetadata.title} description={site.siteMetadata.descriptionEn} />
      <Social />
      <Content>
        <p><small><a href="/" title="Ver em português">Ver em português</a></small></p>

        <h1>Hi... <span className="small" role="img" aria-label="Emoji showing tongue">😜</span></h1>

        <p>{site.siteMetadata.descriptionEn}</p>

        <p>Currently, I'm a Developer at <a href="https://cubo.network/jobs" target="_blank" rel="noopener noreferrer" title="Ver">Cubo Itaú</a> and
        I've created the <a href="https://github.com/frontendbr" target="_blank" rel="noopener noreferrer" title="Ver">Front-end BR</a> organization on Github. I'm also a founder of Meetup CSS and I helped in organization of
        Conferência CSS Brasil 2015.</p>

        <p>I've been creating a lot of open-source projects in
        the last years, like:</p>

        <ul>
          <li><a href="https://github.com/frontendbr" target="_blank" rel="noopener noreferrer" title="View Front-end BR">Front-end BR</a></li>
          <li><a href="https://github.com/felipefialho/css-components" target="_blank" rel="noopener noreferrer" title="View CSS Components">CSS Components</a></li>
          <li><a href="https://github.com/felipefialho/frontend-challenges" target="_blank" rel="noopener noreferrer" title="View Front-end Challenges">Front-end Challenges</a></li>
          <li><a href="https://github.com/felipefialho/kratos-boilerplate" target="_blank" rel="noopener noreferrer" title="View Kratos Boilerplate">Kratos Boilerplate</a></li>
          <li><a href="https://github.com/felipefialho/piano" target="_blank" rel="noopener noreferrer" title="View Piano">Piano</a></li>
          <li><a href="https://github.com/felipefialho/despolitizador" target="_blank" rel="noopener noreferrer" title="View Despolitizador">Despolitizador</a></li>
          <li><a href="https://survey.frontendbr.com.br" target="_blank" rel="noopener noreferrer" title="View Survey">Survey</a></li>
        </ul>
      </Content>
    </Layout>
  )
}

export default IndexPage
