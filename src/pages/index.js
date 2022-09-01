import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as styles from "../styles/index.module.scss"

const IndexPage = () => (
  <Layout>
    <div className={styles.index}>
      <h1>Insulin belongs to the people.</h1>

      <h2>A point-of-care insulin production system</h2>

      <h3>The current regulatory framework</h3>
      <p></p>

      <h2>Always open and transparent</h2>

      <h2>The road ahead</h2>
      <h3>Funding</h3>

      <h3>Funding</h3>
    </div>
  </Layout>
)
export const Head = () => <Seo title="Home" />

export default IndexPage
