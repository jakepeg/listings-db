const Nav = () => {

  return (
    <>
    <header>
      <img id="logo" src="/logo.svg" alt="DooZone logo" />
    </header>
    <style jsx>{`
      header {
        display: flex;
        padding: 20px 10px 0 10px;
        margin-bottom: 20px;
      }

      #logo {
        width: 70px;
      }
    `}</style>
    </>
  )
}

export default Nav