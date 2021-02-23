import React from "react"
import Navigation from "./navigation"
import "../styles/styles.scss"
import Banner from "./banner-desktop"
import Hero from "./hero"
import HomeInfo from "./home-info"
import Footer from "./footer"

const StyledLayout = {
  width: "100%",
  minHeight: "100vh",
  margin: "0 auto",
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
  gridTemplateColumns: "100%"
}


const LayoutHome = ({ children }) => {
  return (
    <div style={StyledLayout}>

      <Navigation />
     <Banner />
     
  <Hero />
<HomeInfo />
<Footer />
</div>
  )
}

export default LayoutHome