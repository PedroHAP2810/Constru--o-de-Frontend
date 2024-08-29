export default function Familia(props) {

    const { nomeFamília } = props

  return (
    <>
        <h3> Família {nomeFamília} </h3>
        {props.children}
    </>
  )
}
