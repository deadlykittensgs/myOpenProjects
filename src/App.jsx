import Footer from "./Components/Footer"
import Header from "./Components/Header"
import RowOne from "./Components/RowOne"
import RowThree from "./Components/RowThree"
import RowTwo from "./Components/RowTwo"
import React from "react"

export default function App() {


  return(
    <div className="flex flex-1 flex-col bg-red-300 h-lvh">
    <Header/>
    <section className=" flex flex-1 justify-between">
    <RowOne/>
    <RowTwo/>
    <RowThree/>
    </section>
    <Footer/>
   </div>
  )


}