import Link from "next/link";
import Router from "next/router";

class Header extends React.Component {
  state = {
    keyword: "",
    searchInput: false
  };
  render() {
    return (
      <>
        <div id="header">
          <div id="header-top">
            <div id="home">
              <div id="home-title">
                <Link href="/">
                  <a>Build my Dreams with Codes</a>
                </Link>
              </div>
              <div id="home-title-sm">
                <Link href="/">
                  <a>BDC</a>
                </Link>
              </div>
            </div>
            <div id="menu">
              <Link href="/about">
                <a id="menu-about">About</a>
              </Link>

              <i
                id="search-button-sm"
                className="fa fa-search"
                onClick={this._toggleSearchInput}
              />

              <div id="search-container-id" className="search-container">
                <span className="icon">
                  <i className="fa fa-search" />
                </span>
                <input
                  id="search"
                  type="text"
                  value={this.state.keyword}
                  onChange={this._handleKeyword}
                  onKeyPress={this._handlePress}
                />
              </div>

              <div id="menu-button" onClick={() => this.props._setShowing()}>
                <i className="fas fa-bars" />
              </div>
            </div>
          </div>
          {this.state.searchInput ? (
            <div id="header-bottom">
              <div className="search-container">
                <span className="icon">
                  <i className="fa fa-search" />
                </span>
                <input
                  id="search"
                  type="text"
                  value={this.state.keyword}
                  onChange={this._handleKeyword}
                  onKeyPress={this._handlePress}
                />
              </div>
            </div>
          ) : null}
        </div>
        <style jsx>
          {`
            #menu-button {
              display: none;
            }
            #header #home-title {
              display: inline-block;
            }
            #header #home-title-sm {
              display: none;
            }
            #header {
              grid-area: header;
              background-color: #343d46;
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
                0 6px 20px 0 rgba(0, 0, 0, 0.19);
              z-index: 20;
            }

            #header-top {
              display: flex;
              justify-content: space-between;
              align-items: center;
              height: 72px;
            }

            .make-fixed {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
            }

            #header #home-title a {
              font-size: 1.2rem;
              font-weight: bold;
              text-decoration: none;
              color: #eee;
              margin: 0 10px;
              padding: 15px;
            }

            #header #home-title:hover a {
              cursor: pointer;
              color: #fff;
            }

            #header #home-title-sm a {
              font-size: 1.2rem;
              font-weight: bold;
              text-decoration: none;
              color: #eee;
              margin: 0 10px;
              padding: 15px;
            }

            #header #home-title-sm:hover a {
              cursor: pointer;
              color: #fff;
            }

            #header a#menu-about {
              display: inline-block;
              text-decoration: none;
              color: #eee;
              padding: 15px;
              -webkit-border-radius: 5px;
              -moz-border-radius: 5px;
              border-radius: 5px;
            }

            #header a#menu-about:hover {
              background-color: white;
              transition: 0.2s;
              cursor: pointer;
              color: #000;
              border-bottom: 4px solid #aaa;
              padding: 15px 15px 11px 15px;
            }

            #search-button-sm {
              color: #4f5b66;
              margin: 0px 10px;
              padding: 20px 15px 19px 15px;
              -webkit-border-radius: 5px;
              -moz-border-radius: 5px;
              border-radius: 5px;
            }

            #search-button-sm:hover {
              background-color: white;
              transition: 0.2s;
              cursor: pointer;
              color: #000;
              border-bottom: 4px solid #aaa;
              padding: 20px 15px 15px 15px;
            }

            #header a#home-title:hover {
              background-color: unset;
              color: #fff;
              transition: 0.2s;
            }

            .search-container {
              display: inline-block;
              vertical-align: middle;
              white-space: nowrap;
              position: relative;
              padding: 10px;
            }

            .search-container input#search {
              width: 20px;
              height: 50px;
              background: #2b303b;
              border: none;
              font-size: 1rem;
              float: left;
              color: #262626;
              padding-left: 35px;
              -webkit-border-radius: 5px;
              -moz-border-radius: 5px;
              border-radius: 5px;
              color: #2b303b;

              -webkit-transition: width 0.55s ease;
              -moz-transition: width 0.55s ease;
              -ms-transition: width 0.55s ease;
              -o-transition: width 0.55s ease;
              transition: width 0.55s ease;
            }

            .search-container input#search::-webkit-input-placeholder {
              color: #65737e;
            }

            .search-container input#search:-moz-placeholder {
              /* Firefox 18- */
              color: #65737e;
            }

            .search-container input#search::-moz-placeholder {
              /* Firefox 19+ */
              color: #65737e;
            }

            .search-container input#search:-ms-input-placeholder {
              color: #65737e;
            }

            .search-container .icon {
              position: absolute;
              margin-left: 20px;
              margin-top: 15px;
              z-index: 1;
              color: #4f5b66;
            }

            .search-container:hover .icon,
            .search-container input#search:focus .icon,
            .search-container input#search:active .icon {
              margin-top: 17px;
              color: #93a2ad;

              -webkit-transform: scale(1.5); /* Safari and Chrome */
              -moz-transform: scale(1.5); /* Firefox */
              -ms-transform: scale(1.5); /* IE 9 */
              -o-transform: scale(1.5); /* Opera */
              transform: scale(1.5);
            }

            .search-container input#search:focus,
            .search-container input#search:active {
              outline: none;
              width: 150px;
              padding-left: 50px;
              color: white;
            }

            .search-container:hover input#search {
              width: 150px;
              padding-left: 50px;
              color: white;
            }

            .search-container:hover .icon {
              color: #93a2ad;
            }
            #header-bottom,
            #search-button-sm {
              display: none;
            }
            @media (max-width: 576px) {
              #menu-button {
                display: inline-block;
                color: #eee;
                margin-right: 10px;
                padding: 15px;
                -webkit-border-radius: 5px;
                -moz-border-radius: 5px;
                border-radius: 5px;
              }
              #menu-button:hover {
                background-color: white;
                transition: 0.2s;
                cursor: pointer;
                color: #000;
                border-bottom: 4px solid #aaa;
                padding: 15px 15px 11px 15px;
              }
              #header #home-title {
                display: none;
              }
              #header #home-title-sm {
                display: inline-block;
              }
              #search-container-id {
                display: none;
              }
              #search-button-sm {
                display: inline-block;
              }
              #header-bottom {
                display: block;
              }
              .search-container {
                padding-top: 0px;
              }
              .search-container input#search {
                width: 200px;
                padding-left: 50px;
                color: white;
              }
              .search-container:hover input#search {
                width: 200px;
                padding-left: 50px;
                color: white;
              }
              .search-container input#search:focus,
              .search-container input#search:active {
                outline: none;
                width: 200px;
                padding-left: 50px;
                color: white;
              }
            }
          `}
        </style>
      </>
    );
  }
  _handleKeyword = event => {
    this.setState({
      keyword: event.target.value
    });
  };
  _handlePress = event => {
    if (event.key === "Enter") {
      event.preventDefault();
      Router.push(`/search?keyword=${event.target.value}`);
    }
  };
  _toggleSearchInput = () => {
    this.setState({
      searchInput: !this.state.searchInput
    });
  };
}

export default Header;
