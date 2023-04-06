import React from 'react';

const Header = () => {
    return (
<>
      <header>
        <section id="main_section">
          <div className="banner">
            <div className="container">
              <div className="headings">
                <h1 className="header1">
                  Nasza firma oferuje najwyżej jakości produkty.
                </h1>
                <h2 className="header2">Nie wierz nam na słowo - sprawdź</h2>
                <a href="#offer" className="button">oferta</a>
              </div>
            </div>
          </div>
        </section>
      </header>
      </>
    )
}
export default Header;