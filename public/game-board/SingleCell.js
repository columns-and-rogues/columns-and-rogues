import Component from '../Component.js';

class SingCell extends Component {
    renderHTML() {
        let cell = this.props.cell;
    
        let displayClass = ''; 


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

        console.log(cell);
        return /*html*/ `
            <span class='cell column-${cell.x} row-${cell.y} ${displayClass}' id='${cell.x}-${cell.y}'>
           
            </span>
        `;
    }
}

export default SingCell;