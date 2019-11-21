import Component from '../Component.js';


class Modal extends Component {
    
    renderHTML(){
        const cell = this.props.cell;
        const character = this.props.character;
        console.log(cell, 'XXXXXXX');
        if (cell.contents === 1) {
            character.gold++;
            return /*html*/`
            <section class="modal">
                <div class="modal-content">
                <img src='./assets/gold-star.gif'>
                <button>Collect Gold</button>
                </div>
            </section>
        `;
        }
        else if (cell.contents === 2) {
            character.hp--;
            return /*html*/`
            <section class="modal">
                <div class="modal-content">
                <img src='./assets/monster-icon.png'>
                </div>
            </section>
        `;            
        }
        else if (cell.contents === 3) {
            character.hp++;
            return /*html*/`
            <section class="modal">
                <div class="modal-content">
                <img src='./assets/item-logo.gif'>
                </div>
            </section>
        `;
        }

    }

    
}

export default Modal;