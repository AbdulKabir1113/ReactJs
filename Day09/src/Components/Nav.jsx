function Nav({ CartProducts }) {
  return (
    <>
      <nav>
        <h2>Logo</h2>
        <h2>Cart {CartProducts.length}</h2>
      </nav>
    </>
  )
}

export default Nav