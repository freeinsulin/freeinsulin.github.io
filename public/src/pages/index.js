import * as React from "react"

import * as styles from "../styles/notes.module.scss"
import Info from "../content/index.mdx"

require("katex/dist/katex.min.css")

const IndexPage = () => {
  return (
    <div className={styles.mainContainer}>
      <div>
        <h1>Free Insulin</h1>

        <Info />
      </div>
    </div>
  )
}

export default IndexPage
