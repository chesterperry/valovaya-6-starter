import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
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
            Последние публикации
          </h1>
			  {/* <div
          className="full-width-image-container margin-top-0 banner"
          style={{
            backgroundImage: `url('/img/sunset.jpg')`,
          }}
        >
         
        </div> */}
        <section className="section">
          <div className="container column is-10 is-offset-1">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
