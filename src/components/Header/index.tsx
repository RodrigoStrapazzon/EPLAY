import { HeaderBar, Links, LinkItem, LinkCart } from './styles'
import logo from '../../assets/images/logo.svg'
import carinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <img src={logo} alt="EPLAY" />
    <nav>
      <Links>
        <LinkItem>
          <a href="http://">Categorias</a>
        </LinkItem>
        <LinkItem>
          <a href="http://">Novidades</a>
        </LinkItem>
        <LinkItem>
          <a href="http://">Promoções</a>
        </LinkItem>
      </Links>
    </nav>
    <LinkCart href="#">
      0 - produto(s)
      <img src={carinho} alt="" />
    </LinkCart>
  </HeaderBar>
)

export default Header
