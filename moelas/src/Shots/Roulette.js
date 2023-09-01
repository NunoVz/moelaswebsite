import React, { useEffect, useState } from 'react';
import './Roulette.css';

function RuletaComponent() {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const beverageNames = ["Coke", "Pepsi", "Sprite", "Fanta", "Water", "Tea", "Coffee", "Juice"];
  const [currentBeverages, setCurrentBeverages] = useState(Array(8).fill(""));

  useEffect(() => {
    const tamanyoRuleta = 360;
    const numeroCasillas = 8;
    const anguloCasillas = 360 / numeroCasillas;
    const grados = (180 - anguloCasillas) / 2;
    const alturaCasilla = Math.tan((grados * Math.PI) / 180) * (tamanyoRuleta / 2);

    const ruletaElement = document.querySelector('.ruleta');

    ruletaElement.style.width = tamanyoRuleta + 'px';
    ruletaElement.style.height = tamanyoRuleta + 'px';

    const afterNumeroStyle = document.createElement('style');
    afterNumeroStyle.id = 'afterNumero';
    document.head.appendChild(afterNumeroStyle);

    const shuffledBeverageNames = [...beverageNames];
    for (let i = shuffledBeverageNames.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledBeverageNames[i], shuffledBeverageNames[j]] = [shuffledBeverageNames[j], shuffledBeverageNames[i]];
    }

    for (let i = 1; i <= numeroCasillas; i++) {
      const opcionElement = document.createElement('div');
      opcionElement.classList.add('opcion', 'opcion-' + i);
      opcionElement.style.transform = 'rotate(' + anguloCasillas * i + 'deg)';
      opcionElement.style.borderBottomColor = getRandomColor();
      ruletaElement.appendChild(opcionElement);

      const beverageIndex = i - 1; // Adjusted for 0-based array indexing
      const afterNumeroStyleRule = `.opcion-${i}::before {content: "${shuffledBeverageNames[beverageIndex]}"}`;
      afterNumeroStyle.appendChild(document.createTextNode(afterNumeroStyleRule));

      setCurrentBeverages(shuffledBeverageNames);
      
      opcionElement.dataset.content = shuffledBeverageNames[beverageIndex];
      opcionElement.dataset.ancho = tamanyoRuleta / 2 + 'px';
      opcionElement.dataset.line = tamanyoRuleta / 2 + 'px';
    }

    const opcionElements = document.querySelectorAll('.opcion');

    opcionElements.forEach((opcionElement) => {
      opcionElement.style.borderBottomWidth = alturaCasilla + 'px';
      opcionElement.style.borderRightWidth = tamanyoRuleta / 2 + 'px';
      opcionElement.style.borderLeftWidth = tamanyoRuleta / 2 + 'px';
    });

    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    ruletaElement.addEventListener('click', () => {
      if (!spinning) {
        const num = 1 + Math.round(Math.random() * (numeroCasillas - 1));
        const newRotationAngle = rotationAngle + 360 * 5 + 360 * (numeroCasillas - 1) - anguloCasillas * num;
        setRotationAngle(newRotationAngle);
        setSpinning(true);
    
        // Disable the click event listener during the spinning animation
        ruletaElement.style.pointerEvents = 'none';
    
        // Reset the spinning state after the animation duration (5.8 seconds)
        setTimeout(() => {
          setSpinning(false);
          // Re-enable the click event listener
          ruletaElement.style.pointerEvents = 'auto';
        }, 5800);
      }
    });

    return () => {
      // Clean up resources if necessary
    };
  }, [rotationAngle, spinning]);

  return (
    <div className="contenedor-ruleta">
      <div className={`ruleta ${spinning ? 'spinning' : ''}`} style={{ transform: `rotate(${rotationAngle}deg)` }}>
        {currentBeverages.map((beverage, index) => (
          <div key={index} className={`opcion opcion-${index + 1}`}>{beverage}</div>
        ))}
      </div>
    </div>
  );
}

export default RuletaComponent;
