import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="container aboutPage">
        <div className="row">
          <div className="col s12">
            <div className="card">
              <div className="card-image">
                <img
                  src="https://filearchive.cnews.ru/img/news/2021/08/18/shutterstock1716854038.jpg"
                  alt=""
                ></img>
              </div>
              <div className="card-content">
                <p>Проект был создан в рамках обучения React & TypeScript.</p>
              </div>
              <div className="card-action">
                <a href="https://t.me/Taer23" style={{ color: '#8bc34a' }}>
                  Telegram
                </a>
                <a
                  href="https://github.com/Terentiy01"
                  style={{ color: '#8bc34a' }}
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          className="btn light-green"
          onClick={() => navigate('/notes-localstorage')}
        >
          Обратно к списку дел
        </button>
      </div>
    </>
  )
}

export default AboutPage
