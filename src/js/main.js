'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const
        moreBtn = document.querySelector('.more');

    // Рассчет сдвига авокадо на центр и изменения отступа у текстового блока
    const
        mainContainer = document.querySelector('.avocado-common'),
        mainContainerWidth = mainContainer.clientWidth,
        mainContainerHeight = mainContainer.clientHeight,
        avocadoImgWidth = document.querySelector('.avocado-common__img').clientWidth,
        whatAShift = (mainContainerWidth - avocadoImgWidth) / 2 + 'px';

    // Сдвиг общего контейнера в центр
    const whatAShiftTwo = (document.body.clientHeight - mainContainerHeight) / 2 + 'px';
    mainContainer.style.marginBottom = `${whatAShiftTwo};`;


    moreBtn.addEventListener('click', () => {
        function moveAvocadoToCenter() {
            document.querySelector('.avocado-common-text-block').classList.add('hideBlockLeft');
            const loadTime = window.setTimeout(() => {
                document.querySelector('.avocado-common__img').style = `
                    right: ${whatAShift};
                `;
            }, 300);

            // Создание и появление кнопок меню
            class DotBtnMenu {
                constructor(text, right, top, id, mrnLeft, parentSelector, color, colorSmall) {
                    this.text = text;
                    this.right = right;
                    this.top = top;
                    this.id = id;
                    this.mrnLeft = mrnLeft;
                    this.parent = document.querySelector(parentSelector);
                    this.color = color;
                    this.colorSmall = colorSmall;
                }

                render() {
                    const elem = document.createElement('div');

                    elem.classList.add('menu-item-container');
                    elem.style = `
                        top:${this.top};
                        right:${this.right};
                    `;

                    elem.innerHTML = `
                    <div class="menu__circle">
                        <div class="menu__circle-inner-circle"></div>
                    </div>
                     <div class="menu-text">${this.text}</div>
                    `;

                    this.parent.append(elem);

                    const menuText = document.querySelectorAll('.menu-text');
                    menuText[this.id].style.marginLeft = this.mrnLeft;
                    const bigCircle = document.querySelectorAll('.menu__circle');
                    bigCircle[this.id].style.background = this.color;
                    const smallCircle = document.querySelectorAll('.menu__circle-inner-circle');
                    smallCircle[this.id].style.background = this.colorSmall;

                }
            }

            new DotBtnMenu(
                'Что такое авокадо?',
                '-47%',
                '3%',
                '0',
                '3vw',
                '.avocado-common__img'
            ).render();

            new DotBtnMenu(
                'Простые рецепты с авокадо',
                '-77.5%',
                '20%',
                '1',
                '6vw',
                '.avocado-common__img',
            ).render();

            new DotBtnMenu(
                '8 научных фактов о пользе авокадо',
                '-112.5%',
                '49%',
                '2',
                '8vw',
                '.avocado-common__img',
                'rgba(173, 205, 33, 0.6)',
                '#ADCD21'
            ).render();

            new DotBtnMenu(
                'Покупка и хранение',
                '-67.5%',
                '40%',
                '3',
                '3vw',
                '.avocado-common__img',
            ).render();

            new DotBtnMenu(
                'Вред авокадо',
                '-27.5%',
                '80%',
                '4',
                '1vw',
                '.avocado-common__img',
            ).render();

            new DotBtnMenu(
                'Родина авокадо',
                '95.5%',
                '60%',
                '5',
                '-13vw',
                '.avocado-common__img',
            ).render();

            new DotBtnMenu(
                'Витамины',
                '90.5%',
                '28%',
                '6',
                '-9vw',
                '.avocado-common__img',
            ).render();

            const
                menuText = document.querySelectorAll('.menu-text'),
                menuCircle = document.querySelectorAll('.menu__circle'),
                menuItem = document.querySelectorAll('.menu-item-container');

            menuItem.forEach(item => {
                item.classList.add('invisible');
            });

            const loadTime2 = window.setTimeout(() => {
                menuItem.forEach(item => {
                    item.classList.remove('invisible');
                });
            }, 500);

            menuText.forEach(text => {
                text.style.opacity = '0';
                menuCircle.forEach((circle, i) => {
                    circle.addEventListener('mouseover', () => {
                        menuText[i].style.opacity = '1';
                    });

                    circle.addEventListener('mouseout', () => {
                        menuText[i].style.opacity = '0';
                    });
                });
            });

            // Работа меню - переходы по навигации
            
        }
        moveAvocadoToCenter();

        function createMenuOnAvocado() {}
    });



});