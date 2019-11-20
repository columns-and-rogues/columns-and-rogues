import Component from '../Component.js';

class SingleCell extends Component {
    renderHTML() {
        let cell = this.props.cell;
        let character = this.props.character;
        let boardSize = this.props.boardSize - 1;

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
        
        if (cell.x === boardSize && cell.y === boardSize) displayClass = 'door';

        if (displayPlayer === 'displayPlayer' && displayClass === 'door') {
            displayClass = 'door-open';
            displayPlayer = '';
            return /*html*/ `
            <span 
                class='
                    cell
                    ${displayClass} 
                    ${displayPlayer}' 
                id='x${cell.x}-y${cell.y}'>
                <img src='./assets/temp-char.png' id='character'> 
            </span>
        `; 
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