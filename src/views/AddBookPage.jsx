import Header from '../components/Header.jsx';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addBook} from '../store/booksSlice.js';

function AddBookPage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleAddBook(e) {
        e.preventDefault();

        const newBook = {
            title: document.querySelector('input[name=title]').value,
            cover: document.querySelector('input[name=cover]').value,
            isRead: false,
            author: document.querySelector('input[name=author]').value,
            synopsis: document.querySelector('textarea[name=synopsis]').value
        }

        if (newBook.title && newBook.cover && newBook.author) {
            dispatch(addBook(newBook));
            alert('Livro incluido com sucesso!');
            navigate("/");
        } else {
            alert('Por favor preencher os campos obrigatórios.');
        }

    }
    
    const pageTitle = "Adicionar 1 Livro";

    return (
      <>
        <div className="container">
            <Header pageTitle={pageTitle} />

            <form className="add-form">
                <div className="form-control">
                    <label>Título *</label>
                    <input type="text" name="title" placeholder="Titulo do livro" />
                </div>
                <div className="form-control">
                    <label>Capa do Livro *</label>
                    <input type="text" name="cover" placeholder="Capa" />
                </div>

                <div className="form-control">
                <label>Autor *</label>
                <input
                    type="text" name="author" placeholder="Autor" />
                </div>

                <div className="form-control">
                <label>Sinopse</label>
                <textarea
                    type="text" name="synopsis" placeholder="Informe a sinopse..." />
                </div>
                
                <button onClick={(e)=> handleAddBook(e)} className="btn btn-block">Salvar</button>
            </form>

        </div>

        
      </>
    )
  }
  
  export default AddBookPage
  