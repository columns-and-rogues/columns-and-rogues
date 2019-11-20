import Component from '../Component.js';
import levelComplete from './levelComplete.js';

class SingleCell extends Component {
    renderHTML() {
        let cell = this.props.cell;
        let character = this.props.character;

        let displayClass = ''; 
        let displayPlayer = ''; 

        switch (cell.contents) {
            case 0: 
                displayClass = 'empty'; 
                break; 
            case 1: 
                displayClass = 'gold'; 
                break; 
            case 2:
                displayClass = 'monster'; 
                break;
            case 3:
                displayClass = 'item'; 
                break;
        }

        displayPlayer = character.x === cell.x && character.y === cell.y ? 'displayPlayer' : ''; 
        
        if (cell.x === 4 && cell.y === 4) displayClass = 'door';
        if (displayPlayer === 'displayPlayer' && displayClass === 'door') {
            displayClass = 'door-open';
            displayPlayer = '';
            levelComplete();
        }

        return /*html*/ `
            <span 
                class='
                    cell
                    ${displayClass} 
                    ${displayPlayer}' 
                id='x${cell.x}-y${cell.y}'>
            </span>
        `;
    }
}

export default SingleCell;