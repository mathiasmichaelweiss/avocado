'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const
        moreBtn = document.querySelector('.more'),
        avocadoImgWidth = document.querySelector('.avocado-common__img').clientWidth + 'px',
        imageContaner = document.querySelector('.img-container').style.width = avocadoImgWidth;


    class dotBtnMenu {
        constructor(width, height, color, index) {

        }
    }

    moreBtn.addEventListener('click', () => {
        function moveAvocadoToCenter() {
            document.querySelector('.avocado-common-text-block').classList.add('hideBlockLeft');
            document.querySelector('.img-container').classList.add('avocadoCenter');

        }
        moveAvocadoToCenter();

        function createMenuOnAvocado() {}
    });



});