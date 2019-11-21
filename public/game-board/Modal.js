import Component from '../Component.js';


class Modal extends Component {
    
    renderHTML(){
        const cell = this.props.cell;
        const character = this.props.character;
        let modalImage;

        switch (cell.contents){
            case 1:
                modalImage = 'gold-star.gif';
                character.gold++;
                break;
            case 2:
                modalImage = 'monster-icon.png';
                character.hp--;
                break;
            case 3:
                modalImage = 'item-logo.gif';
                character.hp++;
                break;
            case 4:
                modalImage = 'temp-char.png';
                //adjust stats and whatever else
                break;
            case 5:
                modalImage = '';
                //endgame
                break;
        }
        
        return /*html*/`
            <section class="modal">
                <div class="modal-content">
                <img src='./assets/${modalImage}'>
                </div>
            </section>
        `;
    }
}

export default Modal;