'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const moreBtn = document.querySelector('.more');

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
                '-40%',
                '3%',
                '0',
                '3vw',
                '.avocado-common__img'
            ).render();

            new DotBtnMenu(
                'Простые рецепты с авокадо',
                '-68.5%',
                '20%',
                '1',
                '6vw',
                '.avocado-common__img',
            ).render();

            new DotBtnMenu(
                '8 научных фактов о пользе авокадо',
                '-101.5%',
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
                '-24.5%',
                '80%',
                '4',
                '1vw',
                '.avocado-common__img',
            ).render();

            new DotBtnMenu(
                'Родина авокадо',
                '97.5%',
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
                menuItemContainer = document.querySelectorAll('.menu-item-container');

            menuItemContainer.forEach(item => {
                item.classList.add('invisible');
            });

            const loadTime2 = window.setTimeout(() => {
                menuItemContainer.forEach(item => {
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

            // Работа меню - переходы по навигации.avocado-common__img 
            const
                menuItem = document.querySelectorAll('.menu__circle'),
                smallCircle = document.querySelectorAll('.menu__circle-inner-circle'),
                mainContainer = document.querySelector('.container'),
                containerInner = document.querySelector('.avocado-common '),
                imgBlock = document.querySelector('.avocado-common__img ');



            const homeland = {
                title: 'Родина авокадо',
                firstText: 'История авокадо началась в далёкой Мексике. 10 тысячелетий назад древние ацтеки собирали плоды авокадо в лесах и использовали их в качестве пищи. Позже они стали выращивать деревья авокадо вблизи своих жилищ, отбирая лучшие экземпляры. О культивировании авокадо в 500 г до н.э. свидетельствуют найденные при раскопках жилищ ацтеков семена авокадо,',
                secondText: 'значительно превосходящие по размерам семена дикорастущих экземпляров. Ацтеки высоко ценили плоды авокада, обладающие высокими питательными качествами, и называли его “лесным маслом”. Они также приписывали авокадо свойства афродизиака, и по форме его плодов, напоминающих строение мужских органов, называли авокадо “ahuacaquahuitl”, что в переводе означает “яичковое дерево”.',
                note: '*сейчас этот фрукт растет и в других странах с тропическим и субтропическим климатом: США, Бразилии, Израиле, африканских государствах.',
                countries: {
                    usa: 'src/img/homeland/usa.svg',
                    mexico: 'src/img/homeland/Mexico.svg',
                    brazil: 'src/img/homeland/Brazil.svg',
                    africa: 'src/img/homeland/Africa.svg'
                },
                ps: {
                    pSel1: '.avocado-common',
                    pSel2: '.block__btn',
                    pSel3: '.container'
                }
            };

            const {
                title,
                firstText,
                secondText,
                note,
                countries: {
                    usa,
                    mexico,
                    brazil,
                    africa
                },
                ps: {
                    pSel1,
                    pSel2,
                    pSel3
                }
            } = homeland;

            class HomelandPage {
                constructor(title, text1, text2, text3, countrieUSA, countrieMexico, countrieBrazil, countrieAfrica, parentSelector, parentSelector2, parentSelector3) {
                    this.title = title;
                    this.text1 = text1;
                    this.text2 = text2;
                    this.text3 = text3;
                    this.countrieUSA = countrieUSA;
                    this.countrieMexico = countrieMexico;
                    this.countrieBrazil = countrieBrazil;
                    this.countrieAfrica = countrieAfrica;
                    this.parent = document.querySelector(parentSelector);
                    this.parent2 = document.querySelector(parentSelector2);
                    this.parent3 = document.querySelector(parentSelector3);
                }

                render() {
                    const
                        textDescr = document.createElement('div'),
                        textDescr2 = document.createElement('div'),
                        note = document.createElement('div'),
                        map = document.createElement('div');

                    textDescr.classList.add('text-descr');
                    textDescr2.classList.add('text-descr2');
                    note.classList.add('note');
                    map.classList.add('map');

                    textDescr.innerHTML = `
                            <div class="firstBlock">
                                <h1 class="block__title2">
                                ${this.title}
                                </h1>
                                <div class="block__description">
                                    ${this.text1}
                                </div>
                            </div>
                      `;

                    textDescr2.innerHTML = `
                        <div class="secondBlock">
                            <div class="block__description">
                            ${this.text2}
                            </div>
                        </div>
                        `;

                    note.innerHTML = `
                            <div class="block__description">
                                ${this.text3}
                            </div>
                        `;

                    map.innerHTML = `
                            <div class="usa-mexico">
                                <div class="usa">
                                    <img src=${this.countrieUSA} alt="">
                                </div>
                                <div class="mexico">
                                    <img src=${this.countrieMexico} alt="">
                                </div>
                            </div>
                            <div class="africa">
                                <img src=${this.countrieAfrica} alt="">
                            </div>
                            <div class="brazil">
                                <img src=${this.countrieBrazil} alt="">
                            </div>
                        `;

                    this.parent.prepend(textDescr);
                    this.parent.append(textDescr2);
                    this.parent2.append(map);
                    this.parent.append(note);
                }
            }



            menuItem.forEach(item => {
                item.addEventListener('click', (e) => {
                    const target = e.target;

                    menuItemContainer.forEach(item => {
                        item.remove();
                    });

                    if (target == menuItem[5] || target.classList.contains('menu__circle-inner-circle') && target == smallCircle[5]) {
                        new HomelandPage(
                            `${title}`,
                            `${firstText}`,
                            `${secondText}`,
                            `${note}`,
                            `${usa}`,
                            `${mexico}`,
                            `${brazil}`,
                            `${africa}`,
                            `${pSel1}`,
                            `${pSel2}`,
                            `${pSel3}`
                        ).render();

                        document.querySelector('.avocado-common-text-block').remove();

                        document.querySelector('.avocado-common__img').style = 'width: 25%; position: inherit; position: static';

                        document.querySelector('.block__title2').style = 'margin-bottom:  2vw;';
                        document.querySelector('.text-descr').style = 'width: 37.5%; line-height: 2.5vw;';
                        document.querySelector('.text-descr2').style = 'width: 37.5%; line-height: 2.5vw;';
                        document.querySelector('.note').style = ' line-height: 2.5vw;';

                        containerInner.style = 'display: flex;  flex-wrap: wrap; width: 100%; justify-content: start;';
                    }
                });
            });
        }
        moveAvocadoToCenter();

        function createMenuOnAvocado() {}
    });



});