import Component from '../Component.js';


class Modal extends Component {
    
    renderHTML(){
        const modalDisplay = this.props.modalDisplay;
        if (!modalDisplay) {
            return /*html*/`
            <div class="modal hidden"><div>
        `;
        }
        const cell = this.props.cell;
        const character = this.props.character;
        console.log(cell, 'XXXXXXX');
        if (cell.contents === 1) {
            character.gold++;
            return /*html*/`
            <section class="modal">
                <div class="modal-content">
                <img src='./assets/gold-star.gif'>
                <button id="gold-button">Collect Gold</button>
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
                <button id="monster-button">Fight Monster</button>
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
                <button id="item-button">Collect Item</button>
                </div>
            </section>
        `;
        }

    }

    
}

export default Modal;