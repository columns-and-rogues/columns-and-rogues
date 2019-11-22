import Component from '../Component.js';

class SingleCell extends Component {
    renderHTML() {
        let cell = this.props.cell;
        let character = this.props.character;
        const doorLoaction = this.props.doorLocation;

        let displayClass = ''; 
        let displayPlayer = ''; 
        let explored = 'unexplored';

        switch (cell.contents) {
            case 0: 
                displayClass = 'empty';
                // explored = 'explored';
                break; 
            case 1: 
                displayClass = 'gold';
                explored = 'explored'; 
                break; 
            case 2:
                displayClass = 'monster';
                explored = 'explored';
                break;
            case 3:
                displayClass = 'item'; 
                explored = 'explored';
                break;
        }

        displayPlayer = character.x === cell.x && character.y === cell.y ? 'displayPlayer' : '';
        
        if (cell.x === 0 && cell.y === 0) explored = 'explored';
        
        if (cell.x === doorLoaction.x && cell.y === doorLoaction.y) {
            displayClass = 'door';
            // explored = 'explored';
            cell.contents = 4;
        }

        if (displayPlayer === 'displayPlayer' && displayClass === 'door') {
            displayClass = 'door-open';
            displayPlayer = '';
            explored = 'explored';
            return /*html*/ `
            <span 
                class='
                    cell
                    ${explored}
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
                    ${explored}
                    ${displayClass} 
                    ${displayPlayer}' 
                id='x${cell.x}-y${cell.y}'>
            </span>
        `;
    }
}

export default SingleCell;