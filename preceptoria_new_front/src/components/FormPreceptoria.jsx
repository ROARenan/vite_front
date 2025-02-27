import React, { useState, useEffect } from 'react'
import './FormPreceptoria.css'

function FormPreceptoria() {
  const [email, setEmail] = useState('')
  const [turmas, setTurmas] = useState([])
  const [alunos, setAlunos] = useState([])
  const [selectedTurma, setSelectedTurma] = useState('')
  const [selectedAluno, setSelectedAluno] = useState('')
  const [dataPreceptoria, setDataPreceptoria] = useState('')

  useEffect(() => {
    // Fetch turmas from API
    fetch('/api/turmas')
      .then(response => response.json())
      .then(data => setTurmas(data))

    // Fetch alunos from API
    fetch('/api/alunos')
      .then(response => response.json())
      .then(data => setAlunos(data))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log({
      email,
      selectedTurma,
      selectedAluno,
      dataPreceptoria
    })
  }

  const validateEmail = (email) => {
    return email.endsWith('@pedreira.org')
  }

  return (
    <form onSubmit={handleSubmit} className="form-preceptoria">
      <div className="form-group">
        <label htmlFor="email">E-mail Preceptor:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          pattern=".+@pedreira\.org"
          title="O e-mail deve terminar com @pedreira.org"
        />
      </div>
      <div className="form-group">
        <label htmlFor="turma">Turma:</label>
        <select
          id="turma"
          value={selectedTurma}
          onChange={(e) => setSelectedTurma(e.target.value)}
          required
        >
          <option value="">Selecione uma turma</option>
          {turmas.map((turma) => (
            <option key={turma.id} value={turma.id}>
              {turma.nome}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="aluno">Aluno:</label>
        <select
          id="aluno"
          value={selectedAluno}
          onChange={(e) => setSelectedAluno(e.target.value)}
          required
        >
          <option value="">Selecione um aluno</option>
          {alunos.map((aluno) => (
            <option key={aluno.id} value={aluno.id}>
              {aluno.nome}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="dataPreceptoria">Data Preceptoria:</label>
        <input
          type="datetime-local"
          id="dataPreceptoria"
          value={dataPreceptoria}
          onChange={(e) => setDataPreceptoria(e.target.value)}
          required
        />
      </div>
      <button type="submit">Salvar</button>
    </form>
  )
}

export default FormPreceptoria