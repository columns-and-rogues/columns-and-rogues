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

        displayPlayer = character.x === cell.x && character.y === cell.y ? 'displayPlayer' : ''; 
        
        return /*html*/ `
            <span class='cell column-${cell.x} row-${cell.y} ${displayClass} ${displayPlayer}' id='${cell.x}-${cell.y}'>
            </span>
        `;
    }
}

export default SingleCell;