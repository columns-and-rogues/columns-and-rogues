import Component from '../Component.js'; 

class BoardItem extends Component {

    onRender(li) {
        const item = this.props.item; 
        const boardSquare = li.querySelector('.board-square');
        boardSquare.addEventListener('event', () => {
            
        }
        );

    }
}