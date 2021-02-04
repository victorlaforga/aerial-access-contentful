import React from "react"
import Navigation from "./navigation"
import "../styles/styles.scss"
import Banner from "./banner-desktop"
import Hero from "./hero"

const StyledLayout = {
  width: "100%",
  minHeight: "100vh",
  margin: "0 auto",
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
  gridTemplateColumns: "100%"
}


const Layout = ({ children }) => {
  return (
    <div style={StyledLayout}>

      <Navigation />
     <Banner />
<main>
  <Hero />

</main>
    </div>
  )
}

export default Layout