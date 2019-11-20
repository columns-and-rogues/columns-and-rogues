import Component from '../Component.js';

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

        if (cell.x === 4 && cell.y === 4) displayClass = 'door';

        displayPlayer = character.x === cell.x && character.y === cell.y ? 'displayPlayer' : ''; 
        
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