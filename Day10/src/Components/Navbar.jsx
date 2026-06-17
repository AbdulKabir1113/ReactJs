function Navbar({cartProducts}){
    return(
        <>
        <nav>
            <h3>Logo</h3>
            <p>Cart <sup>{cartProducts.length}</sup></p>
        </nav>
        </>
    )
}

export default Navbar