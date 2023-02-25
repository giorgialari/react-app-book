import React, { Component } from 'react'
import '../../css/booklist/booklist.css'
import Modal from './Modal'

class Booklist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: 'Ceh',
      books: { items: [] },
      visible: { display: 'block' },
      showModal: 0
    }
  }
  fetchBooks = () => {
    const API = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}`;
    fetch(API)
      .then(r => r.json())
      .then(r => {
        this.setState({ books: r })
        console.log(`Recupero dati ${JSON.stringify(this.state.books)}`)
      })
      .catch((error) => {
        console.log('Fetch faiiled', error)
      })
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.fetchBooks();
    this.setState({
      visible: {
        display: 'none'
      }
    })

  }
  onInputChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }
  hideModal = () => {
    this.setState({ showModal: 0 })
  }
  getModal = value => {
    this.setState({ showModal: value })
  }
  render() {
    return (
      <React.Fragment>
        <div className='container-fluid codrops-header'>
          <section className='text-center'>
            <h2 style={{ color: 'black'}}>Search for books</h2>
            <form className='form-inline' onSubmit={this.onSubmitHandler}>
              <div className="form-group d-flex" style={{ margin: ' 30px auto', maxWidth: '500px'}}>
                <input
                  className='form-control'
                  type="search"
                  placeholder="book title..."
                  value={this.searchTerm}
                  onChange={this.onInputChange}

                />
                <button style={{ padding: '8px 15px', borderRadius: '5px' }} className='btn btn-warning' type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </form>
          </section>
        </div>
        <div className="main" style={{ marginTop: '10px' }}>
          <div className="bookshelf" id='bookshelf'>
            <div style={this.state.visible} className="search-icon" data-reactid=".0.1.0.0">
              <i className="fas fa-search"></i>
            </div>

            {
              this.state.books.items.map((book, index) => {
                const background = `http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`;
                return (
                  <figure key={index} className='details-open'>
                    <Modal show={this.state.showModal === book.id} onHide={() => this.hideModal(book.id)} title={book.volumeInfo.title} descr={book.volumeInfo.description} pag={book.volumeInfo.pageCount} />
                    <div className="perspective">
                      <div className="book">
                        <div className="cover">
                          <div className="front" style={{ background: "url(" + background + ") 0% 0% /100% 100% no-repeat", border: "2px solid rgb(238,238238)", width: '170px', height: '240px' }}>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="buttons">
                      <button onClick={() => this.getModal(book.id)} style={{ padding: '3px', borderRadius: '5px' }} className='btn btn-warning btn-sm'>Dettagli</button>
                      <a href={book.volumeInfo.infoLink}>Preview</a>
                    </div>
                    <figcaption>
                      <h2>
                        <span>
                          {book.volumeInfo.title}
                        </span>
                        <span>
                          {book.volumeInfo.authors}
                        </span>
                        <span>
                          {book.volumeInfo.publishedDate}
                        </span>

                      </h2>
                    </figcaption>
                  </figure>

                )
              })
            }

          </div>

        </div>
      </React.Fragment>

    )
  }
}

export default Booklist