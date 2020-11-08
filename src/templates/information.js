import React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

class Information extends React.Component {
	render() {
		const { data } = this.props;
		const { edges: posts } = data.allMarkdownRemark;

		return (
			<Layout>
               <h1
            className="has-text-weight-bold is-size-2 has-text-centered"
            style={{
            //   boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
            //   backgroundColor: '#f40',
            //   color: 'white',
              padding: '1rem',
            }}
          >
            Информация
          </h1>
			  {/* <div
          className="full-width-image-container margin-top-0 banner"
          style={{
            backgroundImage: `url('/img/sunset.jpg')`,
          }}
        >
         
        </div> */}
				<section className="section">
					<div className="container">
						<div className="content">
							<div className="columns is-multiline">
								{posts &&
									posts.map(({ node: post }) => (
										<div className="is-parent column is-4" key={post.id}>
										<article
                className={`tile is-child box notification card ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className="card-image">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="post-meta pt-3 pb-3">
                    <Link
                      className="title has-text-primary is-size-5 "
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="subtitle is-size-6 is-block">
                      {post.frontmatter.date}
                    </span>
                  </p>
                </header>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    Читать дальше →
                  </Link>
                </p>
              </article>
										</div>
									))}
							</div>
						</div>
					</div>
				</section>
			</Layout>
		);
	}
}

export default Information;

export const InformationQuery = graphql`
	query InformationPage {
		allMarkdownRemark(
			sort: { order: ASC, fields: frontmatter___postindex }
			filter: { frontmatter: { tags: { eq: "информация" } } }
		) {
			edges {
				node {
					excerpt(pruneLength: 150)
					id
					fields {
						slug
					}
					frontmatter {
						title
						templateKey
						date(formatString: "DD MMMM YYYY", locale: "ru")
						featuredpost
						featuredimage {
							childImageSharp {
								fluid(maxWidth: 400, quality: 70) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
	}
`;
