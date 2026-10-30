const InlineStyle = () => {
   // React inline styles are JavaScript objects, so CSS property names use camelCase.
   const styles = { color: "white", backgroundColor: "teal", padding: "2rem" }

   return (
      <section>
         <h1 style={styles}>Inline Style</h1>
      </section>
   )
}

export default InlineStyle
