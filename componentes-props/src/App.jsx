import Pedido from "./Pedido"
import Cartao from "./Cartao"
import Feedback from "./Feedback"

const App = () => {
  const textoOK = 'Já chegou'
  const textoNOK = 'Ainda nao chegou'
  const funcaoOK = () => alert('Agradecemos o Feedback')
  const funcaoNOK = () => alert('Verificaremos o que aconteceu')
  const componenteFeedback = (
    <Feedback 
      textoOK={textoOK}
      textoNOK={textoNOK}
      funcaoOK={funcaoOK}
      funcaoNOK={funcaoNOK}
    />
  )
  return (
    <div className="container border rounded mt-2">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-xxl-3">
          
          {/* Pedido() */}

          <Cartao
            cabecalho="22/04/2024">
            <Pedido 
              icone="headset"
              titulo="HeadSet"
              descricao="fone bluetooth"/>
              {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-sm-12 col-md-6 col-xxl-3">

          <Cartao 
          cabecalho="31/02/2024">
            <Pedido 
              icone="gamepad"
              titulo="GamePad"
              descricao="controle nintendo"/>
              {componenteFeedback}
          </Cartao>

        </div>

        <div className="col-sm-12 col-md-6 col-xxl-3">
          <Cartao 
          cabecalho="1/07/2024">
            <Pedido
              icone="snowman"
              titulo="Boneco de Neve"
              descricao="Balança sozinho" />
              {componenteFeedback}
          </Cartao>

        </div>

        <div className="col-sm-12 col-md-6 col-xxl-3">
          <Cartao 
          cabecalho="25/12/2024">
            <Pedido 
              icone="hippo"
              titulo="hipopotamo"
              descricao="hipopotamo femea"/>
              {componenteFeedback}
          </Cartao>

        </div>
      </div>
      
    </div>
  )

}
export default App