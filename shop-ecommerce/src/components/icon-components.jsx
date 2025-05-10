
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function IconComponent() {
  return (
    <div className="flex space-x-4 text-xl text-gray-700">
      <FontAwesomeIcon icon={faSearch} />
      <FontAwesomeIcon icon={faShoppingCart} />
    </div>
  );
}

export default IconComponent;
