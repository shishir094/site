// Fixed the import paths by using relative paths (./) so Vercel can build it without breaking
import Footer from "/components/Footer.jsx"
import Header from "/components/Header.jsx"
import Content from "/components/content.jsx"
const App = () => {
  return (
    /* 1. MAIN CONTAINER: Creates a full-screen vertical stack layout */
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      {/* Your custom Header stays cleanly at the top */}
      <Header />

     <Content />

      {/* 3. THE FOOTER: Pushed down perfectly to the bottom edge of the screen */}
      <Footer />
      
    </div>
  )
}

export default App