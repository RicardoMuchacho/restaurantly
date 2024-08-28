import 'bootstrap-icons/font/bootstrap-icons.css'

const Footer = () => {
  return (
    <footer style={{ position: 'fixed', bottom: 0, left: 0 }} className="footer w-100 p-4 bg-dark-subtle">
      <div className="d-flex flex-column flex-sm-row gap-1 gap-sm-5 justify-content-center">
        <a className='footer-link text-center' target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/ricardo-muchacho-8400171b5/'><i className="bi bi-linkedin" style={{ marginRight: 5 }}></i>Ricardo Muchacho</a>
        <a className='footer-link text-center' target="_blank" rel='noreferrer' href='mailto:ricardomuchacho.developer@gmail.com'><i className="bi bi-envelope"></i> ricardomuchacho.developer@gmail.com</a>
        <a className='footer-link text-center' target="_blank" rel='noreferrer' href='https://github.com/RicardoMuchacho/restaurantly'><i className="bi bi-github"></i> Github</a>
      </div>
    </footer>
  )
}

export default Footer
