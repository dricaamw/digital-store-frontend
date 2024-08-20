import creditCardType from "credit-card-type";
import visa from "../assets/images/visa.svg";
import mastercard from "../assets/images/mastercard.svg";
import americanExpress from "../assets/images/americanExpress.png";
import dinersClub from "../assets/images/dinersClub.svg";
import discover from "../assets/images/discover.svg";
import elo from "../assets/images/elo.svg";
import jcb from "../assets/images/jcb.svg";
import { modalPropTypes } from "../utils/modalPropTypes";

const getCardImage = (type) => {
  switch (type) {
    case "visa":
      return visa;
    case "mastercard":
      return mastercard;
    case "american-express":
      return americanExpress;
    case "diners-club":
      return dinersClub;
    case "discover":
      return discover;
    case "elo":
      return elo;
    case "jcb":
      return jcb;
    default:
      return null;
  }
};

  const CardType = ({ cardNumber }) => {
  const cleanNumber = cardNumber.replace(/\D/g, "");
  const types = creditCardType(cleanNumber);
  const cardType = types.length > 0 ? types[0].type : "default";
  const cardImage = getCardImage(cardType);
  
  return (
    <div>
      {cardImage ? (
        <img src={cardImage} alt={cardType} />
      ) : (
        <span>Tipo de cartão não detectado</span>
      )}
    </div>
  );
};

CardType.propTypes = modalPropTypes;

export default CardType;
