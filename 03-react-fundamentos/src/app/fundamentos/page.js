import MeuComponente from './MeuComponente';
import NumeroMaior from './NumeroMaior';
import NumeroAleatorio from './NumeroAleatorio';
import Cabecalho from './Cabecalho';
import Familia from './Familia';
import Filho from './Filho';



export default function Fundamentos() {

    
    return  (
            <>
                { /*Comentarios no JSX*/ }

                <Cabecalho título="Fundamentos" descricao="Página de fundamentos de React" />

                <h1>Pagina Fundamentos</h1>
                <hr />

                <MeuComponente />
                <hr />

                <NumeroMaior numA={2} numB={10} />
                <NumeroMaior numA={100} numB={8} />
                <NumeroMaior numA={20} numB={32} />
                <NumeroMaior numA={2} numB={11} />
                <NumeroMaior numA={1140} numB={10} />
                <NumeroMaior numA={222} numB={666} />

            <hr />

            <NumeroAleatorio />
            <NumeroAleatorio />
            <NumeroAleatorio />
            <NumeroAleatorio />

            <hr />

            <Familia nomeFamilia="Soares">
                <Filho nome="Julia" sobreNome="Soares"/>
                <Filho nome="João" sobreNome="Soares"/>
                <Filho nome="Janilson" sobreNome="Soares"/>
                <Filho nome="Josivan" sobreNome="Soares"/>
            </Familia>

            <Familia nomeFamilia="Xooró">
                <Filho nome="Sandy" sobreNome="Xororó"></Filho>
                <Filho nome="Junior" sobreNome="Xororó"></Filho>
            </Familia>


            </>
       )
   
       

}