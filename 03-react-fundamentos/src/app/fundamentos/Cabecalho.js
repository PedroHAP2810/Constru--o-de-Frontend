import style from './fundamentos.module.css'

export default function Cabecalho(props) {

    const { título, descricao } = props

  return (
    <>
    <h1 className={style.título}>{título}</h1>
    <p className={style.descricao}>{descricao}</p>
    <hr />
    </>
  )
}
